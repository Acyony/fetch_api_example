import "./style.scss";

const fox_btn = document.getElementById("fox_btn");
const dog_btn = document.getElementById("dog_btn");
const fox_result = document.getElementById("fox_result");
const dog_result = document.getElementById("dog_result");

// --------- =^.^= ---------

async function getRandomFox() {
  let response = await fetch("https://randomfox.ca/floof/");
  let data = await response.json();

  if (!data.image.includes(".jpg")) {
    getRandomFox();
  } else {
    fox_result.innerHTML = `<img src = ${data.image} alt = fox/>`;
  }
}

async function getRandomDog() {
  let response = await fetch("https://random.dog/woof.json");
  let data = await response.json();

  if(data.url.includes(".mp4")) {
    getRandomDog()
  } else {
    dog_result.innerHTML = `<img src = ${data.url} alt = dog/>`
  }
}


// --------- =^.^= ---------
fox_btn.addEventListener('click', getRandomFox);
dog_btn.addEventListener('click', getRandomDog);
