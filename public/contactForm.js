$(function() {
    const form = $('#contact-me');
    const formMessages = $('#form-messages');

    $(form).submit(function(event) {
        event.preventDefault();
        const formData = $(form).serialize();
        console.log(formData);
        // $.ajax({
        //     type: 'POST',
        //     url: window.location.origin + $(form).attr('action'),
        //     data: formData
        // })
    })
});
