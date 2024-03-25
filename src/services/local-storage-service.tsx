export function setItem(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function removeItem(key: string) {
  window.localStorage.removeItem(key);
}
