var xhrQuestions = new XMLHttpRequest();
xhrQuestions.open('GET', '/json/source.json', false);
xhrQuestions.send();
if (xhrQuestions.status != 200) {
alert( xhrQuestions.status + ': ' + xhrQuestions.statusText ); 
} else {
var dataBase = JSON.parse(xhrQuestions.responseText);
}


var xhrAnswers = new XMLHttpRequest();
xhrAnswers.open('GET', '/json/answers.json', false);
xhrAnswers.send();
if (xhrAnswers.status != 200) {
alert( xhrAnswers.status + ': ' + xhrAnswers.statusText ); 
} else {
var answerBase = JSON.parse(xhrAnswers.responseText);
}