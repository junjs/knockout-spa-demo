define(['knockout', 'axios'], function (ko, axios) {
    var api = {};
    api.loader = null;
    api.callStack = [];

    api.getList = function (number, onSuccess) {
        axios.get('http://private-9c373-kospa.apiary-mock.com/questions')
            .then(function (response) {
                onSuccess(response);
            });
    }

    api.setLoader = function (loader) {
        this.loader = loader;
    }

    api.launchSta

    function launchStack() {
        promiseArray.push(new Promise(function(resolve) {
            resolve("Hi " + 1);
        }));

        promiseArray.push(new Promise(function(resolve) {
            setTimeout(function() {
                resolve("Hi " + 2);
            }, 5000);
        }));
        return regions.reduce(function (previous, region) {
            return previous.then(function () {
                return saveWorker(region);
            });
        }, Promise.resolve());

        promise all and resolve loader

    }

    return api;
});