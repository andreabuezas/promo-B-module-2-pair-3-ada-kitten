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

// Lista con la información de todos los gatitos
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];


// Declarar la función de renderizar tarjeta de gato con los 4 parámetros

function pintarKitten (kitten) {
  const article= `<li class="card kitten">
    <article>
    <img class="card_img" src=${kitten.image} alt="siames-cat" />
    <h3 class="card_title">${kitten.name.toUpperCase()}</h3>
    <h4 class="card_race">${kitten.race}</h4>
    <p class="card_description"> ${kitten.desc}</p>
    </article> 
    </li>
  `;
  return article;
}; 
// Declaramos el elemento ul del HTML que contiene la lista de gatitos
const list = document.querySelector(".js-list") ;

// Función para llamar a pintar viaje cogiendo los datos del array
function listaKittens(){
  for(const unKitten of kittenDataList){
      list.innerHTML += pintarKitten(unKitten);
  };
};

// llamamos a la función
listaKittens();



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
  for (const kittenItem of kittenDataList) {
    //Completa el código
    //Comprueba si cada gatito contiene la descripción
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)

    if (kittenItem.desc.includes(description)) {
      list.innerHTML += pintarKitten(kittenItem);
    }
  }
};

searchButton.addEventListener('click', filterKitten);