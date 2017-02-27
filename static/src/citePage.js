angular.module('citePage', [
    'ngRoute',
    'ngMessages'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/cite/:projectId*', {
            templateUrl: "cite-page.tpl.html",
            controller: "CitePageCtrl"
        })
    })






    .controller("CitePageCtrl", function ($scope, $routeParams, $http) {



        var url = "http://api.citeas.org/product/" + $routeParams.projectId
        $scope.apiUrl = url
        $scope.apiResp = "loading"

        $http.get(url).success(function(resp){
            console.log("response from api yay", resp)
            $scope.apiResp = resp
        }).error(function(resp){
            console.log("bad response from api", resp)
            $scope.apiResp = "error"
        })

        $scope.changeStyle = function(){
            alert("this feature coming later...")
            return false
        }
        $scope.export = function(){
            alert("this feature coming later...")
            return false
        }

    })










