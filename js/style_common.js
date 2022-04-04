const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const toDoBtns = document.querySelectorAll('.toDoBtn');

//events
addBtn.addEventListener('click', addToDoBox);
delBtn.addEventListener('click', deleteToDoBox);
toDoBtns.forEach(function(toDoBtn,i){
    toDoBtn.addEventListener('click', function(){ toDoBtnClick(this) });
});


//function
function addToDoBox() {
    console.log('a');
    let txt = 
    `<input type="checkbox" id="box4" class="checkBoxs" disabled>
    <div class="box">
        <div class="title">
            <div class="in">
                <input type="text" placeholder="제목을 입력해 주세요." onkeydown="JavaScript:EnterCheck();" />
                <span class="date">2022년 x월 x일 x요일 </span>
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
    const label = document.createElement('label');
    label.classList.add('boxLabel');
    label.innerHTML =txt;
    // label.htmlFor = 'some-input-id';
    document.querySelector('.boxArea').appendChild(label)
}

function deleteToDoBox() {
    delBtn.classList.toggle('active');
    document.querySelectorAll('.checkBoxs').forEach(function (box) {
        if(box.disabled){
            box.disabled = false;
        } else {
            document.querySelectorAll('.checkBoxs').forEach(function (box){box.checked = false});
            box.disabled = true;
        }
    });
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

function EnterCheck(event) {
    if(event.keyCode == 13){
        console.log('gg');
   }
}