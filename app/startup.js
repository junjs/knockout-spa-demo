require(['knockout', 'ko-controller', 'pages/home/home', 'components/greeting', 'pages/settings/settings'], function (ko, KnockoutController, homeComponent, greetingComponent, settingsComponent) {
    ko.components.register('greeter', greetingComponent);

/*    var customLoader = {
        getConfig: function(name, callback) {
            callback({ 
                viewModel: { require:  "pages/" + name + "/" +  name + "ViewModel" },
                template: { require: "text!pages/" + name + "/" + name + ".html" } 
            });
        }
    };*/
    ko.components.loaders.unshift({
        loadViewModel: function(name, config, callback) {
            //wrap the callback, so we can inject 
            var wrappedCallback = function(createViewModel) {
                // register binding before calling createViewModel
                var wrappedCreateViewModel = function(params) {

                    return createViewModel.apply(this, arguments);
                };
                
                callback(wrappedCreateViewModel);
            }
            
            ko.components.defaultLoader.loadViewModel(name, config, wrappedCallback);
        }
    });

//    ko.components.loaders.unshift(customLoader);

    //ko.components.register('home', homeComponent);
    

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