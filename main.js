document.addEventListener("DOMContentLoaded", function(){
  var elScore = document.getElementById('score')
    , c = 0
    , score = 0
    , start = 0;
  document.getElementsByClassName('start')[0].onclick = function() {
    document.getElementsByClassName('start')[0].style.display = "none";
    document.getElementsByClassName('people')[0].style.display = "inline-block";
    document.querySelector('h1').style.display = "none";
    setInterval( function() {
      elScore.innerText = c++;
    },100);
  };

  document.querySelector('.people').onmouseover = function() {
    document.getElementsByClassName('start')[0].style.display = "block";
    document.getElementsByClassName('start')[0].innerHTML = "Please Don't Touch Me Again.";
    document.getElementsByClassName('people')[0].style.display = "none";
  };

});
