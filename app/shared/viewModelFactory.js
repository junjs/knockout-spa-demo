define([], function () {
    return function viewModelFactory(viewModel) {
        return function koViewModelFactory(params, componentInfo) {
            var vm = new viewModel(params);
            vm.init();
            params.controller.afterLoadView();
            return vm;
        }
    }
});