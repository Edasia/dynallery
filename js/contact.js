$(document).ready( function() {
	
     var n1 = Math.round(Math.random() * 10 + 1);
    var n2 = Math.round(Math.random() * 10 + 1);
    $("#num1").val(n1);
    $("#num2").val(n2);
    $("#e").val(n1 + " + " + n2);
	
	$('#contact').validate({
		debug: true,
		//submitHandler: ajaxSubmit
                rules: {
                    message: {
                        required: true,
                        minlength: 10,
                        maxlength: 255
                    },
					captcha: {
						required: true,

					}
                },
                messages: {
                    firstName: "First name field required.",
                    lastName: "Last name field required.",
					phone: "Phone number required.",
					fax: "Fax number required.",
					mobile: "Mobile number required.",
					postcode: "Postcode number required.",
                    email: {
                        required: "Email address required.",
                        email: "Email address must be in the format name@domain.com."                        
                    },
                    message: {
                        required: "Message field required",
                        minlength: "Message must contain at least 10 characters.",
                        maxlength: "Message must not contain more than 255 characters."
                    },
					
                    
                }
                
	});
	
	$('#submit').click( function() {
		if (eval($("#e").val()) == $("#captcha").val()) {
			$('.required-noob').removeClass('required-show')
            if( $('#contact').valid()) {
			$.post("process.php", $("#contact").serialize(),function(result){if( response.error != 'true' ) {
				$('#loading, #contact, .message').fadeOut('slow');
				$('#response').html('<h3>Message sent successfully!</h3>').fadeIn('slow');
            }
			else {
					$('#loading').fadeOut('slow');
					$('#submit').attr('disabled', 'disabled');
					$('#response').html('<h3>There was a problem sending mail!</h3>').fadeIn('slow');
				}});
			$('#contact').fadeOut();
			}
			else {
			$('label.error').hide().fadeIn('slow');
			}
        } else {
            $('.required-noob').addClass('required-show')
        }
		
	});

});
