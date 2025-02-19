//1의 위치가 폭탄의 위치
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
//안 섞인 상태
let isFlag = false;
let hartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    const msg = document.querySelector('#msg');
    //보드에 숫자쓰기
    for (let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;
    }

    bt.addEventListener('click', ()=>{
        if(!isFlag){
        arr.sort(() => (
        Math.random() - 0.5));
        console.log(arr);
        msg.innerHTML = '선택하세요.';
        bt.disabled = true;
        }
    })

    for (let [idx, col] of cols.entries()) {
        console.log(idx, col);

        col.addEventListener('click', (e) => {
            e.preventDefault();
            if(!isFlag){
            if (arr[idx]==0) {
                col.innerHTML ='<img src="../img/hart.png">';
                hartCount++;
                if(hartCount==8){
                    msg.innerHTML = '성공';
                    isFlag = true;
                    bt.innerHTML = '다시하기';
                }
            } else {
                col.innerHTML = '<img src="../img/boom.png">';
                msg.innerHTML = '게임종료';
                isFlag = true;
            }
        }
        })
    }

    //배열의 셔플

})