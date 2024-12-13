"use strict" ;

// METER TARJETAS DE LOS GATOS CON VARIABLES Y FUNCIONES
// Declarar los campos del gato 1
const kittenOneImg = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneBreed = "Siamés";
const kittenOneDescription = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

// Declarar los campos del gato 2
const kittenTwoImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoBreed = "Sphynx";
const kittenTwoDescription = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

// Declarar los campos del gato 3
const kittenThreeImg = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeBreed = "Maine Coon";
const kittenThreeDescription = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";


// const kittenOne = `<li class="card kittenOne">
// <article>
//     <img class="card_img" src=${kittenOneImg} alt="siames-cat" />
//     <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
//     <h4 class="card_race1">${kittenOneBreed}</h4>
//     <p class="card_description"> ${kittenOneDescription}</p>
// </article> 
// </li>`;

// const kittenTwo =`<li class="card kittenTwo">
// <article>
// <img class="card_img" src=${kittenTwoImg} alt="sphynx-cat" />
// <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
// <h4 class="card_race2">${kittenTwoBreed}</h4>
// <p class="card_description">${kittenTwoDescription}</p>
// </article> 
// </li>`;

// const kittenThree =`<li class="card kittenThree">
// <article>
// <img class="card_img" src=${kittenThreeImg} alt="maine-coon-cat" />
// <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
// <h4 class="card_race3">${kittenThreeBreed}</h4>
// <p class="card_description">${kittenThreeDescription}</p>
// </article>
// </li>`;

// Declarar la función de renderizar tarjeta de gato con los 4 parámetros
function renderKitten (img, name, breed, description) {
  return `<li class="card kittenOne">
    <article>
    <img class="card_img" src=${img} alt="siames-cat" />
    <h3 class="card_title">${name.toUpperCase()}</h3>
    <h4 class="card_race1">${breed}</h4>
    <p class="card_description"> ${description}</p>
    </article> 
    </li>`;
}

// Declarar las variables con la función de renderizar para cada uno de los tres gatitos
const kittenOne = renderKitten(kittenOneImg, kittenOneName, kittenOneBreed, kittenOneDescription);

const kittenTwo = renderKitten(kittenTwoImg, kittenTwoName, kittenTwoBreed, kittenTwoDescription);

const kittenThree = renderKitten(kittenThreeImg, kittenThreeName, kittenThreeBreed, kittenThreeDescription);

// Declaramos el elemento ul del HTML que contiene la lista de gatitos
const list = document.querySelector(".js-list") ;

// Llamamos a la función de renderizar incluyendo las constantes para cada gatito
list.innerHTML = kittenOne + kittenTwo + kittenThree;


// MOSTRAR Y OCULTAR FORMULARIO CON FUNCIONES
// Declarar botón de nuevo formulario y formulario
const buttonNewForm = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".new-form");

// Función para mostrar
function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

// Función para colapsar
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

// Función para mostrar o colapsar según estado
function handleClickNewCatForm() {
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
    } else {
      hideNewCatForm();
    }
}

// Instrucción que llama a la función al hacer click en el botón de nuevo formulario
buttonNewForm.addEventListener("click", handleClickNewCatForm);


// OCULTAR FORMULARIO Y BORRAR VALORES AL CANCELAR
// Declarar botón de cancelar y formulario
const cancel = document.querySelector(".button-cancel");
const form = document.querySelector(".form");

// Instrucción para colapsar y vaciar campos
cancel.addEventListener('click', ()=>{
    newForm.classList.add('collapsed');
    form.reset();
});


// FILTRAR: BÚSQUEDA POR DESCRIPCIÓN
// Declarar botón de buscar y campo de descripción
const searchButton = document.querySelector(".js_button-search");
const descriptionField = document.querySelector(".js_in_search_desc");

// Declarar la descripción existente de cada tarjeta de gatito
const kittenOneCard = document.querySelector(".kittenOne");
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoCard = document.querySelector(".kittenTwo");
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenThreeCard = document.querySelector(".kittenThree");
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

// Función para la tarjeta 1
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const description = descriptionField.value;
  if (kittenDesc1.includes(description)) {
      list.innerHTML = kittenOne;
    }
  console.log(description);
});

// Función para la tarjeta 2
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const description = descriptionField.value;
  if (kittenDesc2.includes(description)) {
      list.innerHTML += kittenTwo;
    }
  console.log(description);
});

// Función para la tarjeta 3
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const description = descriptionField.value;
  if (kittenDesc3.includes(description)) {
      list.innerHTML += kittenThree;
    }
  console.log(description);
});