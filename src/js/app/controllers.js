(function(){

    var app = angular.module('myControllers', ['myDirectives', 'myServices']);

    app.controller('myController', ['$scope', '$http', '$window', 'mainService', function($scope, $http, $window, mainService){

        $scope.slideTime = 500;
        $scope.categories = ['animals','cars','movie','nature'];

        angular.element(document).ready(function() {
            mainService.StartTooltip();
            //$('#menu-center-bar').outerWidth($('#slider').outerWidth());
            // START
            $('#site-loader').hide();
            // logo
            mainService.AnimateWord($('#logo > h1'),"A R T S",0,75);
            mainService.AnimateWord($('#logo > p'),"S T O R E",600,33);
            // menu-center // 1000
            var MenuCenterShow = setTimeout(function() {
                $('#menu-center').animate({opacity: '1'}, $scope.slideTime);
            }, 1000);
            // menu-right // 1500
            var MenuRightShow = setTimeout(function() {
                $('#menu-right').animate({opacity: '1'}, $scope.slideTime);
            }, 1000);
            // 2000
        });

        $scope.SlideUpAndDownByClass = function(elementClass) {
            $(elementClass).slideUp($scope.slideTime).slideDown($scope.slideTime);
        };

        $scope.SlideUpAndDownChildByClass = function(e,elementChildClass) {
            $(e.currentTarget).find(elementChildClass).slideUp($scope.slideTime).slideDown($scope.slideTime);
        };
   
        $('.menu-center-link').mouseenter(function() {
            $(this).find('underline').animate({width: '100%'}, $scope.slideTime);
        });
        $('.menu-center-link').mouseleave(function() {
            $(this).find('underline').animate({width: '0%'}, $scope.slideTime);
        });

    }]);

})();