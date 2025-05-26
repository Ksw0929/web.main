// function session_set() { //세션 저장
//     let session_id = document.querySelector("#typeEmailX");
//     if (sessionStorage) {
//         sessionStorage.setItem("Session_Storage_test", session_id.value);
//     } 
//     else {
//         alert("로컬 스토리지 지원 x");
//     }
// }
import { encrypt_text, decrypt_text } from './js_crypto.js';
import { generateKey, exportKey, importKey, encrypt_text2, decrypt_text2 } from './js_crypto2.js';

export async function session_set() {
  let id = document.querySelector("#typeEmailX");
  let password = document.querySelector("#typePasswordX");
  let random = new Date();
  const obj = {
    id : id.value,
    otp : random
  };

  if (sessionStorage) {
    const objString = JSON.stringify(obj);
    let en_text = await encrypt_text(objString);  // 암호화 (await 필요)
    sessionStorage.setItem("Session_Storage_id", id.value);
    sessionStorage.setItem("Session_Storage_pass", en_text);   // 평문 대신 암호화된 값 저장
    sessionStorage.setItem("Session_Storage_pass2", en_text);  // 기존과 동일하게 암호화된 값 저장
  } else {
    alert("세션 스토리지 지원 x");
  }
}
// function session_get() { //세션 읽기
//     if (sessionStorage) {
//         return sessionStorage.getItem("Session_Storage_test");
//     } 
//     else {
//         alert("세션 스토리지 지원 x");
//     }
// }
export function session_get() { //세션 읽기
    if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_pass");
    } else {
    alert("세션 스토리지 지원 x");
    }
}


export function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
    alert("이미 로그인 되었습니다.");
    location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}

function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");
        sessionStorage.removeItem("Session_Storage_pass2");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } 
    else {
        alert("세션 스토리지 지원 x");
    }
}
export function logout() {
    session_del(); // 세션 삭제
    location.href = '../index.html'; // 메인 페이지로 리디렉션
  }
window.logout = logout;

export function session_set2(obj){ //세션 저장(객체)
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        // let en_text = encrypt_text(objString); // 암호화
    sessionStorage.setItem("Session_Storage_join", objString);
    } else {
        alert("세션 스토리지 지원 x");
}
}
export async function session_set_encrypted() {
  const idInput = document.querySelector("#typeEmailX");
  const obj = {
    id: idInput.value,
    otp: new Date().toISOString(),
  };

  if (!sessionStorage) {
    alert("세션 스토리지 지원 안 함");
    return false;
  }

  try {
    const key = await generateKey();  // 새 키 생성
    const exportedKey = await exportKey(key); // 키를 문자열로 변환해 세션에 저장
    sessionStorage.setItem("Session_Storage_pass", exportedKey);

    const plainStr = JSON.stringify(obj);
    const encrypted = await encrypt_text(plainStr, key);

    sessionStorage.setItem("Session_Storage_pass2", encrypted);
    sessionStorage.setItem("Session_Storage_id", obj.id);

    return true;
  } catch(e) {
    alert("세션 저장 실패");
    console.error(e);
    return false;
  }
}