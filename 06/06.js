function lotto(){
    //1 로또 번호 생성
    //1-1 로또 배열
let arrRR = [];
//1-2 6개 + 1개 번호 추출
while(arrRR.length <6){
    let n = Math.floor(Math.random()*45)+1;//1~45까지

    if(!arrRR.includes(n)) arrRR.push(n);
}

//1-2 6개 번호 정렬
arrRR.sort((a,b)=> a-b);
console.log(arrRR);

//1-3 +1개 번호 추출
while(arrRR.length <7){
    let n = Math.floor(Math.random()*45)+1;//1~45까지
    if(!arrRR.includes(n)) arrRR.push(n);
}
arrRR.splice(6,0,'+');

let spanTgs = arrRR.map(item => 
    item == '+' ? `<span class = 'spplus'>${item}</span>`
:`<span class='sp${Math.floor(item/10)}'>${item}</span>`)
.join('');

console.log(arrRR);
document.getElementById("msgLotto").innerHTML = spanTgs ;
}

// for(let i = 0; i<6; i++){
//     arrRR.push(Math.floor(Math.random()*45)+1);
//     //console.log(arrRR);
//     console.log(arrRR.includes(arrRR[i]));
//     if(false) {
//           arrRR.push(arrRR[i]);
//     }
// };
// arrRR.sort((a,b)=> a-b);
// console.log(arrRR);

// for(let i = 0; i<1; i++){
//     arrRR.push(Math.floor(Math.random()*45)+1);
//     console.log(arrRR.includes(arrRR[i]));
//     if(false) {
//           arrRR.push(arrRR[i]);
//     }
// }
// console.log(arrRR);
// }