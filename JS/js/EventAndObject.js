console.log('This is tut 17,18');

// document.getElementById('heading').addEventListener('click', function (e) {
//     console.log('clicked heading');
//     variable = e.target;
//     variable = e.target.class;
//     variable = Array.from(e.target.classList);
//     variable = e.offsetX; //how much long you clicked on ele
//     variable = e.offsetY;
//     console.log(variable);
//     // location.href = "//codewithharry.com"
// })

// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e) {
//     console.log("thanks", e);
//     e.preventDefault();
// }
// function func2(e) {
//     console.log("thanks dbl click", e);
//     e.preventDefault();
// }
// function func3(e) {
//     console.log("thanks mousedown", e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('you entered no');

// })
// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('you leaved no');

// })
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log('mouse move event');
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},154`

})