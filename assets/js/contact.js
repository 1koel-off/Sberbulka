(function($) {
	"use strict"

     // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#contact-form'); // contact form
        var submit = $('#cf-submit'); // submit button
        var alert = $('.alert'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'assets/php/contact.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Отправка....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.html('Отправить'); // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });

     $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });

})(jQuery);