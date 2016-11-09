define(["knockout", 'shared/viewModelFactory', 'pages/questionList/questionListViewModel', "text!./questionList.html"], function (ko, viewModelFactory, questionListViewModel, questionListTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(questionListViewModel) }, template: questionListTemplate };
});