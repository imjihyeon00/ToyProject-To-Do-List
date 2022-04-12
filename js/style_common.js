const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtns = document.querySelectorAll('.toDoBtn');

//events
addBtn.addEventListener('click', addToDoBox);
delBtn.addEventListener('click', deleteToDoBox);
toDoBtns.forEach(function(toDoBtn,i){
    toDoBtn.addEventListener('click', function(){ toDoBtnClick(this) });
});

//변수
let isNewBox = false;

//function
function addToDoBox() {
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date();

    let txt = 
    `<input type="checkbox" id="box4" class="checkBoxs" disabled>
    <div class="box">
        <div class="title">
            <div class="in">
                <input class="toDoListTit" type="text" placeholder="제목을 입력해 주세요." onkeyup="enterCheck();" />
                <span class="date">${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayList[date.getDay()]}요일 </span>
                <span class="listCount">할 일이 n개 남았습니다.</span>
            </div>
        </div>
        <div class="toDoLists">
            <div class="in">
                <ul>
                    <li><input type="checkbox" name="" id="box4_list1"><label for="box4_list1">해야 할 일 텍스트1</label><span class="delListBtn"></span></li>
                </ul>
            </div>
        </div>
        <div class="addToDoArea">
            <div class="in">
                <input type="text" placeholder="할 일을 입력해 주세요.">
            </div>
        </div>
        <button class="toDoBtn addToDo" type="button"></button>
    </div>`;

    
    if (!isNewBox) {
        const label = document.createElement('label');
        label.classList.add('boxLabel');
        label.innerHTML =txt;
        document.querySelector('.boxArea').appendChild(label);
    } else {
        alert('이미 새로운 To Do List가 존재합니다. 제목을 입력해 주세요.')
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
    if(window.event.keyCode == 13){
        console.log('gg');
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