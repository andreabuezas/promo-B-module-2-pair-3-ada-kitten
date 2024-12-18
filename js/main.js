"use strict" ;

// METER TARJETAS DE LOS GATOS CON VARIABLES Y FUNCIONES
// LISTADO: CONVERTIR CADA GATITO EN UN OBJETO

// Declarar cada gato como objetos con propiedades
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

// Declarar la función de renderizar tarjeta de gato con los 4 parámetros
function renderKitten (img, name, breed, description) {
  return `<li class="card kitten">
    <article>
    <img class="card_img" src=${img} alt="siames-cat" />
    <h3 class="card_title">${name.toUpperCase()}</h3>
    <h4 class="card_race">${breed}</h4>
    <p class="card_description"> ${description}</p>
    </article> 
    </li>`;
}

// Declarar las variables con la función de renderizar para cada uno de los tres gatitos
const kittenOne = renderKitten(kittenData_1.image, kittenData_1.name, kittenData_1.race, kittenData_1.desc);

const kittenTwo = renderKitten(kittenData_2.image, kittenData_2.name, kittenData_2.race, kittenData_2.desc);

const kittenThree = renderKitten(kittenData_3.image, kittenData_3.name, kittenData_3.race, kittenData_3.desc);

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

const filterKitten = (event) => {
  event.preventDefault();
  list.innerHTML = ''; // Limpiar resultados previos
  const description = descriptionField.value; // esta declaración se hace dentro de la función pq si estuviera fuera, en el momento de renderizar la página estaría vacía
  if (kittenData_1.desc.includes(description)) {
    list.innerHTML += kittenOne;
  } // hay que añadir .desc porque includes funciona sobre strings, y ahora kittenData_1 es un objeto
  if (kittenData_2.desc.includes(description)) {
    list.innerHTML += kittenTwo;
  }
  if (kittenData_3.desc.includes(description)) {
    list.innerHTML += kittenThree;
  }
};

searchButton.addEventListener('click', filterKitten);