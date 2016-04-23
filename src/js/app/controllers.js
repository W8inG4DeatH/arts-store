(function(){

    var app = angular.module('myControllers', ['myDirectives', 'myServices']);

    app.controller('myController', ['$scope', '$http', '$window', 'LoadJsonData', 'mainService', function($scope, $http, $window, LoadJsonData, mainService){

      	$scope.slideTime = 500;

        angular.element(document).ready(function() {
        	mainService.StartTooltip();

        	var MenuCenterShow = setTimeout(function() {
	        	$('#menu-center').animate({opacity: '1'}, $scope.slideTime);
			}, 3000);
        });

        LoadJsonData('categories', function (data) {
            $scope.categories = data;
        });        
		
      	mainService.AnimateWord($('#logo > h1'),"W A L L P A P E R S",0,50);
      	mainService.AnimateWord($('#logo > p'),"M A G A Z I N E",1000,100);

      	$scope.menuCenterDropdownMenu = false;
      	$scope.menuCenterDropdownOnEnter = function() {
			$('#menu-center-arrow').slideUp($scope.slideTime).slideDown($scope.slideTime);
		};
      	$scope.menuCenterDropdownOnClick = function() {
			$scope.menuCenterDropdownMenu = !$scope.menuCenterDropdownMenu;
		};

		$('.menu-center-link').mouseenter(function() {
			$(this).find('underline').animate({width: '100%'}, $scope.slideTime);
		});
		$('.menu-center-link').mouseleave(function() {
			$(this).find('underline').animate({width: '0%'}, $scope.slideTime);
		});

    }]);

})();