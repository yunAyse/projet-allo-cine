async function afficherFilms() {
  const reponse = await fetch('http://127.0.0.1:5500/Projet-allo-cine/data/moovies.json');
  const films = await reponse.json();
  console.log(films);

  films.forEach(film => {
  // console.log(film.Title);

  // let runtime = film.Runtime ? film.Runtime : '-';

  let runtime;

    
  if (film.Runtime === undefined) {
    runtime = '-';
  } else {
    runtime = film.Runtime;
  }
  
  // console.log(runtime);

  let genre;

  if (film.Genre === undefined) {
    genre = '-';
  } else {
    genre = film.Genre;
  }

  // console.log(genre);

  let imageMovie;

  if (film.Images === false) {
    imageMovie = '';
  } else {
    imageMovie = film.Images;
  }

  // console.log(imageMovie);

  balise.innerHTML += `
  
    <div class="container">
    <div class="box-card">

      <img class="card-img" src="${film.Poster}" alt="...">

      <div class="body-card">

      <i class="top left"></i>
      <i class="top right"></i>

        <h2 class="title-card">${film.Title}</h2>
        
        <p class="text-card">${film.Plot}</p>

      <div class="info-film">
       
        <p class="actors">Actors : ${film.Actors}</p>
        <p class="released">Genre : ${genre}</p>
        <p class="runtime"> Time : ${runtime}</p>
      
        <div class="film-img">
        <img src="${imageMovie[1]}}">
        <img src="${imageMovie[2]}}">
        <img src="${imageMovie[3]}}">
        
      </div>
      </div>
      

      <i class="bottom left"></i>
      <i class="bottom right"></i>

      </div>

    </div>
    </div>

  `;
}
 
  
)}



afficherFilms();
const balise = document.querySelector('.films');
console.log(balise);

