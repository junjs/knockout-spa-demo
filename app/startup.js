require(['knockout', 'ko-controller', 'pages/home/home', 'components/greeting', 'pages/settings/settings'], function (ko, KnockoutController, homeComponent, greetingComponent, settingsComponent) {
    

    //ko.components.register('home', homeComponent);
    ko.components.register('greeter', greetingComponent);

    //ko.applyBindings({ route: router.currentRoute });

    var MyApp = function() {
        this.controller = new KnockoutController({
            transitionDelayMs: 300,
            views: [{
                name: "home",
                componentConfig: homeComponent,
                routes: [""]
            },{
                name: "settings",
                componentConfig: settingsComponent,
                routes: ["settings"]
            }],
            defaultView: {
                name: "home",
                params: {}
            }
        });
    };

    var app = new MyApp();
    ko.applyBindings(app);
});