// change the class of each box, regarding the colours

// get the boxes with jquery
let boxes = $('.box');
// loop through each box
boxes.each(function(index, box) {
// get the class of the current box
    let currentClass = $(box).attr('class');
// if the class is red, make it blue
    if (currentClass === 'box red-box') {
        $(box).attr('class', 'blue-box');
    }
// if the class is blue make it green
    else if (currentClass === 'box blue-box') {
        $(box).attr('class', 'green-box');
    }
// if the class is green make it red
    else if (currentClass === 'box green-box'){
        $(box).attr('class', 'box red-box');
    }
});

// create a  button to open the model
let button = $('<button>Open Model</button>');
// get the button with jquery
$('#content').append(button);
// add a click event listener to the button
button.on('click', function(){
// when the button is clicked show the model
$('.lightbox').show();
});