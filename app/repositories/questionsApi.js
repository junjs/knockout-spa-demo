define(['knockout', 'shared/api'], function (ko, api) {
    var questionsApi = {};

    questionsApi.getTopics = function (number) {
        return api.$http('http://private-9c373-kospa.apiary-mock.com/topics').get(number);
    }

    questionsApi.getTopic = function (number) {
        return api.$http('http://private-9c373-kospa.apiary-mock.com/topic').get(number);
    }

    return questionsApi;
});