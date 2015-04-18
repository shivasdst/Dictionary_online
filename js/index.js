$(document).ready(function(){

var availableTags = [
"abac",
"abaca",
"Abaddon",
"abandoned",
"abandonee",
"abandoner",
"abandonment",
"abase",
"abasement",
"abash",
"abashment",
"abasia",
"abask",
"abate",
"abatement",
"abatis",
"abatised",
"abattis",
"abattoir",
"abaxial",
"abaxile",
"abaya",
"abb",
"Abba",
"babe",
"babel",
"babelise",
"babelism",
"babelize",
"Babi",
"babirusa",
"Babism",
"Babist",
"baboo",
"baboon",
"baboonery",
"babouche",
"babu",
"babul",
"babushka"
];

$("#select_word").autocomplete({
      source: availableTags
    });

$('#form_data').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var data = $('#select_word').val();
      
        var alpha = data.split("");
                
        var url = "http://localhost/Dictionary_online/src/"+ alpha[0].toUpperCase() + "/html/" + alpha[0].toLowerCase() + "1_uni.html#" + data;
        //alert(url);
		window.location.replace(url);
    });

});

