
(function () {

    var RA = function (url) {
        return new RemoteAction(url);
    };
     

    var RemoteAction = function (url) {
   		this.url = url;
   		this.response = {};
        return this;
    };

    RA.fn = RemoteAction.prototype = {

        args: function () {
            this.args = Array.prototype.slice.call(arguments);

			return this;
        },
 
        onSuccess: function (onSuccess) {
            this.response.success = onSuccess;
			return this;
        },

        onError: function (onError) {
            this.response.error = onError;
			return this;
        },

        run: function () {
        	var remoteArgs = this.args;
        	var response = this.response;
        	remoteArgs.push(function(result, event) {
                response.success(result, event);
				if (result.success) {
					response.success(result, event);
				} else {
					response.error(result, event);
				}
			});

        	this.url.apply(null, remoteArgs);
        }
    };

    if(!window.RA) {
        window.RA = RA;
    }
})();