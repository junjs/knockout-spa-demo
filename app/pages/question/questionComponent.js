define(["knockout", 'shared/viewModelFactory', 'pages/question/questionViewModel', "text!./question.html"], function (ko, viewModelFactory, questionViewModel, questionTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(questionViewModel) }, template: questionTemplate };
});