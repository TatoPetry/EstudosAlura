function ativaScrollSuave(selector) {
   $(selector).click(function(event){
       event.preventDefault();
       var target = $(this).attr('href');

       $('html, body').animate({
           scrollTop: $(target).offset().top
       }, 1000);

   });
}

ativaScrollSuave('a[href*=painel-sobre]');
ativaScrollSuave('a[href*=painel-palestrantes]');
ativaScrollSuave('a[href*=painel-formulario]');