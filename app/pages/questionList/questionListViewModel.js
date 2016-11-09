define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function questionListViewModel(params) {
        var self = this;

        self.questions = ko.observableArray([]);
        
        self.init = function() {
            self.questions(params.questions);
        }

        self.dispose = function() {
            console.log('disposed');
        }

        return self;
    }
});