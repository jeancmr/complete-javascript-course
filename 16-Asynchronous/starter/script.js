'use strict';

const btn = document.querySelector('.btn-country');
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
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText); //prints a json file

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
//   </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('colombia');
// getCountryData('peru');

// ############################### ANOTHER APP @@@@@@@@@@@@@@@@@@@
// ######## -------------- COUNTRY AND NEIGHBOUR-------##########

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText); //prints a json file

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country
//     renderCountry(data);

//     // Get neighbour country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('uruguay');
// ######## -------------- COUNTRY AND NEIGHBOUR-------##########

//  ######################### POKEDEX ##################
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const getPokemonData = function (pokemon) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText); //prints a json file

//     const data = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">⚖️ ${data.weight / 10}</h4>
//       <p class="country__row"><span>💪</span>${data.base_experience}</p>
//       <p class="country__row"><span>💿</span>${data.moves[8].move.name}</p>
//       <p class="country__row"><span>💰</span>${data.order}</p>
//     </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getPokemonData('charizard');
// getPokemonData('pikachu');

//  ######################### END POKEDEX ##################

//old version
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// new version
// const request = fetch('https://restcountries.com/v2/name/colombia');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// modern version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('colombia');

//  #####---------- NEIGHBOUR COUNTRY FETCH VERSION ----- #####
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// getCountryData('germany');

//  #####---------- HANDLING ERRORS ----- #####
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdasd';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🎆🎆🎆`);
//       renderError(`Something went wrong 🎆🎆 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//OPTIMIZATION

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       // const neighbour = 'asdasd';

//       console.log(neighbour);

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🎆🎆🎆`);
//       renderError(`Something went wrong 🎆🎆 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// getCountryData('australia');

///////////////////////////////////////
// The Event Loop in Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');
// const randomN = Math.random();
// // console.log(randomN);
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lottery draw is happening');
//   setTimeout(() => {
//     if (randomN >= 0.5) {
//       resolve('You WIN 🤑');
//     } else {
//       reject(new Error('You lost your money 😔'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`I waited for 1 seconds`);
//     return wait(2);
//   })
//   .then(() => console.log(`I waited for 2 seconds`));

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);

// ################# ------------ GEOLOCALIZATION
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereamI = () => {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lnl } = pos.coords;
      console.log(pos.coords);

      return fetch(`https://geocode.xyz/${lat},${lnl}?geoit=json`);
    })

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
      renderError(`Something went wrong. ${err.message}. Try again!`);
      // console.log(err);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereamI);
*/

// ###################### ------- ASYNC AWAIT
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lnl } = pos.coords;
    console.log(pos.coords);

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lnl}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
    //   console.log(res)
    // );
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country data');

    console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong❗ ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// whereAmI();
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} ❗`))
//   .finally(() => console.log('3: Finished getting location'));

// IIFE FUNCTION
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} ❗`);
  }
  console.log('3: Finished getting location');
})();
