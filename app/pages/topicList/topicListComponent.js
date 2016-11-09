define(["knockout", 'shared/viewModelFactory', 'pages/topicList/topicListViewModel', "text!./topicList.html"], function (ko, viewModelFactory, topicListViewModel, topicListTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(topicListViewModel) }, template: topicListTemplate };
});