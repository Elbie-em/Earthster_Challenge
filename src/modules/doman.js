export const getElement = (id) => {
  const el = document.getElementById(id);
  return el;
};

export const setValue = (el, value) => {
  el.innerText = value;
};

export const setChangeEvent = (id, func) => {
  document.querySelector(id).addEventListener('change', func);
};

export const setData = (id, data) => {
  document.getElementById(id).style.height = `${data}%`;
};
