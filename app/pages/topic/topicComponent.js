define(["knockout", 'shared/viewModelFactory', 'pages/topic/topicViewModel', "text!./topic.html"], function (ko, viewModelFactory, topicViewModel, topicTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(topicViewModel) }, template: topicTemplate };
});