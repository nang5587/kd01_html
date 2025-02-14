//DOM이 로드되었을 때
document.addEventListener('DOMContentLoaded', ()=>{
   //요소 가져오기 (버튼, 이미지)
    const bt = document.querySelector('button')
    //버튼 클릭 시
    bt.addEventListener('click', ()=>{
    //이미지 속성 변경
    //랜덤 수 생성
    let i = Math.floor(Math.random()*6)+1; //1~6까지 생성
    //이미지 속성 변경, 속성 바꾸는 건 변수니까 백틱 써야 함
    document.querySelector('img').setAttribute("src", `../img/${i}.png`)
    document.querySelector('img').setAttribute("alt", `${i}`);
    });
   }
);