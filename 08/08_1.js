document.addEventListener('DOMContentLoaded', ()=>{
    //querySelctorAll의 결과는 전부 노드리스트 형태가 됨, 1개 라도
    //button요소 가져오기
    const bts = document.querySelectorAll('button');
    console.log(bts);
    
    //innerHTML은 태그까지 나오고 textContent는 태그는 안 나옴
    //노드리스트 순회
    for(let bt of bts){
       
        bt.addEventListener('click', ()=> {
            //속성 변경
            bt.setAttribute("id", bt.textContent);
            console.log(bt.getAttribute);
        })
    }
});