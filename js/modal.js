document.addEventListener("DOMContentLoaded", function(){

});

/* 오픈 */
function layerOpen(id) {
    const $id = document.querySelector(id);
    const idx = document.defaultView.getComputedStyle($id).getPropertyValue("z-index");
    
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('#mask').style.cssText = `opacity: .6; display: block; z-index: ${idx-1};`;
    $id.style.display = 'flex';
}

/* 클로즈 함수 */
function layerClose(id){
    const $id = document.querySelector(id);
    const $mask = document.querySelector('#mask');
    const idx = document.defaultView.getComputedStyle($id).getPropertyValue("z-index");
    
    $id.style.display = 'none';
    document.querySelector('body').style.overflow = '';
    $mask.style.cssText = `z-index: 99999; display: none;`;
}