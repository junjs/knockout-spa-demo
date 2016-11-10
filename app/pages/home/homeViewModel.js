define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('Dipping your feet into KnockoutJS');
        self.guests = ko.observableArray([]);
        
        self.init = function() {
            api.getTopics("hola").then(onGetList);
            api.getTopics("hola").then(onGetList);
        }

        self.dispose = function() {
            console.log('disposed');
        }

        function onGetList(result) {
            console.log('callback result' + result);
           
            result.forEach(function(question) {
                 self.guests.push({ guestName: question.id });
            }, this);
        }

        console.log('finish init homeViewModel');

        return self;
    }
});