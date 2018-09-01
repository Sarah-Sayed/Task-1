var typed = new Typed('.test1', {
	strings: ["Welcome To our Team"],
	typeSpeed: 100
	
  });


$("#wrapper").animate({width:'100%'},500)
$("#wrapper").animate({height:'100%'},500,function(){
    $(".typedT").fadeIn(700,function(){
        $(".container" ).fadeIn(1000,function(){
			$("#Second-Section").fadeIn(2000)
		})
    })
})