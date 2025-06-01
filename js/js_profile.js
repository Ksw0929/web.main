import { session_check_protectedPage } from './js_session.js';

// 페이지가 로드될 때 실행
window.onload = () => {
  // 현재 세션 아이디 출력 (디버그용)
  console.log('프로필 페이지 세션 아이디:', sessionStorage.getItem("Session_Storage_id"));
  
  // 로그인 세션이 없으면 로그인 페이지로 이동시키고,
  // 있으면 아무 동작 없이 프로필 페이지 유지
  session_check_protectedPage();
};