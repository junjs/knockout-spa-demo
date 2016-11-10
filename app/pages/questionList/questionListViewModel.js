define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function questionListViewModel(params) {
        var self = this;

        self.questions = params.questions;
        
        self.init = function() {
            
        }

        self.dispose = function() {
            console.log('disposed');
        }

        return self;
    }
});