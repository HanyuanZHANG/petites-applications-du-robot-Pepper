var app = angular.module('webapp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngIdle']);

app.run(['$rootScope', '$location', function($rootScope, $location) {
    FastClick.attach(document.body);

    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        var e = new CustomEvent("app:load", { "detail": $location.path() });
        document.dispatchEvent(e);
    });
}]);

app.config(['$routeProvider', 'IdleProvider', 'KeepaliveProvider', 'TitleProvider', function ($routeProvider, IdleProvider, KeepaliveProvider, TitleProvider) {

    IdleProvider.idle(5);
    IdleProvider.timeout(20);
    KeepaliveProvider.interval(2);
    TitleProvider.enabled(false);

    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            controllerAs: 'home',
            templateUrl: 'partials/home.html'
        })
        .when('/question', {
            controller: 'QuestionCtrl',
            controllerAs: 'question',
            templateUrl: 'partials/question.html'
        })
        .when('/results', {
            controller: 'ResultsCtrl',
            controllerAs: 'result',
            templateUrl: 'partials/result.html'
        })
        .when('/compare', {
            controller: 'CompareCtrl',
            controllerAs: 'compare',
            templateUrl: 'partials/compare.html'
        })
        .when('/product/:index', {
            controller: 'ProductCtrl',
            controllerAs: 'product',
            templateUrl: 'partials/product.html'
        })
        .when('/thanks', {
            controller: 'ThanksCtrl',
            controllerAs: 'thanks',
            templateUrl: 'partials/thanks.html'
        })
        .otherwise({ redirectTo: '/' });

}]);