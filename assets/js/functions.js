// Variables

let currentYear = (new Date).getFullYear();

// Functions

$(document).ready(function() {
    $("#year").text( currentYear );
    $("#music").load("music.txt");
});