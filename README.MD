# HTML 프로젝트 - 깃허브
새로운 시작! 웹 서비스 개발의 세계로 떠나보아요~
## Getting Started
This project is a starting point for a Web application.
- [프로젝트 메인 주소](https://github.com/Ksw0929/WEB_MAIN)
## 2주차 수업 메인화면 개발 완료! (문제 포함) 
 깃허브 테스트, index.html 파일 생성 

## 3주차 수업 부트스트랩 적용 완료! (문제 제외) 
    로고 및 메인 이미지 추가 index.html(코드 추가)- 이 코드는 Steam 메인화면의 기본 구조를 흉내 낸 초기 버전의 HTML로, img 태그를 이용하여 상단 로고 및 메뉴와 메인 배너 이미지를 표시하였고고 또한 하이퍼링크 a 태그를 사용하여 메인 화면 이미지를 클릭하였을 때 다른 외부 링크로 이동하는 코드도 작성
    index.html은 초기 Steam 메인 화면을 모티브로 제작된 페이지로, 사용자에게 메뉴, 대표 이미지, 추천 게임 정보를 제공하기 위한 바탕을 만들었고 메타 정보, 외부 링크 기능, 테이블 구조가 추가되어 기능성과 정보 제공 측면에서 확장되었다. base 태그를 활용하여 상대 경로 관리를 용이하게 했으며, 테이블에는 tr,td를 조합하여 추천 게임 리스트를 2행 3열 구조로 나열하였다.

## 4주차 연습문제 및 수업 부트스트랩 적용 완료!(문제 포함) 
    index.html(수정 및 추가)- 부트스트랩 적용을 적용하여 레이아웃과 스타일 정돈하였으며, 이전에 h3을 이용하여 텍스트로 만들었는데 nav 태그로 부트스트랩을 이용하여 네비게이션 바를 구성하였다. (meta viewport + class="img-fluid")을 이용한 반응형 이미지 구성하였다. 

## 3/29 3주차 연습문제 완료
    3주차 연습문제로 드랍다운 메뉴 3개에 링크를 추가하였고, 부트스트랩을 이용하여 네비게이션의 바 색상스키마를 검은색 배경으로 변경하였다. 테이블 색상도 부트스트랩을 이용하여 색상을 적용하였다. 또한 홈페이지 내용을 스팀 게임에서 포켓몬스터를 주제로 하여 로고 이미지와 메인 이미지를 변경하였고 테이블의 내용도 수정하였다.

## 5주차 수업 자바스크립트 적용 완료(4주차 연습문제 및 응용문제 완료)
    index.html(코드 추가)- head 태그 안에 js_test.js와 js_search.js, js_popup.js 자바스크립트 추가 연결 

    js_test(파일 생성) - 해당 JavaScript 테스트 코드는 var, let, const의 차이점을 이해하기 위한 테스트용 자바스크립트이다.스코프(범위), 재선언 가능 여부, 재할당 가능 여부 등의 핵심 개념을 모두 포함하고 있으며,기초 문법의 이해와 디버깅에 적합한 구조로 작성

    js_search.js(파일 생성)- id="search_btn"인 버튼 요소에 클릭 이벤트 리스너를 추가하였고, 버튼 클릭 시 search_message 함수가 실행되어 "검색을 수행합니다!" 알림창이 뜨게 코드를 작성하였다. id="search_input"인 입력창에서 검색어를 읽고 검색어를 URL 인코딩 처리 후, 구글 검색 URL에 삽입함.window.open()으로 새 탭 혹은 창에서 구글 검색 결과 페이지를 열게 코드를 작성

    popup.html 파일 생성- index.html과 비슷한 구성으로 h1 태그를 이용해서 팝업창 확인 문구를 표시

    js_popup.js (파일 생성성)- window.open() 함수는 브라우저에서 새 창이나 탭을 연다. 열고자 하는 HTML 파일 경로: "../popup/popup.html" 현재 스크립트가 위치한 폴더에서 한 단계 상위(..) 폴더로 올라간 후, popup 폴더 안의 popup.html 파일을 찾게 코드를 작성

## 6주차 수업 자바스크립트 활용 완료
    popup.html(코드 추가) - 부트스트랩 link 태그 추가, meta name="viewport".. 반응형 메타 태그 추가,(../js/js_popup.js) popup 자바스크립트 연동,(onload="show_clock();") 시계 기능을 위한 onload 이벤트 처리, (div id="divClock"...) 시계 출력용 div 코드 추가하여 기본적인 팝업 페이지 구성 

    js_popup.js(코드 추가) - 현재 시간을 표시해주고, 1초마다 자동으로 갱신되도록 만든 디지털 시계인 show_clock() 함수 작성
    마우스를 이미지에 올리면 pocket logo.png로 바뀌고,마우스를 떼면 pocket logo2 .png로 바뀌는 이미지 호버를 적용하는 함수 작성

    js_data_type.js(파일 생성) 
    변수 및 데이터 타입
    - 숫자, 문자열, 실수, 불리언 등 기본 데이터 타입을 선언
    - undefined와 null 값을 사용하는 방식도 포함
    - 여러 값을 console.log로 한 번에 출력하는 방법 사용
    Symbol, 배열, 객체
    - Symbol() 함수를 사용해 유일한 심볼 값을 생성하고 변수에 저장
    - 문자열, 숫자, 불리언, 배열을 포함한 복합 배열(airline)을 생성
    - 빈 객체와 속성을 가진 객체를 각각 생성하여 구조를 비교 코드 작성
    - 객체, 배열, 심볼 등의 데이터를 console.log를 통해 확인
    Map 객체 활용
    - Map 객체를 생성하고 set()을 이용해 사용자 정보를 추가
    - 각 사용자 정보는 ID와 비밀번호를 포함한 객체로 구성
    - for...of 문을 사용하여 Map에 저장된 사용자 정보를 반복 출력
    Set 객체 활용
    - Set 객체를 생성하고 사용자 이름을 중복 없이 저장
    - for...of 문을 통해 Set에 저장된 사용자 이름들을 반복 출력

    index.html(코드 수정) - 마우스를 오버했을 때 이미지가 바뀌는 onmouseover와 onmouseout 이벤트 추가 

## 4/9 5주차 연습문제 - googlesearch() 함수 수정 검색창 공백 및 비속어 검사 문제 완료

    js_search.js(코드 추가) - googleSearch() 함수를 수정하여 입력값에 비속어가 포함되면 경고 후 검색 중단하고 빈 검색어면 경고 후 중단하는 코드를 작성 
    정상적으로 입력하면 구글 검색 결과 를 새 창에서 열 수 있게 코드를 작성 


## 7주차 로그인 폼 수업 완료 
    login.css 파일 생성 - 로그인 페이지 배경에 보라색에서 파란색으로 자연스러운 그라디언트 효과를 주기 위한 CSS 클래스이며며 오래된 브라우저 호환을 위해 여러 배경 속성(background)을 중복 선언함

    index.html(코드 추가) - link 태그를 이용해서 index.html에 css 연결

    js_login.js(스크립트 추가) - document.getElementByld를 이용해 DOM요소 가져오기, trim을 사용하여 입력값 확인, 공백 검사해서 비어있으면 함수 종료, console.log 이용해서 입력값 출력, loginForm.submit() 이용해서 폼 제출하는 코드 작성 

    js_popup.js(코드 수정) - 수정 이전에 function을 사용했는데 const + 화살표 함수를 사용하여 수정하였다. 

    login.html 파일 생성 - index.html의 전체적인 코드를 가져왔으며 필요한 부분만 사용함, 부트스트랩을 이용해 기존의 로그인 폼을 가져옴  

    popup.html(코드 추가) - 시계 역할을 하는 div에 id="Time"을 부여해서 다른 요소와 구분되는 시계 표시용 요소를 새로 추가

## 4/16 코드 오류 수정 

    js_login.js의 이름을 잘못 설정해서 login.js 자바스크립트가 login.html이랑 연동이 안되는 문제를 해결함

## 4/30 6주차 연습문제 및 응용문제 - 로그아웃 화면 구성(메인화면으로 이동), 소스코드 정리 완료

    index_login.html 파일 생성 - 로그인 후 페이지를 위한 html 생성, index.html 있던 전체적인 코드를 가져왔으며, 로그인 버튼에서 로그아웃 버튼으로 수정 또한 로그아웃 버튼을 누르면 logout.html로 가는 코드 작성 

    logout.html 파일 생성 - 부트스트랩을 이용해서 로그아웃 화면을 구성하였으며 a 태그를 이용하여 로그아웃 버튼을 누르면 로그인 전인 index.html로 돌아가는 코드를 작성

## 9주차 쿠키 저장소를 이용한 데이터 저장 수업 완료 (9주차 연습문제 - 3,4,5,6주차 연습문제 및 응용문제 확인완료)

    js_login.js(코드 추가) - check_xss 함수를 사용하여 사용자가 이메일이나 비밀번호에 악성 스크립트를 넣는 것을 방지하는 코드를 작성, 아이디는 5글자 이상 비밀번호는 12글자 이상, 특수문자 포함, 대소문자를 포함 하게하는 코드를 작성 

    js_popup.js(코드 추가) - 쿠키 생성하는 함수인 setCookie를 사용해 이름과 값, 만료일을 지정해서 브라우저에 저장하는 코드 작성, 쿠키를 읽는 getCookie 함수를 사용해서 저장된 popupYN 값을 확인해서 팝업을 띄울지 말지 결정하는 코드 작성 closeup() 함수를 이용해서 팝업을 보이게 할지 체크박스로 결정하는 코드 작성 즉 팝업을 재등장 방지 기능을 위해 쿠키를 사용 

    login.html(코드 추가) - DOMPurify라는 유명한 XSS 방어 라이브러리를 CDN에서 불러오는 코드 추가

    popup.html(코드 수정 및 추가) - 하루에 한 번만 팝업 열기 위한 체크박스 추가, closePopup() 함수 호출하기 위한 코드 추가, defer 속성 중복 제거

## 10주차 쿠키 저장 및 세션 로그인 수업 완료 

    js_login.js(코드 수정 및 추가) 
    -init() 함수를 사용해 페이지 초기화 시 쿠키에서 저장된 아이디 불러와 input에 채우고 체크박스 상태 설정하는 코드 추가

    -check_xss() 함수에서 input 파라미터에 문자열 값을 받아 sanitize 후 비교하도록 수정 

    -check_input 함수를 사용하여 check_xss() 호출 시 DOM 요소가 아닌 emailValue 와 passwordValue (문자열) 전달하도록 변경 아이디 저장 체크박스(idSaveCheck) 상태 확인 후 쿠키 저장/삭제 처리 추가 세션 생성 

    -세션 생성 함수 session_set() 호출하는 코드 작성

    -쿠키 저장 로직에서 emailValue.value → emailValue 로 수정 

    js_session.js 파일 생성 

    -로그인 시 #typeEmailX 입력란의 값을 sessionStorage에 저장 sessionStorage가 지원되지 않으면 경고창 출력 session_set() 함수 작성

    -sessionStorage에서 로그인 정보를 가져옴 지원하지 않으면 경고창 출력 session_get() 함수 작성

    -세션 저장값이 있으면 이미 로그인된 상태로 간주, 로그인 완료 페이지로 이동시키는 session_check() 함수 작성 

    -세션 스토리지 삭제 (로그아웃 처리) 지원하지 않으면 경고창 출력하는 session_del() 함수 작성 

    login.html(코드 추가) - ../js/js_session.js 스크립트 연동, body 태그에 페이지가 로드될 때 세션 체크하는 onload="init(); 함수가 실행되도록 하는 코드 추가 '아이디기억' 체크박스 추가하는 코드 작성 

    index_login.html(코드 추가) - ../js/js_session.js 스크립트 연동

## 5/12 10주차 연습문제 및 응용문제 -로그아웃 시 세션 del() 함수 구현 및 로그인 x번 실패 시 login_failed 함수 대략적인 구성 완료

    js_login.js(코드 추가) - 로그인 실패 시 login_failed() 함수가 호출되고 getCookie_FailCount()로 실패 횟수 확인한다. 실패 시 1 증가해서 setFailCount()로 쿠키에 저장하고 3번 미만이면 몇 번 실패했는지 알림창 보여주고 3번 이상이면 4분 동안 차단 알림창 띄우고, 4분 후에 실패 횟수를 초기화하는 실패 누적 횟수를 쿠키로 기억해서 4분간 차단하는 코드를 대략적인 코드 작성  

    js_session.js(코드 추가) - 로그아웃 버튼 클릭 시 logout() 호출하고 세션 삭제 후 index.html 이동하는 함수 추가 

    logout.html - (코드 추가) - ../js/js_session.js 스크립트 연동하는 코드 추가, button onclick="logout()"를 실행하여 세션을 삭제  

## 5/13 10주차 연습문제 및 응용문제 - setTimeout 함수를 이용한 로그인 제한 코드 작성 완료 

    js_login.js(코드 수정 및 추가) - isLocked 변수를 추가하여 true면 로그인 시도를 제한하는 변수 추가함

    전에 만들었던 코드를 바탕으로 로그인 실패 시 login_failed()가 호출되고 실패 횟수를 증가시킨다 실패 횟수가 3번이상이면 isLocked가 true가 되고 seTimeout() 함수를 이용해서 4분동안 로그인을 제한한다. 제한된 상태로 로그인 시도 시 check_input를 실행하여 isLocked 체크하고 로그인 진행 불가하다는 알림창을 띄우고 로그인이 제한된다. 4분 후 자동으로 isLocked가 false가 되면서 로그인 시도가 가능하게 코드를 작성하였다.

## 11주차 세션(암호화,복호화), 보안 토큰 수업 완료

    js_crypto.js (파일 생성)

        -encodeByAES256(key, data)
        AES-256 CBC 모드로 data를 key로 암호화하는 함수

        -decodeByAES256(key, data)
        AES-256 CBC 모드로 암호화된 data를 key로 복호화하는 함수

        -encrypt_text(password)
        매개변수 password를 암호화해서 반환

        -decrypt_text()
        복호화하는 함수, 세션에서 암호화된 값을 가져와 복호화 (session_get() 호출)

        -따라서 encrypt_text에 평문을 넣으면, AES-256으로 암호화된 문자열을 반환하고 암호화된 문자열을 서버 또는 세션 등에 저장된다. 그리고 복호화 시 decrypt_text가 저장된 암호문을 불러와 키로 복호화하여 원문을 출력하는 것을 코드로 작성

    js_token.js (파일 생성) 

        -로그인 성공 시, 서버 또는 클라이언트에서 JWT 생성을 하고 생성된 JWT를 localStorage에 저장한다. 사용자가 다른 페이지로 이동하거나 새로고침을 하면 페이지가 로드될 때 checkAuth() 함수 실행한다. 로컬스토리지에서 JWT 꺼내기 위해 verifyJWT()로 유효성 검사 유효한 토큰이면 인증 성공이고 아니면 로그인 페이지로 리디렉트하는 코드를 작성 

    js_login.js(코드 추가) - 로그인 후 페이지에서 sessionStorage가 존재하면 decrypt_text()함수를 호출해서 세션에 저장된 데이터를 보호해주는 역할을 하는 
    init_logined() 함수를 추가

        -check_input() 함수에 아이디 저장 체크 여부에 따라 email을 저장하거나 삭제하는 로직 추가 

        -로그인을 입력 받을 때 사용자의 이메일과 만료시간을 담은 JWT 토큰을 생성하는 코드 추가

        index_login.html(코드 수정 및 추가)

        -로그인,크립토,토큰 자바스크립트 연동하는 코드 추가 

        -페이지가 로드될 때 실행되는 함수가 팝업 띄우기에서 인증 체크 + 복호화처리로 변경하기 위해 onload속성에 연결된 함수를 checkAuth(); init_logined();로 수정

        login.html(코드 추가) - 크립토,토큰 자바스크립트 연동, 자바스크립트에서 암호화와 복호화를 쉽게 할 수 있게 해주는 라이브러리 코드 추가

## 12주차 모듈화, 회원가입 기능 수업 완료 
    js_crypto.js(코드 수정) - js_session.js라는 모듈 파일로부터 세션 관련 함수 3개를 불러오는 코드 작성, 모듈에서 import해서 사용할 수 있게 해당 함수에 export 추가 

    js_join.js (파일 생성) - 회원가입 버튼을 누르면 join() 함수 실행하고 입력된 값들을 가져오고 입력값 유효성 검사를 하면 모든 정보가 입력된다. 그 후에 SignUp 클래스의 객체 생성한다. 회원정보 객체를 세션에 저장하는 함수인 session_set2(newSignUp) 호출하고 form.submit()함수를 사용해 메인 페이지로 이동하는 로직을 구성

    join.html 파일 생성 - head 태그에 문자 인코딩, 뷰포트 설정, Bootstrap CSS/JS, DOMPurify, CryptoJS 등 외부 라이브러리 로드하고 body 태그에 Bootstrap 그리드 시스템을 사용해 반응형 회원가입 폼 구현하고 이름, 이메일, 비밀번호, 비밀번호 입력 필드 확인하는 코드, 약관 동의 체크박스 코드,가입하기 버튼(#join_btn) 코드, 클릭 시 JS에서 처리 예정 커스텀 CSS(../css/login.css)와 JS(../js/js_join.js)를 모듈로 로드하는 코드 작성 

    js_login2.js 파일 생성 - js_login.js의 전체적인 코드를 가져오고 이 스크립트는 import 문이 있어서 모듈 기반 (ES Modules) 구조로 되어 있고(js_session.js, js_crypto.js, js_token.js 불러옴) 또한 document.addEventListener('DOMContentLoaded', init);이 포함되어 있어서 자동으로 init() 호출해주는 코드가 추가 되어있다.

    js_token.js, js_session.js, js_login.js (공통 코드 추가) - 각각의 자바스크립트를 모듈 파일로부터 필요한 자바스크립트를 불러오는 코드 작성 

## 5/22 11주차 연습문제 - 세션 암호화 관련 문제 대략적인 구성 완료

    js_crypto2.js 파일 생성 - generateKey() 함수로 키 생성, exportKey(key) 함수로 키를 문자열로 변환, importKey(base64Key) 함수로 Base64 키를 다시 키 객체를 복원하는 코드, encrypt_text2(plainText, key) 12바이트 IV 생성후 AES-GCM으로 암호화 IV + 암호문을 Base64로 반환하는 암호화하는 코드, decrypt_text2(cipherTextBase64, key) 함수로 복호화하는 코드 작성 

    js_session.js (코드 추가 및 수정) 

        -기존에는 encrypt_text()만 사용했는데, 새로 js_crypto2.js에서 generateKey, exportKey, encrypt_text2 등을 도입해서 비대칭 키 암호화 또는 고급 대칭 키 암호화 방식을 준비하는 구조로 업그레이드됨.

        -Session_Storage_test → Session_Storage_id, Session_Storage_pass, Session_Storage_pass2 등으로 명확하게 구분.암호화된 값과 평문 값을 따로 저장함으로써 테스트 및 디버깅 용이성 확보.

        -키를 직접 생성, export, 암호화 후 저장하는 비동기 session_set_encrypted() 함수 새로 추가

    js_login2.js(코드 수정 및 추가) - decrypt_text2() 함수를 추가 사용,	importKey() 함수로 key 복원 후 복호화, session_get_decrypted() 추가,

    js_login.js (코드 추가)

        -세션 스토리지에서 암호화된 사용자 데이터(또는 토큰)를 꺼내는 코드 작성

        -암호화 키도 같이 꺼내서 importKey()로 키 객체 생성하는 코드 작성

        -decrypt_text()로 암호문을 평문으로 복호화하는 코드드 작성

        -복호화된 JSON 문자열을 객체로 바꿔서 반환하는 코드 작성

        -복호화 실패, 데이터 없음, 지원 안함 시 적절히 null 반환하며 알림창 띄우는 코드 작성


## 5/27 11주차 연습문제 및 응용문제 - removeltem 메소드를 이용하여 로그아웃 시 jwt_token를 삭제하는 함수 구현 완료

    logout.html (코드 추가) - js_token.js라는 모듈 파일로부터 세션 관련 함수 3개를 불러오는 코드 작성

    js_token.js-(코드 추가) - jwt 토큰을 제거하고 removeItem 함수를 사용해 세션 스토리지 전체 제거하고 index.html로 이동하는 코드 추가 

## 13주차 프로필화면, 지도 API 수업완료 

    js_map.js (파일 생성) - 지도 생성 및 기본 설정,지도 제어 UI 추가, 마커 관련 기능마커 관련 기능,지도 클릭 이벤트,장소 검색 기능,검색 결과 UI 처리,마커 관리,페이지네이션 처리 등 다양한 카카오 지도 API 기능을 활용한 코드 추가

    index_login.html(코드 수정)- 네비게이션 바 중 하나를 profile.html로 가는 코드 추가 

    profile.html (파일 생성) - 부트스트랩을 이용하여 기존의 있는 프로필 화면의 코드를 추가,style 태그 안에 있는 CSS 코드는 카카오 지도 API를 활용한 장소 검색 리스트 UI를 위한 스타일로 전체적으로 .map_wrap이라는 컨테이너와 그 안의 검색 결과 목록 #menu_wrap, #placesList로 스타일링하고 있다.

## 6/2 13주차 응용문제 완료 

    profile.html(코드 수정) - 프로필 화면에 프로필 사진과 정보, 개인 로드맵을 게임 개발자로 하여 내가 필요한 기술이나 필요한 기능들을 수정

    profile.css (파일 생성) - profile.html style 태그 안에 있던 css 코드를 profile.css 파일을 생성하여 필요한 내용을 추가 후 옮김

    js_session.js (코드 추가) - sessionStorage에서 로그인된 유저의 ID를 가져오고 콘솔에 현재 세션 ID를 출력해서 확인한다. 세션 ID가 없거나, "undefined" 혹은 "null" (문자열)인 경우를 체크하여 로그인 안 된 상태로 간주하고 로그인 페이지로 이동시킨다. 세션이 유효하면 콘솔에 로그인 상태 메시지를 찍고 페이지 유지하는 코드 추가 

    js_map.js(코드 추가) -  지도를 처음 로딩할 때 중심 좌표의 주소 정보를 가져와서 displayCenterInfo() 함수로 처리하고 마우스로 지도 클릭하면, 클릭한 좌표(mouseEvent.latLng)를 searchDetailAddrFromCoords() 함수에 넘겨 주소를 조회한다. 마커를 클릭한 위치로 이동시키고, 그 위치에 인포윈도우를 띄워서 주소를 보여주고고사용자가 지도를 이동하거나 확대/축소한 후 중심 좌표가 바뀌면, map.getCenter() 기준으로 주소 정보를 다시 검색해서 displayCenterInfo() 함수로 넘기는 코드를 추가 

## 6/6 12주차 연습문제 완료 

    js_session.js (코드 추가) - SignUp 객체로부터 정보 꺼내고 JSON.stringify로 문자열로 변환한다. 그리고고 btoa()로 Base64 인코딩 (암호화) sessionStorage에 저장하는 코드 추가 

    js_longin.js(코드 추가) 

    -세션 저장소에서 암호화된 회원 정보 가져옴

    -없다면 콘솔 메시지 출력하고 종료

    -있다면 Base64 디코딩으로 복호화

    -복호화된 문자열을 JSON 객체로 바꿈

    -콘솔과 alert로 사용자 정보 출력

    -중간에 오류 나면 catch로 예외 처리하는 코드 추가 

