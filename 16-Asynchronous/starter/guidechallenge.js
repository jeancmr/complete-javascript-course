'use strict';
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const whereamI = (lat, lnl) => {
  fetch(`https://geocode.xyz/${lat},${lnl}?geoit=json`)
    .then(res => {
      // console.log(res);
      if (!res.ok)
        throw new Error(`(${res.status}). Has reached the limit of usage ❗❗`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      // console.log(`${err} ❗❗`);
      console.error(`${err} ❗❗`);
      renderError(`Something went wrong ${err.message}. Try again!`);
      // console.log(err);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

const coor1 = {
  lat: '52.508',
  lnl: '13.381',
};
const coor2 = {
  lat: '19.037',
  lnl: '72.873',
};
const coor3 = {
  lat: '-33.933',
  lnl: '18.474',
};

whereamI(coor3.lat, coor3.lnl);
// whereamI(coor2.lat, coor2.lnl);
// whereamI(coor1.lat, coor1.lnl);
whereamI('10.96219', '-74.80658'); //BARRANQUILLA
