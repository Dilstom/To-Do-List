//add click event to list
$("ul").on("click","li", function(){
$(this).toggleClass("completed"); 
});
//delete Todo X on click
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(700, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    //if keypress = enter(13)
    if(event.which === 13){
    //saving input val in var
        var todoText = $(this).val();
    //create new li and add to current list
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-compress").on("click",function(){
    $("input").fadeToggle();
})