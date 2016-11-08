define(['knockout', 'axios'], function (ko, axios) {
    var api = {};

    api.loader = null;
    api.startStack = false;
    api.callStack = [];

    function $http(url) {
        var core = {
            ajax: function (method, url, args) {
                var promise = new Promise(function (resolve, reject) {
                    // Instantiates the XMLHttpRequest
                    var client = new XMLHttpRequest();
                    var uri = url;

                    if (args && (method === 'POST' || method === 'PUT')) {
                        uri += '?';
                        var argcount = 0;
                        for (var key in args) {
                            if (args.hasOwnProperty(key)) {
                                if (argcount++) {
                                    uri += '&';
                                }
                                uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                            }
                        }
                    }

                    client.open(method, uri);
                    client.send();

                    client.onload = function () {
                        if (this.status >= 200 && this.status < 300) {
                            // Performs the function "resolve" when this.status is equal to 2xx
                            resolve(JSON.parse(this.response));
                        } else {
                            // Performs the function "reject" when this.status is different than 2xx
                            reject(this.statusText);
                        }
                    };
                    client.onerror = function () {
                        reject(this.statusText);
                    };
                });

                // Return the promise
                return promise;
            }
        };

        return {
            'get': function (args) {
                return core.ajax('GET', url, args);
            }
        };
    };

    api.$http = $http;

    api.setLoader = function(loader) {
        this.loader = loader;
    }

    api.setStartable = function() {
        this.startStack = false;
    }

    api.launchStack = function() {
        Promise.all(api.callStack).then(finishStack);
    }

    function finishStack() {
        if (api.loader) {
            api.loader(false);
        }
        api.startStack = false;
    };

    api.stackPromise = function(promise) {
        api.callStack.push(promise);        
    }

    return api;
});