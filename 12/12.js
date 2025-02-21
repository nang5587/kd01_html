//1의 위치가 폭탄의 위치
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
//안 섞인 상태
let isFlag = false;

const init = (cols)=>{
    //배열 내용 섞기
    arr.sort(()=>Math.random()-0.5);
    //셔플 플래그 초기화
    isFlag = true;
    //보드에 숫자 쓰기
    for (let [idx, col] of cols.entries()) {
        col.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    const msg = document.querySelector('#msg');
    //보드에 숫자쓰기
    for (let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;
    }
    //하트 수
    let hartCount = 0;

    //보드에 클릭 이벤트 발생
    for (let [idx, col] of cols.entries()) {
        col.addEventListener('click', () => {
            if(!isFlag){
                msg.innerHTML = '폭탄을 섞어주세요.'
                return;
            }

            //실패한 경우
            if(msg.innerHTML.includes('실패')) return;

            if (arr[idx]==0) {
                col.innerHTML ='<img src="../img/hart.png">';
               //하트 수 증가
                hartCount = hartCount +1;
                //하트 수 8개면 성공
                if(hartCount==8){
                    msg.innerHTML = '성공';
                    bt.innerHTML = '다시하기';
                    isFlag = false;
                    hartCount = 0;
                    //1이 있는 위치에 하트 추가
                    cols[arr.indexOf(1)].innerHTML = '<img src="../img/hart.png">';
                }
            } else if(arr[idx] == 1) {
                col.innerHTML = '<img src="../img/boom.png">';
                msg.innerHTML = '게임종료';
                bt.innerHTML = '다시하기';
                isFlag = false;
            }
        
        })
    }

    //버튼 클릭
    bt.addEventListener('click', ()=>{
        if(!isFlag){
        msg.innerHTML = '선택하세요.';
        bt.innerHTML = '게임중...';
        
        init(cols);
        console.log(isFlag , arr);
        }
    })
})