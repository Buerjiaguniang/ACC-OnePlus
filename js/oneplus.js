$(function(){
	var nav=$(".nav-index");
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=80 ){
			nav.addClass("fixed");
		}
		else{
			nav.removeClass("fixed");
		}
	})
})

$(function(){
	var nav=$("#storenav");
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=80 ){
			nav.addClass("is-fixed");
		}
		else{
			nav.removeClass("is-fixed");
		}
	})
})

//$(function(){
//	$("#a1").click(function(){
//		$(".first .first-content .text-box ol").removeClass("showstory");
//		$("#a1").addClass("showstory");
//		
//		$(".first .first-content .text-box ul li").removeClass("showstory");
//		$("#a111").addClass("showstory");
//		
//		$(".first  .phone-box ul li").removeClass("showstory");
//		$("#a11").addClass("showstory");
//	})
//	$("#a2").click(function(){
//		$(".first .first-content .text-box ol").removeClass("showstory");
//		$("#a2").addClass("showstory");
//		$(".first .first-content .text-box ul li").removeClass("showstory");
//		$("#a211").addClass("showstory");
//		$(".first .phone-box ul li").removeClass("showstory");
//		$("#a21").addClass("showstory");
//	})
//	$("#a3").click(function(){
//		$(".first .first-content .text-box ol").removeClass("active");
//		$("#a3").addClass("active");
//		$(".first .first-content .text-box ul li").removeClass("active");
//		$("#a311").addClass("active");
//		$(".first  .phone-box ul li").removeClass("active");
//		$("#a31").addClass("active");
//	})
//})
$(function(){
	$("#a2").click(function(){
		$(".first .first-content .text-box ul li ").hide();
		$("#a211").show();
		$(".phone-box ul li").hide();
		$("#a21").show();
		$(".nav-dot li").removeClass("showli");
		$("#a2").addClass("showli");
	});
	$("#a1").click(function(){
		$(".first .first-content .text-box ul li ").hide();
		$("#a111").show();
		$(".phone-box ul li").hide();
		$("#a11").show();
		$(".nav-dot li").removeClass("showli");
		$("#a1").addClass("showli");
	});
	$("#a3").click(function(){
		$(".first .first-content .text-box ul li ").hide();
		$("#a311").show();
		$(".phone-box ul li").hide();
		$("#a31").show();
		$(".nav-dot li").removeClass("showli");
		$("#a3").addClass("showli");
	})
})

$(function(){
	var mark=0;
	$("#showimage1").click(function(){
		if(mark==0){
			$(".op-footer-link .op-footer-wrap .footer-item #b1").addClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage1").removeClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage1").addClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #b11").removeClass("recoverimage");
			$(".op-footer-link .op-footer-wrap .footer-item #b11").addClass("showimage");
			mark=1;
		}
		else{
			$(".op-footer-link .op-footer-wrap .footer-item #b1").removeClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage1").removeClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage1").addClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #b11").addClass("recoverimage");
			mark=0;
		}
	});
	
	
	$("#showimage2").click(function(){
		if(mark==0){
			$(".op-footer-link .op-footer-wrap .footer-item #b2").addClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage2").removeClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage2").addClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #b21").removeClass("recoverimage");
			$(".op-footer-link .op-footer-wrap .footer-item #b21").addClass("showimage");
		    mark=1;
		}
		else{
			$(".op-footer-link .op-footer-wrap .footer-item #b2").removeClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage2").removeClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage2").addClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #b21").addClass("recoverimage");
			mark=0;
		}
	});
	
	
	$("#showimage3").click(function(){
		if(mark==0){
			$(".op-footer-link .op-footer-wrap .footer-item #b3").addClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage3").removeClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage3").addClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #b31").removeClass("recoverimage");
			$(".op-footer-link .op-footer-wrap .footer-item #b31").addClass("showimage");
			mark=1;
		}
		else{
			$(".op-footer-link .op-footer-wrap .footer-item #b3").removeClass("expand");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage3").removeClass("arrow-up");
			$(".op-footer-link .op-footer-wrap .footer-item #showimage3").addClass("arrow-down");
			$(".op-footer-link .op-footer-wrap .footer-item #b31").addClass("recoverimage");
			mark=0;
		}
	})
	
	
	
	
})


//$(function(){
//	$(".showclik").click(function(){
//		alert("111");
//		$(".op-footer-link .op-footer-wrap .footer-item #b1").removeClass("expand");
//		$(".op-footer-link .op-footer-wrap .footer-item #showimage1").removeClass("arrow-up");
//		$(".op-footer-link .op-footer-wrap .footer-item #showimage1").removeClass("showclik");
//		$(".op-footer-link .op-footer-wrap .footer-item #showimage1").addClass("arrow-down");
//		$(".op-footer-link .op-footer-wrap .footer-item #b11").addClass("recoverimage");
//	});
//})

$(function(){
	$(".icon-bg").mouseover(function(){
		$("#showshop").addClass("showimage");
	})
	$(".icon-bg").mouseout(function(){
		$("#showshop").removeClass("showimage");
	})
})

$(function(){
	var mark=0;
	$("#op-btn-menu").click(function(){
		if(mark==0){
			$("#op-wrap").removeClass("recoverwrap");
			$("#op-nav-box").removeClass("recovernav");
			$("#op-wrap").removeClass("fold");
			$("#op-wrap").addClass("showwrap");
			$("#op-nav-box").addClass("shownav");
			$(".inner .op-top-search").addClass("show-animation");
			mark=1;
		}
		else{
			$("#op-wrap").removeClass("showwrap");
			$("#op-nav-box").removeClass("shownav");
			$("#op-wrap").addClass("recoverwrap");
			$("#op-nav-box").addClass("fold");
			$("#op-nav-box").addClass("recovernav");
			$(".inner .op-top-search").removeClass("show-animation");
			mark=0;
		}
		
	})
})

$(function(){
	//var status = jQuery("header").data('status');
	$("#sousuo").click(function(){
		$("header").data(status,search);
	})
})


$(function(){
	var mark=0;
	$("#c1").click(function(){
		if(mark==0){
			$("body").addClass("showbodynav");
			$("#c2").addClass("showmininav");
			$("#c2").addClass("show-animation");
			$("#c3").addClass("show");
			$("#c4").addClass("up");
			mark=1;
		}
		else{
			$("body").removeClass("showbodynav");
			$("body").addClass("recoverbodynav");
			$("#c2").removeClass("showmininav");
			$("#c2").addClass("recovermininav");
			$("#c2").removeClass("show-animation");
			$("#c3").removeClass("show");
			$("#c4").removeClass("up");
			mark=0;
		}
	})
})
