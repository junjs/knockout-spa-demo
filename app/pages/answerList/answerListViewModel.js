define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function questionViewModel(params) {
        var self = this;
        self.answers = ko.observableArray();
        

        return self;
    }
});