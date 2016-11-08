define(["knockout", "grapnel", "api"], function (ko, Grapnel, api) {
    return function KnockoutController(config) {
        var defaults = {transitionDelayMs: 0, views: []};
        var settings = ko.utils.extend(defaults, config || {});
        var router = new Grapnel();
        var self = this;
        
        api.setLoader(self.isTransitioning);
        
        self.beforeLoadView = function() {    
            api.setStartable();
            self.isTransitioning(true);            
        }

        self.loadView = function (view, routeParams) {
            self.beforeLoadView();
            console.log('loading view');
            self.viewParams(routeParams);
                
            self.viewName(view.name);
            console.log('finish loading view');
            //self.afterLoadView();
        }

        self.afterLoadView = function() {
            api.launchStack();
        }
        // props
        self.viewName = ko.observable(settings.defaultView.name);
        self.viewParams = ko.observable(settings.defaultView.params || {});
        self.isTransitioning = ko.observable(false);
        // initialization
        ko.utils.arrayForEach(settings.views, function (vc) {
            if (vc.name && vc.componentConfig) {
                ko.components.register(vc.name, vc.componentConfig);
                if (vc.routes && vc.routes.length) {
                    ko.utils.arrayForEach(vc.routes, function (route) {
                        router.get(route, function (req, ev) {
                            self.loadView(vc, req.params);
                        });
                    });
                }
                if (vc.name === "404") {
                    router.get("/*", function (req, ev) {
                        if (!ev.parent()) {
                            loadView(vc.name, req.params);
                        }
                    });
                }
            }
        });
    }
});