// // 유저정보 확인 -> 훨씬 빠른 방법
// var 뺀거 = localStorage.getItem('user')
// $('#userName').html(JSON.parse(뺀거).displayName)
// // $('#userName').html(user.displayName) -> 로그인 한 사람의 이름을 보여주는 코드
// // 유저 정보를 localStorage에 저장해두면 빠를듯..! -> localStorage : 브라우저에 몰래 정보저장하는 공간, 개발자만 아는 공간 -> 브라우저 꺼도 남아있음

firebase.auth().onAuthStateChanged((user) => { //오래 걸림...-> 전체 페이지에 저장해야 새로고침 해도 유저 정보 그대로 남아있음 -> 자바스크립트 파일로 만들어서 모든 페이지에 추가해주기
    if (user) { // 없으면 업로드 버튼을 숨기거나..
        console.log(user.uid)
        console.log(user.displayName)
        // localStorage.setItem('user', JSON.stringify(user)) // 문자 자료만 저장 가능
        $('#userName').html(user.displayName)
    }
    
})