// slider
var leftPos = 0;
$(".wrapper>.sliderFrame>.sliderRightBtn").click(function(){
    
    if (leftPos == -200){
        leftPos = 0;
    }
    else{
        leftPos-=100;
    }
    $(".wrapper>.sliderFrame>.sliderLent").animate({left:leftPos + '%'},"slow")

})
$(".wrapper>.sliderFrame>.sliderLeftBtn").click(function(){
    
    if (leftPos == 0){
        leftPos = -200;
    }
    else{
        leftPos+=100;
    }
    $(".wrapper>.sliderFrame>.sliderLent").animate({left:leftPos + '%'},"slow")
})
// $(".wrapper>.sliderFrame>.btn-success").mouseover(function(){
//     $(".wrapper>.sliderFrame>.btn-success").css({
        
//         background:'white',
//         border:'2px solid #42e57e',
//         color:'#42e57e'
//     })
// })
// $(".wrapper>.sliderFrame>.btn-success").mouseout(function(){
//     $(".wrapper>.sliderFrame>.btn-success").css({
        
//         background:'rgb(66, 229, 126)',
//         color:'white',
//         border:'none'
//     })
// })
$(".wrapper>.sliderFrame>.blackHover>.btn-danger").click(function(){
     $("html").animate({scrollTop:1200},1000);
})