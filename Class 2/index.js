// selecting elements
function submitForm() {
    var name = document.getElementById('user_name').value;
    var age = document.getElementById('age').value;
    // console.log( document.getElementsByClassName("age"));
    // console.log( document.getElementsByTagName("input"));
    
    // var age = document.getElementsByClassName("age").value;

    alert(name + " is " + age + " years old.")
}

// Manipulating Elements

function manipulateElement() {
    // document.getElementById('header-1').textContent = "Hi there, I'm Mary";

    // document.getElementById('header-1').style.translate = "-42px -60px";

    // console.log(document.getElementById('header-1').classList);
    document.getElementById('header-1').classList.remove('xyz');
    document.getElementById('header-1').classList.add('text-animation');
    // Changing Attributes
    document.getElementById('person-image').src = "image-2.jpg";
}

// Creating Elements
function creatingElement() {
    var container = document.getElementById('create-container');
    var newDiv = document.createElement('div');
    newDiv.textContent = "New Element created!";

    container.appendChild(newDiv);
}

// Event handling
const button = document.getElementById('event-button');
function eventHandleButton () {
    console.log("Event 1");
    document.getElementById('event-person-image').src = "image-2.jpg";
    console.log("Event 2");
    alert('Button cliked!')
}

button.addEventListener('click', eventHandleButton);

// Traverse Element
function traverseElement() {
    const list = document.getElementById('list');
    const item1 = list.firstElementChild;
    // const item4 = list.lastElementChild;
    // console.log(item1.textContent);
    // console.log(item1.nextElementSibling.textContent);
    // console.log(item4.previousElementSibling.textContent);
    // console.log(item4.textContent);

    console.log(item1.textContent);
    console.log(item1.nextElementSibling.textContent);
    console.log(item1.nextElementSibling.nextElementSibling.textContent);
    console.log(item1.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
}