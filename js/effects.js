window.addEventListener("load", () => {
  const carrusel = document.querySelector(".carrusel-items");

  console.log(carrusel.scrollWidth);
  console.log(carrusel.clientWidth);

  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
  let intervalo = null;
  let step = 1;
  const start = () => {
    intervalo = setInterval(function () {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
      } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalo);
  };

  carrusel.addEventListener("mouseover", () => {
    stop();
  });

  carrusel.addEventListener("mouseout", () => {
    start();
  });

  setTimeout(() => {
    start();
  }, 1500);
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       document.getElementById("topmenu").style.top = "-100%";
   } else {
      document.getElementById("topmenu").style.top = "0";
   }
   lastScrollTop = st;
}, false);
