reCAPTCHA = {
    settings: {
        theme: "light",
        type: "image",
        size: "normal",
        tabindex: 0
    },

    config: function(settings) {
        return _.extend(this.settings, settings);
    }
};


window.onloadcaptcha = function() {
    $('.g-recaptcha').each(function(){
        $(this).empty();
        grecaptcha.render(this.id, reCAPTCHA.settings);
    })
};

Tracker.autorun(function() {
    $.getScript('https://www.google.com/recaptcha/api.js?onload=onloadcaptcha&render=explicit');
})