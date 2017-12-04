angular.module('landing', [
    'ngRoute',
    'ngMessages'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "landing.tpl.html",
            controller: "LandingPageCtrl"
        })
    })

    .config(function ($routeProvider) {
        $routeProvider.when('/landing/:landingPageName', {
            templateUrl: "landing.tpl.html",
            controller: "LandingPageCtrl"
        })
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: "about.tpl.html"
        })
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/api', {
            templateUrl: "api.tpl.html"
        })
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/modify-your-citation', {
            templateUrl: "modify-your-citation.tpl.html"
        })
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/sources', {
            templateUrl: "sources.tpl.html",
            controller: "SourcesPageCtrl"
        })
    })




    .config(function ($routeProvider) {
        $routeProvider.when('/page-not-found', {
            templateUrl: "page-not-found.tpl.html",
            controller: "PageNotFoundCtrl"
        })
    })

    .controller("PageNotFoundCtrl", function($scope){
        console.log("PageNotFound controller is running!")

    })



    .controller("LandingPageCtrl", function ($scope,
                                             $location,
                                             $timeout) {

        $scope.main = {}

        console.log("i am the landing page ctrl")
        $scope.submit = function(){
            console.log("submit!", $scope.main.id)
            $location.path("/cite/" + $scope.main.id)
        }

    })


    .controller("SourcesPageCtrl", function ($scope,
                                             $location,
                                             $timeout) {

        $scope.main = {}

        console.log("i am the sources page ctrl")

        // copy/pasted from citePage controller...
        $scope.stepInfo = function(stepName){
            var stepInfo = $rootScope.steps[stepName]
            console.log("stepInfo!", stepName, stepInfo)

            $mdDialog.show({
                controller: DialogController,
                templateUrl: "step-info.tpl.html",
                clickOutsideToClose:true
            })

            function DialogController($scope, $mdDialog) {
                $scope.stepInfo = stepInfo

                $scope.hide = function() {
                    $mdDialog.hide();
                };

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }
        }
    })










