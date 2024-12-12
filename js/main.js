"use strict" ;

// Meter tarjetas gatos con variables

const kittenOneImg = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneBreed = "Siamés";
const kittenOneDescription = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoBreed = "Sphynx";
const kittenTwoDescription = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenThreeImg = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeBreed = "Maine Coon";
const kittenThreeDescription = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

const kittenOne = `<li class="card kittenOne">
<article>
    <img class="card_img" src=${kittenOneImg} alt="siames-cat" />
    <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
    <h4 class="card_race1">${kittenOneBreed}</h4>
    <p class="card_description"> ${kittenOneDescription}</p>
</article> 
</li>`;

const kittenTwo =`<li class="card kittenTwo">
<article>
<img class="card_img" src=${kittenTwoImg} alt="sphynx-cat" />
<h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
<h4 class="card_race2">${kittenTwoBreed}</h4>
<p class="card_description">${kittenTwoDescription}</p>
</article> 
</li>`;

const kittenThree =`<li class="card kittenThree">
<article>
<img class="card_img" src=${kittenThreeImg} alt="maine-coon-cat" />
<h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
<h4 class="card_race3">${kittenThreeBreed}</h4>
<p class="card_description">${kittenThreeDescription}</p>
</article>
</li>`;

const list = document.querySelector(".js-list") ;
list.innerHTML = kittenOne + kittenTwo + kittenThree;



// Mostrar y ocultar formulario
const buttonNewForm = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".new-form");

// buttonNewForm.addEventListener('click', ()=>{
//     newForm.classList.toggle('collapsed');
// });


// revisar

buttonNewForm.addEventListener("click", handleClickNewCatForm);

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
    } else {
      hideNewCatForm();
    }
}


// Ocultar la sección del formulario al hacer clic en el botón cancelar + Vaciar inputs al hacer clic en cancelar

const cancel = document.querySelector(".button-cancel");
const form = document.querySelector(".form");

cancel.addEventListener('click', ()=>{
    newForm.classList.add('collapsed');
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].value = "";
});


// FILTRAR: Búsqueda por descripción
const searchButton = document.querySelector(".js_button-search");
const descriptionField = document.querySelector(".js_in_search_desc");


// Acceder al texto de la descripción de cada gatito
const kittenOneCard = document.querySelector(".kittenOne");
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoCard = document.querySelector(".kittenTwo");
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenThreeCard = document.querySelector(".kittenThree");
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";


searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const description = descriptionField.value;
    if (kittenDesc1.includes(description)) {
        list.innerHTML = kittenOne;
      }
    console.log(description);
  });

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const description = descriptionField.value;
    if (kittenDesc2.includes(description)) {
        list.innerHTML += kittenTwo;
      }
    console.log(description);
  });

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const description = descriptionField.value;
    if (kittenDesc3.includes(description)) {
        list.innerHTML += kittenThree;
      }
    console.log(description);
  });


// 2. LISTADO - Bonus: ¿Y si no hay raza? 

