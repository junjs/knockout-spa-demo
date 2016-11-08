define(['knockout', 'api'], function (ko, api) {
    var listApi = {};

    // Specific to repo, extend from api object
    listApi.getList = function (number) {
        var promise = api.$http('http://private-9c373-kospa.apiary-mock.com/questions').get(number);
        if (api.startStack) {
            api.stackPromise(promise);
        }
        return promise;
    }

    return listApi;
});