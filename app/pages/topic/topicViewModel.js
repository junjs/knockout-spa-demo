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
                "id": ko.observable(topic.id),
                "description": ko.observable(topic.description),
                "creator": ko.observable(topic.creator),
                "date": ko.observable(topic.date),
                "status": ko.observable(topic.status)
            });
           
            topic.questions.forEach(function(question) {
                 self.questions.push({
                    "id": ko.observable(question.id),
                    "description": ko.observable(question.description),
                    "creator": ko.observable(question.creator),
                    "date": ko.observable(question.date),
                    "status": ko.observable(question.status)
                });
            }, this);
        }

        console.log('finish init homeViewModel');

        return self;
    }
});