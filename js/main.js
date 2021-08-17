$('#minus').click(function(){
    document.getElementById('quantity').stepDown()
})
$('#plus').click(function(){
    document.getElementById('quantity').stepUp()
})
$('.banner').mousemove(function(e){
    var mouseX = 45+(e.pageX/1*-1/15)
    var mouseY = 40+(e.pageY/1*-1/15)
    console.log(mouseX)
  $('.leaf').css({
      transform: "translateX("+mouseX+"%) translateY("+mouseY+"%)",
  })
})
$('.banner').mouseleave(function(e){
    // var mouseX = (e.pageX/10*-1/15)
    // var mouseY = (e.pageY/10*-1/15)
    // console.log(mouseX)
  $('.leaf').css({
      transform: "translateX(0) translateY(0)",
  })
})

$('.accBtn').click(function(){
    $('.accBtn').removeClass('active')
    $(this).addClass('active')
})

$('.loginBtn').click(function(){
    $('.login').show()
    $('.register').hide()
})
$('.regBtn').click(function(){
    $('.login').hide()
    $('.register').show()
})