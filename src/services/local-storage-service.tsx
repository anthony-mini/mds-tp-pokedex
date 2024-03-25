export function setItem(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));

  const event = new Event('localStorageChange');
  window.dispatchEvent(event);
}

export function getItem(key: string) {
  const item = window.localStorage.getItem(key);

  const event = new Event('localStorageChange');
  window.dispatchEvent(event);

  return item ? JSON.parse(item) : null;
}

export function removeItem(key: string) {
  window.localStorage.removeItem(key);

  const event = new Event('localStorageChange');
  window.dispatchEvent(event);
}
