reCAPTCHA = {
    settings: {
        theme: "light",
        type: "image",
        size: "normal",
        tabindex: 0
    },
    widgets: {},
    config: function(settings) {
        return _.extend(this.settings, settings);
    },
    reset: function (id) {
        if(id !== undefined) grecaptcha.reset(this.widgets[id]);
        else grecaptcha.reset();
    },
    getResponse: function (id) {
        if(id !== undefined) return grecaptcha.getResponse(this.widgets[id]);
        else return grecaptcha.getResponse();
    }
};

window.onloadcaptcha = function() {
    _.each(reCAPTCHA.widgets, function(element, index, list) {
        try{
            reCAPTCHA.widgets[index] = grecaptcha.render(index, reCAPTCHA.settings);
        } catch(error) {
            if(reCAPTCHA.widgets[index] == null) $("#" + index).empty();
        }
    });
};

Template.reCAPTCHA.onCreated(function () {
    var dataContext = Template.currentData();
    if(dataContext.id === undefined) throw new Meteor.Error("reCAPTCHA_WIDGET_ERROR", "Widget missing id.");
    reCAPTCHA.widgets[dataContext.id] = null;
});

Template.reCAPTCHA.onDestroyed(function () {
    var dataContext = Template.currentData();
    delete reCAPTCHA.widgets[dataContext.id];
});

Template.reCAPTCHA.onRendered(function() {
    var uri = "//www.google.com/recaptcha/api.js";

    if(reCAPTCHA.settings.onload !== undefined) uri += "?onload=" + reCAPTCHA.settings.onload;
    else uri += "?onload=onloadcaptcha";

    if(reCAPTCHA.settings.render !== undefined) uri += "&render=" + reCAPTCHA.settings.render;
    else uri += "&render=explicit";

    if(reCAPTCHA.settings.hl !== undefined) uri += "&hl=" + reCAPTCHA.settings.hl;

    $.ajax({
        url: uri,
        dataType: "script",
        cache: true
    });
});