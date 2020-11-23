const navHeight = $("nav").outerHeight();

$("#navHome").click(function(){
    $('html, body').animate({
        scrollTop: 0
      }, 400)
})

$("#navAbout").click( function(){
    const xPoint = $("section.info").offset().top;
    $('html, body').animate({
        scrollTop: xPoint-navHeight
      }, 400)
})

$("#navBlog").click( function(){
    const xPoint = $("section.recommendations").offset().top;
    $('html, body').animate({
        scrollTop: xPoint-navHeight
      }, 400)
})

$("#navPortfolio").click( function(){
    const xPoint = $("section.last-project").offset().top;
    $('html, body').animate({
        scrollTop: xPoint-navHeight
      }, 400)
})


$("#navContact").click( function(){
    const xPoint = $("section.contact").offset().top;
    $('html, body').animate({
        scrollTop: xPoint-navHeight
      }, 400)
})

