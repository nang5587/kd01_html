//배열 선언
let arr = []; //빈 배열
let arr1 = [1, 2, 3, 4]; //초기값이 있는 배열

let arr2 = new Array(); //Array 객체 사용


// console.log(arr);
// console.log(arr1);
// console.log(arr2);

//배열 추가 수정 삭제
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

//배열 수정
arr[0] = 1;
console.log(arr);

//배열 삭제
arr.pop();
console.log(arr);

//배열 비우기
arr.length = 0;
console.log(arr);

//배열 순회
arr = [1,2,3,4,5];

console.log('기본 반복');
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("in 반복");
//for in i의 인덱스를 가지고 오는 것
for(let i in arr){
    console.log(arr[i]); //i 인덱스의 값을 가져오는 것
}

console.log("of 반복");
//그냥 i만 써도 됨, 여기서 i는 항목
for(let i of arr){
    console.log(i);
}

console.log("of 반복");
//키와 값을 둘 다 가져옴, 결과가 배열로 나옴, 각각 다른 변수(i, item)에 저장(구조분해)
//구조분해할당
for(let [i, item] of arr.entries()){
    console.log(i, item);
}

console.log("of 반복");
//키와 값을 둘 다 가져옴
for(let i of arr.entries()){
    console.log(i);
}

console.log("forEach 메소드");
//인수가 화살표 함수로 들어감, 중요*****
//값, 키 순으로 forEach
//헷갈리니까 형태 만들고 시작
arr.forEach((item, i) => {
    console.log(i, item);
});

//map() 기본구조 *********
console.log("map 메소드");
let arrMap = arr.map((item) => {
    console.log(item); //1,2,3,4,5 나옴
    return item*2; //return이 생겼으니까 배열로 받아야 함 (arrMap = arr.map)
});
console.log(arrMap); //2,4,6,8,10 나옴

console.log("map 메소드2");//매개변수 하나니까 소괄호 안 해도 됨, return만 있으면 중괄호와 return 제거가능
arrMap = arrMap.map(item => item*2);
console.log(arrMap);

console.log("map 메소드3");//매개변수 두개나까 소괄호해야 함, return만 있으면 중괄호와 return 제거가능
arrMap = arrMap.map((item,i) => item*i);
console.log(arrMap);

//filter() *********
console.log("filter 메소드");
let arrFilter = arr.filter(item => item%2==0);
console.log(arrFilter);

console.log("filter 메소드3");
arrFilter = arr.filter((item,i) => i==3);
console.log(arrFilter);

//map() + filter()
console.log("map filter 메소드");
let arrMf = arr.map((item, i) => item*i)
.filter(item => item%3 == 0);
console.log(arrMf);

//랜덤수 생성
console.log("랜덤1");
// let arrRand = [];
// for(let i = 0; i<6; i++){
//     arrRand.push(Math.floor(Math.random()*6)+1);
// };
// console.log(arrRand);
let arrRand = [0,0,0,0,0,0];
arrRand.length = 0;
for(let i = 0; i<6; i++){
    arrRand.push(Math.floor(Math.random()*6)+1);
};
console.log(arrRand);

arrRand = arrRand.map(item => Math.floor(Math.random()*6)+1);

//오름차순 sort는 arrRand= 안 넣어도 됨
arrRand.sort((a,b)=> a-b);
console.log(arrRand); //map은 중복되는 숫자 나옴
//내림차순
arrRand.sort((a,b)=> b-a);
console.log(arrRand);
//배열 뒤집기
console.log(arrRand.reverse());
//모든 요소를 문자열로 결합, 배열이 아니라 문자열로 그래서 맵 못 씀, 디폴트는 쉼표로 구분, join(안에 구분하고 싶은 문자 넣으면 됨)
console.log(arrRand.join(''));
console.log(arrRand.concat(arr));

//요소확인
console.log(arrRand.indexOf(10)); //없으면 -1
console.log(arrRand.includes(10));

//전개 연산자
console.log(`arr=${arr}`);
let arrCopy ;
// arrCopy = arr.map(item=> item);
// console.log(`arrCopy=${arrCopy}`);

//...은 arr을 풀어서 가져옴
arrCopy = [...arr, ...arrRand];
console.log(`arrCopy=${arrCopy}`);

