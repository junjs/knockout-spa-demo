define(["knockout", 'repositories/listApi'], function (ko, listApi) {
    return function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('Dipping your feet into KnockoutJS');
        self.guests = ko.observableArray([]);
        
        self.init = function() {
            listApi.getList("hola").then(onGetList);
            listApi.getList("hola").then(onGetList);
        }

        function onGetList(result) {
            console.log('callback result' + result);
           
            result.forEach(function(question) {
                 self.guests.push({ guestName: question.question });
            }, this);
        }

        self.init();

        return self;
    }
});