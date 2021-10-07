console.log("tut16")
let element = document.createElement('li');
let text = document.createTextNode('text Node');
element.appendChild(text)
//add a class to li ele
element.className = "choldul";
element.id = "createdLi";
element.setAttribute('title', 'mytitle')
// element.innerText = "JS created"
// element.innerHTML = "<b>JS created</b>"


let ul = document.querySelector('ul.this')
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('elem2 text Node');
elem2.appendChild(tnode)

element.replaceWith(elem2)
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))

let pr = elem2.getAttribute('id');
elem2.removeAttribute('id')
console.log(elem2, pr)

