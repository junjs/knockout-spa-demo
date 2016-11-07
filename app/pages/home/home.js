define(["knockout", 'api', "text!./home.html"], function (ko, api, homeTemplate) {
    function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('Dipping your feet into KnockoutJS');
        self.guests = ko.observableArray([]);
        
        self.init = function() {
            api.getList("hola", function(result) {
                console.log('callback result' + result);
                self.guests.push({ guestName: "Sumit" });
                self.guests.push({ guestName: "Optimus" });
                self.guests.push({ guestName: "Bumblebee" });
            });
        }

        self.init();

        return self;
    }
    return { viewModel: homeViewModel, template: homeTemplate, path: '/' };
});