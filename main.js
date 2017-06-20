var intervalId;
document.addEventListener("DOMContentLoaded", function(){
  elScore = document.getElementById('score');
  c = 0;
  z = 0;
  // click start div to start game
  document.getElementsByClassName('start')[0].onclick = function() {
    c = 0;
    // remove the start button and h1 at click and display falling objects
    document.getElementsByClassName('start')[0].style.display = "none";
    document.getElementsByClassName('people')[0].style.display = "inline-block";
    document.querySelector('h1').style.display = "none";
    // start the score counter
    // setInterval( function timer() {
    //   elScore.innerText = c++;
    // },100);
    z = 1;
    intervalId = setInterval( function() {
      elScore.innerText = c++;
      if( c > 20 ) {
        document.querySelector('.people').style.animation = "fallingLeaves 5s infinite linear";
      }
      if( z == 0 ) {
        clearInterval(intervalId);
      }
    },100);

  };

  document.querySelector('.people').onmouseover = function() {
    // stop score counter
    // show the start button again but with new text
    document.getElementsByClassName('start')[0].style.display = "block";
    document.getElementsByClassName('start')[0].innerHTML = "Please Don't Touch Me Again.";
    // hide falling objects
    document.getElementsByClassName('people')[0].style.display = "none";
    z = 0;
  };
});
