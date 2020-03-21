export function setCookie(key: string, value: string) {
  window.document.cookie = key + '=' + value;
  setlocalStorage(key, value);
}

function setlocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
