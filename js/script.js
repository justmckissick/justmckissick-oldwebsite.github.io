$('div.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('div.owl-carouselFade').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

jQuery('.skillbar-inner').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
