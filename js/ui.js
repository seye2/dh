/*gnb nave jQuery*/
$(function() {	

	$("#content .allmenu_btn_off").click(function(e) {
		var height = $(window).height();
		if($("#wrap").hasClass("enable_panel")) {
			$("#wrap").removeClass("enable_panel");
			$("#slide_panel").css("z-index","1","border","1px solid red");
		
		} else {
			$("#wrap").css("height",$(window).height()).addClass("enable_panel");
			$("#slide_panel").css("z-index","4","height",$("#wrap").height()).fadeIn(300);
			$(".allmenu_btn_off").css("display","none");
			$(".allmenu_btn_on").css("display","block");
		}
		e.stopPropagation();
		e.preventDefault();
	});
	
	$("#content .allmenu_btn_on").click(function(e) {
		var height = $(window).height();
		if($("#wrap").hasClass("enable_panel")) {
			$("#wrap").removeClass("enable_panel");
			$("#slide_panel").css("z-index","1");
			$(".allmenu_btn_on").css("display","none");
			$(".allmenu_btn_off").css("display","block");
			
		} 
		e.stopPropagation();
		e.preventDefault();
	});

	/*background 100% jQuery*/
	$(window).load(function() {    
		var theWindow  = $(window),
		    $bg= $("#bg"),
		    aspectRatio = $bg.width() / $bg.height();
		    			    		
		function resizeBg() {
			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			    $bg
			    	.removeClass()
			    	.addClass('bgheight');
			} else {
			    $bg
			    	.removeClass()
			    	.addClass('bgwidth');
			}
		}
		                   			
		theWindow.resize(resizeBg).trigger("resize");

	});
});