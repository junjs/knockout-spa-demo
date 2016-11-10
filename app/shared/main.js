require(['knockout', 'shared/ko-controller', 
		'pages/questionList/questionListComponent', 'pages/answerList/answerListComponent', 'pages/topicList/topicListComponent', 'pages/topic/topicComponent'], 
	function (ko, KnockoutController, 
		questionListComponent, answerListComponent, topicListComponent, topicComponent) {

	ko.components.register('questions', questionListComponent);
	ko.components.register('answers', answerListComponent);

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