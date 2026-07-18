
//class 1번 User 클래스 (생성자만 있는 클래스)
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isLoggedIn = false;
    }
}


//class 2번 이메일 발송 담당 클래스 (메서드만 있는 클래스)
class EmailService{
    send(toEmail, title, content) {
        console.log(`[이메일 발송 완료] 수신: ${toEmail} | 제목: ${title}`);
    }
}


class NoticeService{
    send(toNotice, title){
        console.log(`[알림] ${title}`);
    }
}


//class 3번 회원 시스템 담당 클래스 (생성자와 메서드 모두 있는 클래스)
class UserService {
    constructor(emailService, noticeService){              //클래스 이용시 EmailService 클래스 입력   
        this.emailService = emailService;   //UserService의 인스턴스 정의 과정에서 EmailSevice의 인스턴스를 넘겨받음 (의존성)
                                            //넘겨받은 EmailService 인스턴스가 UserService의 프로퍼티가 된다

        this.noticeService = noticeService;
    }

    register(newUser) {
        console.log(`[회원가입] ${newUser.name}님이 등록되었습니다.`);
        this.emailService.send(     //(인스턴스).(메서드) 형식
            newUser.email,          //넘겨받은 이메일 서비스 객체(2번)의 메서드 호출
            "환영합니다!",
            "가입을 진심으로 축하드립니다."
        );
    }

    emailNotice(User){
        console.log("알림이 도착했습니다.");
        this.noticeService.send(
            User.name,
            `${User.name}님, 메일이 도착했습니다`
        );
    }

}


//객체 준비하기
const mailer = new EmailService();              //도구 준비
const noticer = new NoticeService();
const userService = new UserService(mailer, noticer);    //도구를 회원 시스템에 장착
const user1 = new User("minseo", "minseo@test.com", "user");


//이메일 보내기 (emailService 이용하기)
userService.register(user1);
userService.emailNotice(user1);