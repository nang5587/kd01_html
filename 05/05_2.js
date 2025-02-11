//템플릿 문자열

//함수선언1
function check1() {
    // e.preventDepault();
    let s = document.getElementById("txt1").value ;
    //문자열 출력
    console.log(s);
    //한 문자씩 출력 순서대로
    // for(let i =s; i<s.length; i++){
    //     console.log(s[i]);
    // }
    //반대로
    // for(let i =s.length; i>=0; i--){
    //     console.log(s[i]);
    // }
    // //of 뒤에 오는 것으 묶음, for of를 쓰면 묶음을 한 개씩 가져올 수 있다
    // for(let c of s){
    //     console.log(c);
    // }

    console.log(s.indexOf('s')); //몇 번째에 있는지 나옴
    console.log(s.includes('s')); //있냐 없냐 true false
    console.log(s.slice(0, 2));
    


    // let s2 = document.getElementById("txt2").value ;

    //document.getElementById("msg").innerHTML = parseInt(s) + parseInt(s2) ; 숫자로 계산할 수 있
    //document.getElementById("msg").innerHTML = s + s2 ; s =1, s2=2라면 값이 1 2 로 나옴
    //document.getElementById("txt2").value = s[s.length - 1]; //문자열 이용
    //document.getElementById("txt2").value = s.charAt(s.length - 1); //char라는 메소드 사용 ()
    // document.getElementById("txt2").value = s.split(',')[1]; 
    // console.log(s.split(',')[1]);

    //document.getElementById("txt2").value = s[-1]; 이건 안 됨


}

//함수선언2 : 화살표 함수
const check2 = () => {
    console.log("check2");
}

// const check2 = function(){} 매개변수 없으면 이 형태도 사용 가능