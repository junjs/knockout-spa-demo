define(["knockout", 'repositories/questionsApi'], function (ko, api) {
    return function topicListViewModel(params) {
        var self = this;

        self.topics = ko.observableArray([]);
        
        self.init = function() {
            api.getTopics("sdfas").then(onGetTopics);
        }

        self.dispose = function() {
            console.log('disposed');
        }

        function onGetTopics(result) {           
            result.forEach(function(topic) {
                 self.topics.push({
                    "id": topic.id,
                    "description": topic.description,
                    "creator": topic.creator,
                    "date": topic.date,
                    "status": topic.status
                });
            }, this);
        }

        return self;
    }
});