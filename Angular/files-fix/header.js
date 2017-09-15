app.controller('headerController', ['$scope', function($scope){
  $scope.logoutVisible = "none";
  $scope.state = false;
  let url = window.location.pathname.split("/");
  url = url[(url.length) - 1];
  url = url.split(".")[0];
  if(url == "login") {
    $scope.state = true;
  }
  console.log(url)
  $scope.showLogout = function() {
    $scope.logoutClick = !$scope.logoutClick;
    $scope.logoutClick === true ? $scope.logoutVisible = "block" : $scope.logoutVisible = "none";
  }
  $scope.optionsClick = function(event) {
    let anchors = document.getElementsByClassName("logout-anchor");
    for (var i =0;i<anchors.length;i++) {
      anchors[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}]);
