require(['knockout', 'shared/ko-controller', 
		'pages/questionList/questionListComponent', 'components/greeting', 'pages/topicList/topicListComponent', 'pages/topic/topicComponent'], 
	function (ko, KnockoutController, 
		questionListComponent, greetingComponent, topicListComponent, topicComponent) {

	ko.components.register('greeting', greetingComponent);
	ko.components.register('questionList', questionListComponent);

	var application = function () {
		this.controller = new KnockoutController({
			transitionDelayMs: 300,
			views: [{
				name: 'topics',
				componentConfig: topicListComponent,
				routes: ['']
			},{
				name: 'topic',
				componentConfig: topicComponent,
				routes: ['topic']
			}],
			defaultView: {
				name: 'topics',
				params: {}
			}
		});
	};

	ko.applyBindings(new application());
});