// JavaScript Document
//function 即時関数
//jauery = $
$(function(){
	// #で始まるリンクをクリックしたら実行されます
	$('a[href^="#"]').click(function() {
	// スクロールの速度
	var speed = 400; // ミリ秒で記述
	var href　= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - 230;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
	});
});