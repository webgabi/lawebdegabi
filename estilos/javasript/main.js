$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active-depor');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active-depor');
		$(this).addClass('active-depor');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});

//first primero y latest es último