require(['knockout', 'router', 'pages/home/home', 'components/greeting'], function (ko, router, homeComponent, greetingComponent) {

    ko.components.register('home', homeComponent);
    ko.components.register('greeter', greetingComponent);

    ko.applyBindings({ route: router.currentRoute });
});