var u = new SpeechSynthesisUtterance();
var speech, record, recognition;
$(function(){

    //読み上げ
    $("#text").on('blur', function(){
        speech();
    });

    speech = function(){
        //u.text = 'Hello World';
        u.text = $('#text').val();
        //u.lang = 'en-US';
        u.lang = 'ja-JP';
        u.rate = 1.2;
        u.onend = function(event) {console.log('end')}
        speechSynthesis.speak(u);
    }



    //音声認識
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';

    recognition.addEventListener('result', function(e){
        console.log(e.results);
        $('#result_text').text(e.results.item(0).item(0).transcript)
    }, false);

    $('#record').on('click', function(){
        recognition.start(); 
    });
});

