$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//햄버거 아이콘 클릭시
	$("header button").click(function(){
		$("#black").fadeIn("fast");
		$("nav").animate({left:0},"slow");
	});
	
	//메뉴 항목 클릭시
	$("nav a").click(function(){
		$("#black").fadeOut("fast");
		$("nav").animate({left:"-61px"},"slow");
	});
	
	//페이드 애니메이션 ((자동기능))
	setInterval(fade, 2000); //1.8초 마다 함수를 트리커한다.
	let i = 3; //output_ " (0:img),(1:img),(2:img),(3:img), length:4 "
	function fade (){
		$("figure img").eq(i).fadeOut(2000); //("이미지").3이미지.사라진다(2초간격);
		i--; // 3 을 1씩 뺀다.
		if(i == -1){ //i 가 -1 이 될 경우
			$("figure img").fadeIn(2000); //("이미지").나타난다 
			i = 3; //i 는 다시 3이된다
		}
	};
	
	
});////////////////end