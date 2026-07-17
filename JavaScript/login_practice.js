
//User의 설계도 
class User{
    //1. 생성자 함수 -> 객체의 변수를 초기화
	constructor(name, email, role){
		this.name = name;           //이 객체의 name 저장
		this.email = email;         //이 객체의 eamil 저장
		this.role = role;           //이 객체의 권한 저장
        this.isLoggedIn = false;
    }

    //2. 메서드 정의 

    login() {
        this.isLoggedIn = true;
        console.log(`${this.name}님이 로그인하셨습니다`);
    }

    checkAdmin() {
        return this.role === 'admin';
    }
}



const user1 = new User("철수", "chulsoo@test.com", "admin");
const user2 = new User("영희", "younghee@test.com", "user");

console.log(user1.name);
console.log(user2.name);

user1.login();
console.log(user1.isLoggedIn);

if (adminUser.checkAdim()) {
    console.log("관리자 페이지 접근을 허용합니다.");
}
