//DOM이 로드되었을 때
document.addEventListener('DOMContentLoaded', () => {
   //요소 가져오기 (버튼, 이미지), 배열
   const bts = document.querySelectorAll('button');
   const imgs = document.querySelectorAll('img');
   const msg = document.querySelector('#msg');
   //버튼 클릭 시
   for (let [i, v] of bts.entries()) {
      v.addEventListener('click', () => {
         console.log(i, v)
         document.querySelector('#i2').setAttribute("src", `../img/${i+1}.png`)
      });
   }
   for(let bt of bts){
   bt.addEventListener('click', () => {
      let n = Math.floor(Math.random()*6)+1;
      imgs[0].setAttribute('src', `../img/${n}.png`)
   })};
   
   if(n == i+1) msg.innerHTML = '맞음';
            else msg.innerHTML = '틀림';
   //이미지 속성 변경
   //랜덤 수 생성
   //let i = Math.floor(Math.random()*6)+1; //1~6까지 생성
   //이미지 속성 변경, 속성 바꾸는 건 변수니까 백틱 써야 함
   //document.querySelector('img').setAttribute("src", `../img/${i}.png`)
   // document.querySelector('img').setAttribute("alt", `${i}`);

   //user와 비교

});