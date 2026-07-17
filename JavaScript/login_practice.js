
//User의 설계도 
class User{
    //1. 생성자 함수 -> 객체의 변수를 초기화
	constructor(name, email, role){
		this.name = name;           //이 객체의 name 저장
		this.email = email;         //이 객체의 eamil 저장
		this.role = role;           //이 객체의 권한 저장
        this.level = 1;             //이 객체의 레벨 저장
        this.isLoggedIn = false;
    }

    //2. 메서드 정의 
    //로그인 상태 변경 메서드
    login() {
        this.isLoggedIn = true;
        console.log(`${this.name}님이 로그인하셨습니다`);
    }

    //권한 확인 메서드
    checkAdmin() {
        return this.role === 'admin';
    }

    //이름 변경 메서드 - 매개변수1개
    updateProfile(newName) {
        this.name = newName;
        console.log(`이름이 ${newName}으로 변경되었습니다.`);
    }

    //레벨계산 메서드
    addExp(points, multiplier){
        const totalExp = points * multiplier;
        this.level += Math.floor(totalExp/2);    //경험치를 2로 나눈 몫을 레벨로 설정
        console.log(`경험치 ${totalExp} 획득, 현재 레벨: ${this.level}`);
    }
}


//user1, user2 인스턴스 만들기
const user1 = new User("철수", "chulsoo@test.com", "admin");
const user2 = new User("영희", "younghee@test.com", "user");


//객체 이용하기
console.log(user1.name);
console.log(user2.name);

user1.login();
console.log(user1.isLoggedIn);

if (user1.checkAdmin()) {  
    console.log("관리자 페이지 접근을 허용합니다.");
}


//user3 인스턴스 만들기
const user3 = new User("민지", "Minji@test.com", "user");

user3.updateProfile("민서");
user3.addExp(13, 0.43);