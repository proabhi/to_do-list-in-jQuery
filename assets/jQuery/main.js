$("ul").on("click","span",function(event) {
  $(this).parent().remove();
});
$("ul").on("click","li",function() {
  $(this).toggleClass("list");
});
$("input").on("keypress",function(event) {
  if(event.which===13){
    var todo=$(this).val();
    $("ul").append("<li> <span><i class='far fa-trash-alt'></span></i>"+  todo  +"</li>");
    $("input").val('');
  }
});
$(".fa-edit").on("click",function() {
  $("input").fadeToggle();
});
