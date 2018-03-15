$(window).ready(function(){
	$('.delete').hide();
	$('.nav li').click(function(){
		var index = $(this).index();
		$('.content li').eq(index).show()
						.siblings().hide();
	})
})