export async function generateKey() {
  return window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

export async function exportKey(key) {
  const raw = await crypto.subtle.exportKey("raw", key);
  return arrayBufferToBase64(raw);
}

export async function importKey(base64key) {
  const raw = base64ToArrayBuffer(base64key);
  return crypto.subtle.importKey(
    "raw",
    raw,
    { name: "AES-GCM" },
    true,
    ["encrypt", "decrypt"]
  );
}

// 암호화 함수
export async function encrypt_text2(plainText, key) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 12바이트 IV 권장
  const encoder = new TextEncoder();
  const data = encoder.encode(plainText);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    data
  );

  // 암호문과 IV를 합쳐서 base64로 저장
  const buffer = new Uint8Array(encrypted);
  const combined = new Uint8Array(iv.length + buffer.length);
  combined.set(iv);
  combined.set(buffer, iv.length);

  return arrayBufferToBase64(combined.buffer);
}

// 복호화 함수
export async function decrypt_text2(cipherTextBase64, key) {
  const combined = base64ToArrayBuffer(cipherTextBase64);
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv },
    key,
    data
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

// Base64 <-> ArrayBuffer 변환 함수
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let b of bytes) {
    binary += String.fromCharCode(b);
  }
  return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i=0; i<binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}