$(document).ready(function(){

  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) {
    
    $('[data-toggle="tooltip"]').tooltip();

  }

});