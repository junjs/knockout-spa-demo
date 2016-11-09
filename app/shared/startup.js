require(['knockout', 'shared/ko-controller', 'pages/home/homeComponent', 'components/greeting', 'pages/settings/settings'], 
function (ko, KnockoutController, homeComponent, greetingComponent, settingsComponent) {

	ko.components.register('greeter', greetingComponent);

	var application = function () {
		this.controller = new KnockoutController({
			transitionDelayMs: 300,
			views: [{
				name: "home",
				componentConfig: homeComponent,
				routes: [""]
			}, {
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

	ko.applyBindings(new application());
});