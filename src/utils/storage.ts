export function setCookie(key: string, value: string) {
  let d = new Date();
  const time: any = 15 * 60 * 1000;
  window.document.cookie = key + '=' + value + '; expires =' + d.setTime(d.getTime + time);
  setlocalStorage(key, value);
}

export function deleteCookie(key: string) {
  window.document.cookie = key + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
}

function setlocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
