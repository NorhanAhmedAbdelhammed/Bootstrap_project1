
$(".translate").click(function(){
    if($(this).html()=="en"){
      //handle arabic
      $(this).html("ar");
      $("html").attr("lang" ,"en");
      $("html").attr("dir","ltr")
      $("link:nth(0)").attr("href","./css/bootstrap.min.css")
    }
    else{
     //handle english
     $(this).html("en");
     $("html").attr("lang" ,"ar");
     $("html").attr("dir","rtl")
     $("link:nth(0)").attr("href","./css/arbicBootStrap.css")
    }
  })

  