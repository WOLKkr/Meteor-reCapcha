Package.describe({
    name: 'wolkkr:recaptcha',
    version: '0.0.2',
    summary: 'Implementation of Google reCAPTCHA V2 for Meteor',
    git: 'https://github.com/WOLKkr/Meteor-reCaptcha.git',
    documentation: 'README.md',
    license: "MIT"
});

Package.onUse(function(api) {
    api.use(['templating@1.0.9', 'handlebars@1.0.7', 'tracker@1.2.0'], 'client');
    api.use(['http@1.4.2'], 'server');
    api.addFiles(['server/server.js'], 'server');
    api.addFiles(['client/client.html', 'client/client.js'], 'client');
    api.export && api.export('reCAPTCHA', ['client', 'server']);
});

Package.onTest((api) => {
    api.use(['templating@1.0.9', 'handlebars@1.0.7', 'tracker@1.2.0'], 'client');
    api.use(['http@1.4.2'], 'server');
    api.addFiles(['server/server.js'], 'server');
    api.addFiles(['client/client.html', 'client/client.js'], 'client');
    api.export && api.export('reCAPTCHA', ['client', 'server']);
});