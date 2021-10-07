console.log('This is tut 17');

document.getElementById('heading').addEventListener('click', function (e) {
    console.log('clicked heading');
    variable = e.target;
    variable = e.target.class;
    variable = Array.from(e.target.classList);
    variable = e.offsetX; //how much long you clicked on ele
    variable = e.offsetY;
    console.log(variable);
    // location.href = "//codewithharry.com"
})