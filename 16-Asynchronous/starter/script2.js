'use strict';

// const getCharacterData = character => {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://api.gameofthronesquotes.xyz/v1/author/${character}/`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const data = JSON.parse(this.responseText);
//     console.log(data);

//   });
// };

// getCharacterData('arya');

// #################### MOVIES ####################
const countriesContainer = document.querySelector('.countries');

const getMovieData = movie => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://search.imdbot.workers.dev/?q=${movie}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const data = JSON.parse(this.responseText);
    console.log(data);

    //data.description[0].#TITLE
    const html = `
  <article class="country">
  <img class="country__img" src="${data.description[0]['#IMG_POSTER']}" />
  <div class="country__data">
  <h3 class="country__name">${data.description[0]['#TITLE']}</h3>
    <h4 class="country__region">${data.description[0]['#YEAR']}</h4>
    <description class="country__row"><span>Actors </span>${data.description[0]['#ACTORS']}</description[0]>
    <p class="country__row"><span>IMDB ID</span>${data.description[0]['#IMDB_ID']}</p>
    
  </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getMovieData('gone girl');
