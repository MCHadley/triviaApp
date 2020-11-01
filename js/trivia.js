$('document').ready(function(){
    getData();
});


function getData(){
    var url = 'http://127.0.0.1:5000/questions'
    $.getJSON(url, questionBuilder)
}

function questionBuilder(data){
    for(i=0;i<data.length;i++){
        $('#trivia').append('<form class="cardModal" id='+ 'card'+ i + '><text>'+ data[i].question +'</text></form>');
        $('#card' + i).append('<br>'+ '<label for="' + data[i].correct + '">' +'<input type="radio" id=question'+ i +' value="correct" name="question' + i + '">' + data[i].correct +'</label>');
        var incorrect = data[i].incorrect;
        for(c=0;c<incorrect.length;c++){
            $('#card' + i).append('<br><label for="' + incorrect[c] + '"><input type="radio" id=question'+ c +' value="incorrect" name="question'+ i + '">' + incorrect[c] + '</label>');
        }
        $('#card' + i).css('card')
        $('#card' + i).append('<br><button type="button" value="next">Next</button>')
    }
    $('#trivia').on('click', e => {
        let div = $("#trivia");
        let rbs = div.find('input[type="radio"][value="correct"]');
        let rbsChecked = 0;
        $(rbs).each((i, e) => {
          if (e.checked)
            rbsChecked++;
        });
      });
}
