// adding first madlib 

const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');


myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
});

// adding second madlib 

const myButton2 = document.getElementById('clickMe');
const noun2 = document.getElementById('noun2');
const noun2Input = document.getElementById('noun2Input');


myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun2.innerHTML = noun2Input.value;
});

// adding my third madLib 

const myButton3 = document.getElementById('clickMe');
const noun3 = document.getElementById('noun3');
const noun3Input = document.getElementById('noun3Input');


myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun3.innerHTML = noun3Input.value;
});

// adding my verb in madlib 

const myButton4 = document.getElementById('clickMe');
const verb4 = document.getElementById('verb4');
const verb4Input = document.getElementById('verb4Input');


myButton.addEventListener('click', function (event) {
  event.preventDefault();

  verb4.innerHTML = verb4Input.value;
});

// adding my adjective in madlib 

const myButton5 = document.getElementById('clickMe');
const adjective = document.getElementById('adjective');
const adjectiveInput = document.getElementById('adjectiveInput');


myButton.addEventListener('click', function (event) {
  event.preventDefault();

  adjective.innerHTML = adjectiveInput.value;
});

// changing the title of my url 
const myTitle = document.getElementsByTagName('title')[0];
myTitle.textContent = "Changing the Title";
// changing the color of my <p>'s
const myParagraphs = document.getElementsByTagName('p')[1];
myParagraphs.style.color = "green"













