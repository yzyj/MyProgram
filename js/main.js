/*  @author dpd
    @date 2016/3/8    
*/

$(document).ready(function(){
	var innit = {};
	//innit tb
	if(!innit.tb){
		$('tr:odd').addClass('odd');
		innit.tb = true;
	}
	document.body.scrollTop == 0?$('.goto-head').hide():$('.goto-head').show();
	
	//goto head 
	$('.goto-head').on('click', function(){
		 document.body.scrollTop=0;
	});
	//order Event
	$('.header-order li').on('click', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	//selector Event
	$('.selector').on('click', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	})
	//scroll Event
	$(window.document).scroll(function () {		
		var scrolltop = $(document).scrollTop();		
		
		if(scrolltop>0){
			$(".header").addClass('athead');
			$('.goto-head').show();
		}
		else {
			$(".header").removeClass('athead');
			$('.goto-head').hide();
		}	

		var viewHeight = document.documentElement.clientHeight;  
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop; 

		var aboutH = $(".about-tb").get(0).offsetHeight;  
		if(getElementTopLeft($(".about-tb").get(0)).top+aboutH/5 < viewHeight + scrollY){ 
      $(".about-tb").show();
			$(".about-tb").addClass('animated fadeInRight'); 
    }
    else{
    	$(".about-tb").removeClass('animated fadeInRight'); 
    }

    var listH = $(".list-tb").get(0).offsetHeight;    
    if(getElementTopLeft($(".list-tb").get(0)).top+listH/5 < viewHeight + scrollY){ 
      $(".list-tb").show();
			$(".list-tb").addClass('animated fadeInLeft'); 
    }
    else{
    	$(".list-tb").removeClass('animated fadeInLeft'); 
    }

    var fundingH = $(".funding-tb").get(0).offsetHeight;  
		if(getElementTopLeft($(".funding-tb").get(0)).top+fundingH/5 < viewHeight + scrollY){ 
      $(".funding-tb").show();
			$(".funding-tb").addClass('animated fadeInRight'); 
    }
    else{
    	$(".funding-tb").removeClass('animated fadeInRight'); 
    }
		
		var recentH = $(".recent-tb").get(0).offsetHeight;  
		if(getElementTopLeft($(".recent-tb").get(0)).top+recentH/5 < viewHeight + scrollY){ 
      $(".recent-tb").show();
			$(".recent-tb").addClass('animated fadeInLeft'); 
    }
    else{
    	$(".recent-tb").removeClass('animated fadeInLeft'); 
    }
	});
	
	
});

 
function getElementTopLeft(obj){  
  var top = 0;  
  var left = 0; 
  while(obj){  
      top += obj.offsetTop;  
      left += obj.offsetLeft;
      obj = obj.offsetParent;  
  }
  return {top:top,left:left};  
}  