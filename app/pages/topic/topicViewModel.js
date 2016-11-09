define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function topicViewModel(params) {
        var self = this;

        self.topic = ko.observable();
        self.questions = ko.observableArray([]);
        
        self.init = function() {
            api.getTopic().then(onGetTopic);
        }

        self.dispose = function() {
            console.log('disposed');
        }

        function onGetTopic(result) {
            var topic = result;

            self.topic({
                "id": ko.observable("QUEST-000004"),
                "description": ko.observable("question 4"),
                "creator": ko.observable("Juanjo"),
                "date": ko.observable("20/03/2006"),
                "status": ko.observable("answered")
            });
           
            topic.questions.forEach(function(question) {
                 self.questions.push({
                    "id": "QUEST-000004",
                    "description": "question 4",
                    "creator": "Juanjo",
                    "date": "20/03/2006",
                    "status": "answered"
                });
            }, this);
        }

        console.log('finish init homeViewModel');

        return self;
    }
});