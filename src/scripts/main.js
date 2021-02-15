const loremEl = document.querySelector('.lorem');

const getData = () => {
  return fetch('https://baconipsum.com/api/?type=all-meat&paras=3')
    .then(res => res.json())
    .then(res => {
      loremEl.innerHTML = res
    });
};

getData();