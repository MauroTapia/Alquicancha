const localStorageEvent = new Event('localStorageChange');

const dispatchLocalStorageEvent = () => {
  window.dispatchEvent(localStorageEvent);
};

const addLocalStorageListener = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener('localStorageChange', callback);
};

const removeLocalStorageListener = (callback) => {
  window.removeEventListener('storage', callback);
  window.removeEventListener('localStorageChange', callback);
};

export {
  dispatchLocalStorageEvent,
  addLocalStorageListener,
  removeLocalStorageListener,
};
