$(function(){
    $('#number-chooser').submit(function(event){
        event.preventDefault();
        var num = +$('#number-choice').val();
        $('.js-results').html('');
        for(var i = 1; i <= num; i++){
            var div = $('<div>', {"class":"fizz-buzz-item"});
            var span = $('<span>');
            var output = '';
            if(i % 15 == 0){
                output = 'FizzBuzz';
                div.addClass("fizzbuzz");
            }else{
                if(i % 3 == 0){
                    output = 'Fizz';
                    div.addClass("fizz");

                }else{
                    if(i % 5 == 0){
                        output = 'Buzz';
                        div.addClass('buzz');
                    }else{
                        output = i;
                    }
                }
            }

            span.text(output);
            div.append(span);
            $('.js-results').append(div);
        }

    });
});
