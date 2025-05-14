// 동작 원리.
// 'DOMContentLoaded' : 1번째 매개변수 : 해당 문서가 로드가 되면
// , function () { } :2번째 매개변수 : 이 함수가 실행됨. 
//
document.addEventListener('DOMContentLoaded', function () {
    // 토글 버튼 요소 가리킴
    const toggleBtn = document.getElementById('menuToggle');
    // 탑 메뉴 요소 가리킴
    const topMenu = document.getElementById('topMenu');
    // 
    toggleBtn.addEventListener('click', function () {
        topMenu.classList.toggle('active');
    });
});