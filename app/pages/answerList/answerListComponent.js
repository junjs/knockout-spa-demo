define(["knockout", 'shared/viewModelFactory', 'pages/answerList/answerListViewModel', "text!./answerList.html"], function (ko, viewModelFactory, answerViewModel, answerTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(answerViewModel) }, template: answerTemplate };
});