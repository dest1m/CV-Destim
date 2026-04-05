$(document).ready(function(){
  loadPage("home.html");

  $(document).on("click",".menu",function(){
    let page=$(this).data("page");
    $(".menu").removeClass("active");
    $(this).addClass("active");
    loadPage(page);
  });

  function loadPage(page){
    $("#content").fadeOut(200,function(){
      $("#content").load(page).fadeIn(200);
    });
  }
});