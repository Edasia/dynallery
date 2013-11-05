
$(document).ready(function() {

    // Click event for any anchor tag that's href starts with #
    $('a[href^="#"]').click(function(event) {

        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.
        var offset = 10;

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({scrollTop:target}, 500);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });
	
	//UX Design for Gallery
	
	$('.show1').mouseenter(function()
	{$('.show1').css('opacity', 1).animate({ opacity: 0 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show1').mouseleave(function()
	{$('.show1').css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show1').click(function() {
		$('.show1').addClass("current-list");
		$('.show2, .show3').removeClass("current-list");	});
		
$('.show2').mouseenter(function()
	{$('.show2').css('opacity', 1).animate({ opacity: 0 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show2').mouseleave(function()
	{$('.show2').css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show2').click(function() {
		$('.show2').addClass("current-list");
		$('.show1, .show3').removeClass("current-list");	});
		$('.show3').mouseenter(function()
	{$('.show3').css('opacity', 1).animate({ opacity: 0 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show3').mouseleave(function()
	{$('.show3').css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' })
	});
	$('.show3').click(function() {
		$('.show3').addClass("current-list");
		$('.show2, .show1').removeClass("current-list");	});
// When the DOM is ready, initialize the scripts.
jQuery(function( $ ){
var content = $(".content-gallery") 
var x1 = $( "#x1" );
var x2 = $( "#x2" );
var x3 = $( "#x3" );


$( ".show1" ).click(
function( event ){
event.preventDefault();
if (x1.is( ":visible" )){
x1.fadeOut();
content.css('height', 500).animate({ height: 0 },
    			{ queue: false, duration: 'normal' });
} else {
content.css('height', 500); 
content.css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' });
x1.fadeIn();
x2.fadeOut();
x3.fadeOut();
}}
);

$( ".show2" ).click(
function( event ){
event.preventDefault();
if (x2.is( ":visible" )){
x2.fadeOut();
content.css('height', 500).animate({ height: 0 },
    			{ queue: false, duration: 'normal' });
} else {
content.css('height', 500); 
content.css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' });
x2.fadeIn();
x1.fadeOut();
x3.fadeOut();
}}
);

$( ".show3" ).click(
function( event ){
event.preventDefault();
if (x3.is( ":visible" )){
x3.fadeOut();
content.css('height', 300).animate({ height: 0 },
    			{ queue: false, duration: 'normal' });
} else {
content.css('height', 300); 
content.css('opacity', 0).animate({ opacity: 1 },
    			{ queue: false, duration: 'slow' });
x3.fadeIn();
x2.fadeOut();
x1.fadeOut();
}}
);

});


	
});