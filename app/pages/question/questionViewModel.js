define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function questionViewModel(params) {
        var self = this;
        self.topic = ko.observable();
        self.questions = ko.observableArray([]);
        
        self.init = function() {
            questionsApi.getList("hola").then(onGetList);
            questionsApi.getList("hola").then(onGetList);
        }

        self.dispose = function() {
            console.log('disposed');
        }

        function onGetList(result) {
            console.log('callback result' + result);
           
            result.forEach(function(question) {
                 self.guests.push({ guestName: question.question });
            }, this);
        }

        console.log('finish init homeViewModel');

        return self;
    }
});