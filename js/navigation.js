$("#main-nav").mouseover(function(){
	var sub_btns = document.getElementsByClassName("sub-btn");
    var total =0; var pos = [];
    for(var x = 0; x<sub_btns.length; x++) {
        if(x < 2) {
          sub_btns[x].style.left = "-"+((x+1)*30)+"%";
          pos[x] = ((x+1)*20);
        } else {
           sub_btns[x].style.right = "-"+((x-1)*30)+"%";
           pos[x] = ((x-1)*280);
        }
        sub_btns[x].style.opacity = "1";
    }
    $("#main-nav").css("width","50%");
	$("#main-nav").mouseout(function(){
		$("#main-nav").css("width","60px");
		for(var x = 0;x<sub_btns.length;x++) {
		  $(sub_btns[x]).css("left","0");
		  $(sub_btns[x]).css("right","0");
		  $(sub_btns[x]).css("opacity","0");
		}
	});
});
