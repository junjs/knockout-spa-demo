define(["knockout", 'shared/viewModelFactory', 'pages/answerList/answerListViewModel', "text!./answerList.html"], function (ko, viewModelFactory, answerListViewModel, answerListTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(answerListViewModel) }, template: answerListTemplate };
});