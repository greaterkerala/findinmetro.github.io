'use strict';

  <!-- App Script -->
    var myapp = angular.module('myapp', ["ui.router", "myapp.controllers", "myapp.filters"])
    myapp.config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: "/",
            views: {
                "viewA": {
                    templateUrl: "partials/home.html",
                    controller: "Home"
                },
                "viewB": {
                    templateUrl: "partials/footer.html"
                }
            }
        })
        .state('about', {
            url: "/about",
            views: {
                "viewA": {
                    templateUrl: "partials/about.html"
                },
                "viewB": {
                    templateUrl: "partials/footer.html"
                }
            }
        })
    })
