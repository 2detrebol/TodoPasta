var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

//Javascript for image slider manual navigation//
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });
        });
        slides[manual].classList.add("active");
        btns[manual].classList.add("active");
    };
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
        });
    });

/* Javascript for image slider autoplay navigation*/
var repeat = function (activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;
    
        var repeater = () => {
        let tiempo
        if (active[0]["children"][0].className === "vid") { //verifica si el elemento activo es un video
        tiempo=58000; //en caso afirmativo asigna un tiempo de 59seg
        active[0].firstElementChild.currentTime=0; //y vuelve al inicio el video
        } 
        else {
            tiempo=3500; //en caso negativo asigna un tiempo de 3.5seg
            }
            setTimeout(function () {
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove("active");
            });

        slides[i].classList.add("active");
        btns[i].classList.add("active");
        i++;
        console.log(i)

        if (slides.length == i) {
           i = 0;
        }

        if (i >= slides.length) {
           return;
        }
            repeater();
        },tiempo);   //el tiempo va definido por la variable tiempo       
        };
        repeater();
    };
   repeat();
