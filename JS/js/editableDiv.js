console.log('This is tut 21');

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let ele = document.getElementById('heading');
document.addEventListener('click', function edit(e) {
    document.getElementById('heading').contentEditable = 'true';
    let text = document.getElementById('heading').innerText
    localStorage.setItem('Text', text);

})
console.log(ele)