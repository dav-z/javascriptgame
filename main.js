var intervalId;
function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
}
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });
};
function animateDivb(){
    var newq = makeNewPosition();
    var oldq = $('.b').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.b').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivb();
    });
};
function animateDivc(){
    var newq = makeNewPosition();
    var oldq = $('.c').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.c').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivc();
    });
};
function animateDivd(){
    var newq = makeNewPosition();
    var oldq = $('.d').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.d').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivd();
    });
};
function animateDive(){
    var newq = makeNewPosition();
    var oldq = $('.e').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.e').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDive();
    });
};
function animateDivf(){
    var newq = makeNewPosition();
    var oldq = $('.f').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.f').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivf();
    });
};
function animateDivg(){
    var newq = makeNewPosition();
    var oldq = $('.g').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.g').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivg();
    });
};
function animateDivh(){
    var newq = makeNewPosition();
    var oldq = $('.h').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.h').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivh();
    });
};
function animateDivi(){
    var newq = makeNewPosition();
    var oldq = $('.i').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.i').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivi();
    });
};
function animateDivj(){
    var newq = makeNewPosition();
    var oldq = $('.j').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.j').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivj();
    });
};
function animateDivk(){
    var newq = makeNewPosition();
    var oldq = $('.k').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.k').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivk();
    });
};
function animateDivl(){
    var newq = makeNewPosition();
    var oldq = $('.l').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.l').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivl();
    });
};
function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.99;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
function hideAll() {
  console.log( "hideAll:", document.querySelectorAll("img") );
  document.querySelectorAll("img").forEach( img => {
    img.style.display = "none";
    img.classList.add("hidden");
  });
};

function initData(){
  elScore = document.getElementById('score');
  document.querySelectorAll('img').forEach( img => img.classList.remove('hidden'));
  c = 0;
  z = 0;
}
document.addEventListener("DOMContentLoaded", function(){
  initData();
  // click start div to start game
  document.getElementsByClassName('start')[0].onclick = function() {
    c = 0;
    initData();
      document.querySelector('.a').style.display = "inline-block";
    animateDiv();
    // remove the start button and h1 at click and display falling objects
    document.getElementsByClassName('start')[0].style.display = "none";
    // document.getElementsByClassName('people')[0].style.display = "inline-block";
    document.querySelector('h1').style.display = "none";
    // start the score counter
    z = 1;
    intervalId = setInterval( function() {
      if( z == 0 || document.querySelector('img:not(.hidden)').length == 0) {
        clearInterval(intervalId);
        return;
      }
      elScore.innerText = c++;
      if (c > 50 ){
        document.querySelector('.b:not(.hidden)').style.display = "inline-block";
        animateDivb();
      }
      if (c > 200 ){
        document.querySelector('.c:not(.hidden)').style.display = "inline-block";
        animateDivc();
      }
      if (c > 300 ){
        document.querySelector('.d:not(.hidden)').style.display = "inline-block";
        document.querySelector('.e:not(.hidden)').style.display = "inline-block";
        animateDivd();
        animateDive()
      }
      if (c > 500 ){
        animateDivf();
        animateDivg();
        animateDivh();
        document.querySelector('.f:not(.hidden)').style.display = "inline-block";
        document.querySelector('.g:not(.hidden)').style.display = "inline-block";
        document.querySelector('.h:not(.hidden)').style.display = "inline-block";
      }
      if (c > 1000 ){
        animateDivi();
        animateDivj();
        animateDivk();
        animateDivl()
        document.querySelector('.i:not(.hidden)').style.display = "inline-block";
        document.querySelector('.j:not(.hidden)').style.display = "inline-block";
        document.querySelector('.k:not(.hidden)').style.display = "inline-block";
        document.querySelector('.l:not(.hidden)').style.display = "inline-block";
      }

    },100);
  };
  document.querySelectorAll('img').forEach(function(img){
    img.onmouseover = function() {
      hideAll();
      document.getElementsByClassName('start')[0].style.display = "block";
      document.getElementsByClassName('start')[0].innerHTML = "Please Don't Touch Me Again.";
      z = 0;
    };
  })
});
