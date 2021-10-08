console.log('This is tut 20');

let impArr = ['keyboard', 'mouse', 'speaker']

//add key value pair to lacalstorage
localStorage.setItem('name', 'leena');
localStorage.setItem('items', JSON.stringify(impArr)); //JSON.strigify takes object and return string

// localStorage.clear();    //clears the entire localstorage 

//clear perticular key value pair
localStorage.removeItem('name')

let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('items'));//JSON.parse takes string and return object
console.log(name)

//session storage functions same as local storage function


