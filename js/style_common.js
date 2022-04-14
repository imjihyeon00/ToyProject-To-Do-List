const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtns = document.querySelectorAll('.toDoBtn');

//events
addBtn.addEventListener('click', addToDoBox);
delBtn.addEventListener('click', deleteToDoBox);

//변수
let isNewBox = false;

//function
function addToDoBox() {
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date();
    const boxNo = myToDoLists.length == 0 ? 0 : myToDoLists.length;

    let txt = 
    `<input type="checkbox" id="box${boxNo}" class="checkBoxs" disabled>
    <div class="box">
        <div class="title">
            <div class="in">
                <input class="toDoListTit" type="text" placeholder="제목을 입력해 주세요." onkeyup="enterCheck();" autofocus />
                <span class="date">${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayList[date.getDay()]}요일 </span>
                <span class="listCount">할 일이 <i>0</i>개 남았습니다.</span>
            </div>
        </div>
        <div class="toDoLists">
            <div class="in">
                <ul>
                </ul>
            </div>
        </div>
        <div class="addToDoArea">
            <div class="in">
                <input class="newList" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onkeyup="enterCheck();" />
            </div>
        </div>
        <button class="toDoBtn addToDo" onclick="javascript:toDoBtnClick(this);" type="button"></button>
    </div>`;

    
    if (!isNewBox) {
        const label = document.createElement('label');
        label.classList.add('boxLabel');
        label.htmlFor = 'box'+myToDoLists.length;
        label.innerHTML =txt;
        document.querySelector('.boxArea').appendChild(label);
    } else {
        alert('이미 새로운 To Do List가 존재합니다.\n제목을 입력 후 Enter를 눌러주세요.')
    }

    isNewBox = true;
}

function toDoBtnClick(btn) {
    const $toDoBtn = btn;
    $toDoBtn.classList.toggle('addToDo');
    $toDoBtn.classList.toggle('exitToDo');
    if(!$toDoBtn.classList.contains('addToDo')){
        $toDoBtn.previousElementSibling.style.display = 'block';
    } else {
        $toDoBtn.previousElementSibling.style.display = 'none';
    }
}

function enterCheck() {
    const target = window.event.target;
    const keyCode = window.event.keyCode;

    // to do list 박스 추가시 타이틀 입력
    if( keyCode == 13 && target.classList.contains('toDoListTit')){
        const div = document.createElement('div');
        div.classList.add('tit');
        div.innerText = target.value;
        target.before(div);
        addLocalToDoBox(target.value, target.nextElementSibling.innerText);
        target.remove();
        isNewBox = false;
    }

    // to do list의 새로운 할 일 입력시
    if( keyCode == 13 && target.classList.contains('newList')){
        const text = target.value;
        const no = target.closest('.boxLabel').htmlFor.slice(-1);

        addLocalToDo(text, no);
    }
}

function deleteToDoBox() {
    let isChk = false;
    const checkBoxs = document.querySelectorAll('.checkBoxs');
    // active가 없을 때
    // 1. active 추가
    // 2. list 선택 가능
    // active가 있을 때
    // 1. 모달창 뜸
    // 1-1. 예 : 선택된 모달창 삭제
    // 1-2. 아니오 : 선택된 모달창 해제
    // 3. active 제거

    if(!delBtn.classList.contains('active')){
        delBtn.classList.add('active');
        checkBoxs.forEach(function (checkBox) {
            checkBox.disabled = false;
        });
    } else {

        for(var i=0;i<checkBoxs.length;i++){
            if(checkBoxs[i].checked == true){
                isChk = true;
                break;
            }
        }

        if(isChk) {
            layerOpen('#delModal');
        } else {
            checkBoxs.forEach(function (checkBox) {
                checkBox.disabled = true;
            });
            
            delBtn.classList.remove('active');
        }
    }
}

function modalNoBtn() {
    const checkBoxs = document.querySelectorAll('.checkBoxs');

    checkBoxs.forEach(function (checkBox) {
        checkBox.checked = false;
        checkBox.disabled = true;
    });
    
    delBtn.classList.remove('active');
    layerClose('#delModal');
}