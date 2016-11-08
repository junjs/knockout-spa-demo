define(["knockout", 'pages/settings/settingsViewModel', "text!./settings.html"], function (ko, settingsViewModel, settingsTemplate) {

    return { viewModel: settingsViewModel, template: settingsTemplate, path: '/' };
});