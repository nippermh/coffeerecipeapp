//Query Selectors
const recipeForm = document.querySelector('#recipe-form');
const recipeContainer = document.querySelector('#recipe-container');
let listItems = [];

//Functions
function handleFormSubmit(e) {
    e.preventDefault(); //prevents the page from automatically refreshing and then we lose data
    console.log(e);
}
//Event Listeners
//Grab all the input once it is entered into the forms by clicking the button 'add recipe'
recipeForm.addEventListener('submit', handleFormSubmit)