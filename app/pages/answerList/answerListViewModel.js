define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function answerListViewModel(params) {
        var self = this;
    
        self.answers = params.answers;
        
        self.init = function() {
        }

        self.dispose = function() {
            console.log('disposed');
        }

        return self;
    }
});