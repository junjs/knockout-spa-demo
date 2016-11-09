
	/*    var customLoader = {
			getConfig: function(name, callback) {
				callback({ 
				viewModel: { require: "pages/" + name + "/" +  name + "ViewModel" },
					template: { require: "text!pages/" + name + "/" + name + ".html" } 
				});
			}
		};
	ko.components.loaders.unshift({
		loadViewModel: function (name, config, callback) {
			//wrap the callback, so we can inject 
			var wrappedCallback = function (createViewModel) {
				console.log('in callback');
				// register binding before calling createViewModel
				var wrappedCreateViewModel = function (params) {

					return createViewModel.apply(this, arguments);
				};

				callback(wrappedCreateViewModel);
			}

			ko.components.defaultLoader.loadViewModel(name, config, wrappedCallback);
		}
	});*/

	//    ko.components.loaders.unshift(customLoader);

	//ko.components.register('home', homeComponent);


	//ko.applyBindings({ route: router.currentRoute });