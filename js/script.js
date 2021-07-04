var slideIndex = 0;
const btnAceptarcookies = document.getElementById('btn-aceptar')
const avisoCookies = document.getElementById('aviso-cookies')
const fondoCookies = document.getElementById('fondo-cookies')
const fondoAviso = document.getElementById('fondo_aviso1')



showSlides(); // call showslide method
   
function showSlides()
{
    var i;
  
    // get the array of divs' with classname image-sliderfade
    var slides = document.getElementsByClassName("image-sliderfade"); 
     
    // get the array of divs' with classname dot
  
    for (i = 0; i < slides.length; i++) {
        // initially set the display to 
        // none for every image.
        slides[i].style.display = "none"; 
    }
   
     // increase by 1, Global variable
    slideIndex++; 
   
     // check for boundary
    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
   
   
    slides[slideIndex - 1].style.display = "block";
  
    // Change image every 2 seconds
    setTimeout(showSlides, 6000); 
}

$(document).ready(function(){
    $('.arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $('.arriba').slideDown(300);
       }else{
           $('.arriba').slideUp(300);
       }
    });
});

    avisoCookies.classList.add('activo');
    fondoCookies.classList.add('activo');

btnAceptarcookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoCookies.classList.remove('activo');
    

    localStorage.setItem('cookies-aceptadas', true);
});


    fondoAviso.classList.add('activo');

btnAceptarcookies.addEventListener('click', () => {
    fondoCookies.classList.remove('activo');
    
});
