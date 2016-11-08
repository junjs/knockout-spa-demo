define(["knockout", 'pages/home/homeViewModel', "text!./home.html"], function (ko, homeViewModel, homeTemplate) {
    return { viewModel: homeViewModel, template: homeTemplate, path: '/' };
});