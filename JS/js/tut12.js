console.log('Welcome to tut 12.js');
// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a = document.links[0].href;
// a = document.links;
// // use document.images and document.scripts and print the list of images and scripts on an html page

let a = document.links;
Array.from(a).forEach(function (element) {
    // console.log(element);
    let href = element.href
    if (href.includes("facebook")) {
        console.log(href);
    }
})

