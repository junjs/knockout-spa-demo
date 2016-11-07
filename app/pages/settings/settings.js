define(["knockout", "text!./settings.html"], function (ko, settingsTemplate) {
    function settingsViewModel(params) {
        var self = this;

        return self;
    }
    return { viewModel: settingsViewModel, template: settingsTemplate, path: '/' };
});