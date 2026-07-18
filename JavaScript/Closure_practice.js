
//1. 계좌 만들기 
function makeAccount() {
    let balance = 1000;         //잔액설정 -> deposit()로만 접근 가능

    return function deposit(money){
        balance += money;
        console.log(`현재 잔액: ${balance}원`);
    }
}

const myDeposit = makeAccount();      //예금 넣는 함수(deposit())를 myDeposit으로 반환

myDeposit(500);
myDeposit(200);



//2. 고유 아이디 생성기
function createIdGenerator() {
    let id = 0;                     //id 초기값 설정 -> gernerate()로만 접근 가능
    return function gernerate() {
        id++;
        return `user_id_${id}`;
    }
}

const getUserId = createIdGenerator();     //generate()를 getUserId로 반환 받기
console.log(getUserId());                //`user_id_${id}` 출력
console.log(getUserId());



//3. 라이브러리 환경설정 및 초기화(SDK) 예시
function initKakaoLoginSDK(apiKey){
    const myKey = apiKey;

    return {
        login: function() {
            console.log(mykey + "코드로 카카오 로그인 진행...");
        }
    };
}



