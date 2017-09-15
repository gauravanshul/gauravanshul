angular
    .module('goldenpi')
    .controller('HeaderController', ['$scope', '$rootScope', 'AuthService', '$state',
        function ($scope, $rootScope, AuthService, $state) {
            $scope.mainMenuVisible = "none";
            $scope.userIconClicked = false;
            $scope.state = false;
            let url = window.location.pathname.split("/");
            url = url[(url.length) - 1];
            url = url.split(".")[0];
            if(url == "login") {
                $scope.state = true;
            }
            $scope.optionsClick = function(event) {
            let anchors = document.getElementsByClassName("logout-anchor");
            for (var i =0;i<anchors.length;i++) {
                anchors[i].classList.remove('active');
            }
            event.target.classList.add('active');
            }
            $scope.showHideMainMenu = function () {
                $scope.userIconClicked = !$scope.userIconClicked;
                $scope.userIconClicked === true ? $scope.mainMenuVisible = "block" : $scope.mainMenuVisible = "none";
            }
        }]);