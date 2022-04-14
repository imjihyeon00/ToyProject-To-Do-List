let myToDoLists =  new Array();
document.addEventListener("DOMContentLoaded", function(){

    init();
});



function init() {
    // localstorage 여부 확인
    // 존재 : 리스트 출력
    // 비존재 : addToDoBox() 호출

    if(localStorage.getItem('myToDoLists')){
        myToDoLists = searchLocal();
        drawLocal();
    } else {
        addToDoBox();
        addLocal();
    }
}


//localstorage 그리기
function drawLocal() {
    if(myToDoLists.length == 0){
        addToDoBox();
    } else {
        const boxArea = document.querySelector('.boxArea');
        if(boxArea.querySelector('label') != null){
            boxArea.innerHTML = '';
        }
        myToDoLists.forEach((myToDo, index) => {
            const label = document.createElement('label');
            let isComplete = 0;

            myToDo.toDo.forEach((el)=>{
                if(el.complete === false){
                    isComplete++;
                }
            })

            label.classList.add('boxLabel');
            label.htmlFor = `box${index}`;
            let txt = `
                <input type="checkbox" id="box${index}" class="checkBoxs" disabled>
                <div class="box">
                    <div class="title">
                        <div class="in">
                            <div class="tit">${myToDo.title}</div>
                            <span class="date">${myToDo.date} </span>
                            <span class="listCount">할 일이 ${isComplete}개 남았습니다.</span>
                        </div>
                    </div>
                    <div class="toDoLists">
                        <div class="in">
                            <ul>`;
                            myToDo.toDo.forEach((el,idx)=>{
                                txt += el.complete === true ? 
                                `<li><input type="checkbox" name="" id="box${myToDo.no}_list${idx+1}" checked /><label for="box${myToDo.no}_list${idx+1}">${el.text}</label><span class="delListBtn"></span></li>` :
                                `<li><input type="checkbox" name="" id="box${myToDo.no}_list${idx+1}" /><label for="box${myToDo.no}_list${idx+1}">${el.text}</label><span class="delListBtn"></span></li>`;
                            });                            
            txt += `</ul>
                        </div>
                    </div>
                    <div class="addToDoArea">
                        <div class="in">
                            <input class="newList" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onkeyup="enterCheck();" />
                        </div>
                    </div>
                    <button class="toDoBtn addToDo" onclick="javascript:toDoBtnClick(this);" type="button"></button>
                </div>
            `;

            label.innerHTML = txt;
            document.querySelector('.boxArea').appendChild(label);
        });
    }
}

//localstorage 조회
function searchLocal() {
    let jsonData = JSON.parse(localStorage.getItem('myToDoLists'));

    return jsonData;
}

//localstorage 생성
function addLocal() {
    if(myToDoLists.length == 0){
        myToDoLists = [];
    }
    localStorage.setItem("myToDoLists",JSON.stringify(myToDoLists));
}

//localstorage 할 일 박스 생성 
function addLocalToDoBox(title, date) {
    const toDoBox = {"date": date, "title": title, "toDo": []};
    myToDoLists.push(toDoBox);
    addLocal();
    drawLocal();
}

//localstorage 할 일 생성
function addLocalToDo(text, no) {
    console.log(text, no);
    const toDo = {"text": text, "complete": false};
    myToDoLists[no].toDo.push(toDo);
    addLocal();
    drawLocal();
}

//localstorage 삭제
function delLocal() {
    
}

//localstorage 수정
function modLocal() {
    
}
