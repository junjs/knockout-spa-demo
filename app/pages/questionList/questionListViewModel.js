define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function questionListViewModel(params) {
        var self = this;

        self.questions = params.questions;
      
        self.init = function() {
        self.selectedQuestion = params.questions()[0];
        
        self.dispose = function() {
            console.log('disposed');
        }

        return self;
    }
});