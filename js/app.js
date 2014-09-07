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
        .state('localnews', {
            url: "/localnews",
            views: {
                "viewA": {
                    templateUrl: "partials/localnews.html",
                    controller: "LocalNews"
                },
                "viewB": {
                    templateUrl: "partials/footer.html"
                }
            }
        })
        .state('newspapers', {
            url: "/newspapers",
            views: {
                "viewA": {
                    templateUrl: "partials/newspapers.html",
                    controller: "newspaper"
                },
                "viewB": {
                    templateUrl: "partials/footer.html"
                }
            }
        })
        .state('taste', {
            url: "/taste",
            views: {
                "viewA": {
                    templateUrl: "partials/taste.html",
                    controller: "LocalNews"
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
