let isLocked = false;

import { session_set, session_get, session_check, } from './js_session.js';
import { encrypt_text, decrypt_text } from './js_crypto.js';
import { generateJWT, checkAuth } from './js_token.js';
import { importKey, decrypt_text2 } from './js_crypto2.js';

document.addEventListener('DOMContentLoaded', () => {
checkAuth();
init_logined();
});

function login_failed() {
  let failCount = getCookie_FailCount();
  failCount++;
  setFailCount(failCount);

  if (failCount >= 3) {
    isLocked = true; 

    setTimeout(() => {
      isLocked = false; 
      setFailCount(0); 
    }, 4 * 60 * 1000); 
  } else {
    alert(`로그인 실패! 현재 실패 횟수: ${failCount}번`);
  }
}
function init_logined(){
  if(sessionStorage){
  decrypt_text(); // 복호화 함수
  }
  else{
  alert("세션 스토리지 지원 x");
  }
}

 function getCookie_FailCount() {
   const cookie = document.cookie;
   if (cookie !== "") {
     const cookie_array = cookie.split("; ");
     for (let i in cookie_array) {
       const cookie_pair = cookie_array[i].split("=");
       if (cookie_pair[0] === "failCount") {
         return parseInt(unescape(cookie_pair[1]));
       }
     }
   }
   return 0;
 }
 function setFailCount(count) {
   setCookie("failCount", count, 1); // 유효기간 하루
 }
 
function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
   const emailInput = document.getElementById('typeEmailX');
   const idsave_check = document.getElementById('idSaveCheck');
   let get_id = getCookie("id");
   if(get_id) {
   emailInput.value = get_id;
   idsave_check.checked = true;
   }
   session_check(); // 세션 유무 검사
}  

const check_xss = (input) => {
   // DOMPurify 라이브러리 로드 (CDN 사용)
   const DOMPurify = window.DOMPurify;
   // 입력 값을 DOMPurify로 sanitize
   const sanitizedInput = DOMPurify.sanitize(input);
   // Sanitized된 값과 원본 입력 값 비교
   if (sanitizedInput !== input) {
   // XSS 공격 가능성 발견 시 에러 처리
   alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
   return false;
   }
   // Sanitized된 값 반환
   return sanitizedInput;
   };

function setCookie(name, value, expiredays) {
      var date = new Date();
      date.setDate(date.getDate() + expiredays);
      document.cookie = escape(name) + "=" + escape(value) + ";expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
}

function getCookie(name) {
              var cookie = document.cookie;
              console.log("쿠키를 요청합니다.");
              if (cookie != "") {
              var cookie_array = cookie.split("; ");
              for ( var index in cookie_array) {
              var cookie_name = cookie_array[index].split("=");
               if (cookie_name[0] == "id") {
               return cookie_name[1];
               }
               }
               }
               return ;
} 

export async function session_get_decrypted() {
  if (!sessionStorage) {
    alert("세션 스토리지 지원 안 함");
    return null;
  }

  try {
    const encrypted = sessionStorage.getItem("Session_Storage_pass2");
    const exportedKey = sessionStorage.getItem("Session_Storage_key");
    if (!encrypted || !exportedKey) {
      alert("복호화할 데이터가 없습니다.");
      return null;
    }

    const key = await importKey(exportedKey);
    const decryptedStr = await decrypt_text(encrypted, key);
    return JSON.parse(decryptedStr);
  } catch(e) {
    alert("복호화 실패");
    console.error(e);
    return null;
  }
}


const check_input= () => {

    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const idsave_check = document.getElementById('idSaveCheck');
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const payload = {
      id: emailValue,
      exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
      };
    const jwtToken = generateJWT(payload);
    const sanitizedPassword = check_xss(passwordValue);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailValue);
    // check_xss 함수로 비밀번호 Sanitize
    
      if (emailValue === '') {
       alert('이메일을 입력하세요.');
       return false;
       }
      if (passwordValue === '') {
       alert('비밀번호를 입력하세요.');
       login_failed();
       return false;
       }
      if (emailValue.length < 5) {
      alert('아이디는 최소 5글자 이상 입력해야 합니다.');
      return false;
      }
      if (passwordValue.length < 12) {
      alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
      login_failed();
      return false;
      }
      const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
      if (!hasSpecialChar) {
      alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
      login_failed();
      return false;
      }
      const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
      const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
      if (!hasUpperCase || !hasLowerCase) {
          alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
          login_failed();
          return false;
      }
       if (isLocked) {
          alert("현재 로그인 제한 중입니다. 잠시 후 다시 시도해주세요.");
          return false;
      }
      if (!sanitizedEmail) {
         // Sanitize된 비밀번호 사용
         return false;
      }
      if (!sanitizedPassword) {
         // Sanitize된 비밀번호 사용
        return false;
      }
      if(idsave_check.checked == true) { // 아이디 체크 o
         alert("쿠키를 저장합니다.", emailValue);
         setCookie("id", emailValue, 1); // 1일 저장
         alert("쿠키 값 :" + emailValue);
      }
      else{ // 아이디 체크 x
           setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
      }
    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    session_set(); // 세션 생성
    localStorage.setItem('jwt_token', jwtToken);
    loginForm.submit();
    };
    document.getElementById("login_btn").addEventListener('click', check_input);

