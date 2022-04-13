document.addEventListener("DOMContentLoaded", function(){
    let myToDoLists = new Array();

    init();
});



function init() {
    // localstorage 여부 확인
    // 존재 : 리스트 출력
    // 비존재 : addToDoBox() 호출

    if(localStorage.getItem('myToDoLists')){
        // 존재 : 리스트 출력
    } else {
        addToDoBox();
    }
}


//localstorage 조회
function searchLocal() {
    let jsonData = JSON.stringify(localStorage.getItem('myToDoLists'));
}

//localstorage 생성
function addLocal() {
    
}

//localstorage 삭제
function delLocal() {
    
}

//localstorage 수정
function modLocal() {
    
}
