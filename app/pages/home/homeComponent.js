define(["knockout", 'shared/viewModelFactory', 'pages/home/homeViewModel', "text!./home.html"], function (ko, viewModelFactory, homeViewModel, homeTemplate) {
    return { viewModel: { createViewModel: viewModelFactory(homeViewModel) }, template: homeTemplate };
});