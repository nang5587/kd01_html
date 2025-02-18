//1의 위치가 폭탄의 위치
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
//안 섞인 상태
let isFlag = false;


document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    const img = document.querySelector('img');
    //보드에 숫자쓰기
    for (let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;
    }

    bt.addEventListener('click', ()=>{
        arr.sort(() => (
        Math.random() - 0.5));
        console.log(arr);
    })

    for (let [idx, col] of cols.entries()) {
        console.log(idx, col);

        col.addEventListener('click', (e) => {
            e.preventDefault();
            if (col==0) {
                col.innerHTML ='<img src="../img/hart.png">';
            } else {
                col.innerHTML = '<img src="../img/boom.png">';
            }
        
        })
    }

    //배열의 셔플

})