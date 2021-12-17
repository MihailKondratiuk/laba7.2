document.addEventListener('keydown',function(event){
    switch(event.key){
    case 'a':
    setTimeout(myf1,1000);
    break;
    case 'b':
    setTimeout(myf2,1000);
    break;
    case 'c':
    setTimeout(myf3,1000);
    break;
    case 'd':
    setTimeout(myf4,1000);
    break;
    case 'e':
    setTimeout(myf5,1000);
    break;
    case 'f':
    setTimeout(myf6,1000);
    break;
    case 'g':
    setTimeout(myf7,1000);
    break;
    }
});
document.getElementById('abc1').onclick = function(){setTimeout(myf1,1000);};
function myf1(){
  var a = new Audio('baraban.mp3');
  a.play();
}
document.getElementById('abc2').onclick = function(){setTimeout(myf2,1000);};
function myf2(){
  var a = new Audio('guitar.mp3');
  a.play();
}
document.getElementById('abc3').onclick = function(){setTimeout(myf3,1000);};
function myf3(){
  var a = new Audio('skripka.mp3');
  a.play();
}
document.getElementById('abc4').onclick = function(){setTimeout(myf4,1000);};
function myf4(){
  var a = new Audio('piano.mp3');
  a.play();
}
document.getElementById('abc5').onclick = function(){setTimeout(myf5,1000);};
function myf5(){
  var a = new Audio('litavra.mp3');
  a.play();
}
document.getElementById('abc6').onclick = function(){setTimeout(myf6,1000);};
function myf6(){
  var a = new Audio('truba.mp3');
  a.play();
}
document.getElementById('abc7').onclick = function(){setTimeout(myf7,1000);};
function myf7(){
  var a = new Audio('organ.mp3');
  a.play();
}
