$('document').ready(function(){
    ingestJson();
});

function ingestJson(){
    $.getJSON("http://127.0.0.1:5000/", function(json) {
        console.log(json)
    })
}