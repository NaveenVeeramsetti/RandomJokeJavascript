let jokeBtnEl = document.getElementById("jokeBtn");
let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");

function getRandomJoke() {
  spinnerEl.classList.toggle("d-none");
  let url = "https://apis.ccbp.in/jokes/random";
  let options = {
    method: "GET",
  };

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.toggle("d-none");
      let randomJoke = jsonData.value;
      jokeTextEl.textContent = randomJoke;
    });
}

jokeBtnEl.addEventListener("click", getRandomJoke);
