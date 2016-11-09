define(['knockout', 'shared/api'], function (ko, api) {
    var listApi = {};

    listApi.getList = function (number) {
        return api.$http('http://private-9c373-kospa.apiary-mock.com/questions').get(number);
    }

    return listApi;
});