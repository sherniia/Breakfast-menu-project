const mainContainer = document.querySelector(".main-container");

const apiUrl =
  "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json";

async function getFoodData(category) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  data.forEach((food) => {
    if (food.category !== category && category !== "all") return;
    // create card div and populate it with img and description
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("div");
    img.classList.add("img");
    img.style.backgroundImage = `url(${food.img})`;

    const description = document.createElement("div");
    description.classList.add("description");

    card.appendChild(img);
    card.appendChild(description);

    mainContainer.appendChild(card);


    // populate description with title and price

    const foodTitle = document.createElement("div");
    foodTitle.classList.add("title");

    foodTitle.innerHTML = `<strong>${food.title}</strong> 
        <div class="price">${food.price}</div>`;

    const ingredients = document.createElement("div");

    // cleaning description from ' sign;
    food.desc = food.desc.replace(/[`]/g, "");
    console.log(food.desc);

    ingredients.innerHTML = `<div 
        class="ingredients">${food.desc}</div>`;

    description.appendChild(foodTitle);
    description.appendChild(ingredients);
  });
}

getFoodData("all");

// Create Clear Function to clear all of the children in main-container
function clear() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

// Add event listener to All button

const allBtn = document.querySelector("#all");

allBtn.addEventListener("click", () => {
  clear();
  getFoodData("all");
});

const breakfastBtn = document.querySelector("#breakfast");

breakfastBtn.addEventListener("click", () => {
  clear();
  getFoodData("breakfast");
});

const lunchBtn = document.querySelector("#lunch");

lunchBtn.addEventListener("click", function () {
  clear();
  getFoodData("lunch");
});

const shakesBtn = document.querySelector("#shakes");

shakesBtn.addEventListener("click", function () {
  clear();
  getFoodData("shakes");
});
