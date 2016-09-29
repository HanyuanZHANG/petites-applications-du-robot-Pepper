/*app.factory('MailFactory', ['$http', '$q', function ($http, $q) {

    return {

        sendMail: function(url, email, products) {

            var deferred = $q.defer();

            $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: "http://tiki.merch-orange.com/api/" + url,
                method: "POST",
                data: $.param({
                    email: email,
                    products: products
                })
            }).then(function(data) {
                deferred.resolve(data);
            }, function(error) {
                deferred.reject(error);
            });

            return deferred.promise;

        }

    };

}]);*/

app.factory("MailFactory", ["$http", "$q", function(e, t) {
    return {
        sendMail: function(r, n, a) {
            var o = t.defer();
            return e({
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "/api/" + r,
                method: "POST",
                data: $.param({
                    email: n,
                    products: a
                })
            }).then(function(e) {
                o.resolve(e);
            }, function(e) {
                o.reject(e);
            }), o.promise;
        }
    };
}]);