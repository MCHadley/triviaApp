$('document').ready(function(){
    getData();
});


function getData(){
    var url = 'http://127.0.0.1:5000/questions'
    $.getJSON(url, questionBuilder)
}

function questionBuilder(data){
    for(i=0;i<data.length;i++){
        $('#trivia').append('<form class='+ 'card'+ i + '><text>'+ data[i].question +'</text></form>');
        $('.card' + i).append('<br><input type="radio" id='+ data[i].correct +' value="correct" name="question' + i + '">' + '<label for="' + data[i].correct + '">'+ data[i].correct +'</label>');
        var incorrect = data[i].incorrect;
        for(c=0;c<incorrect.length;c++){
            $('.card' + i).append('<br><input type="radio" id='+ incorrect[c] +' value="incorrect" name="question'+ i + '"><label for="' + incorrect[c] + '">'+ incorrect[c] +'</label>')
        }
    }
}
