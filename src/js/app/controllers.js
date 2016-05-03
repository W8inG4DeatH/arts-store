(function(){

    var app = angular.module('myControllers', ['myDirectives', 'myServices']);

    app.controller('myController', ['$scope', '$http', '$window', 'mainService', function($scope, $http, $window, mainService){

        $scope.galleryData = mainService.getGalleryData();
        $scope.colorsForSlider = ['#1e3557','#37342d','#83293b'];
        $scope.sliderCategoriesColors = [];
        $scope.sliderCategoriesImageNumbers = [];
        $scope.randomSlider = function() {
            for (var i=0; i<$scope.galleryData.length; i++) {
                $scope.sliderCategoriesColors[i] = $scope.colorsForSlider[mainService.GetRandomInt(0,$scope.colorsForSlider.length-1)];
                $scope.sliderCategoriesImageNumbers[i] = mainService.GetRandomInt(1,$scope.galleryData[i].arts.length);
            }
        };
        $scope.randomSlider();

        angular.element(document).ready(function() {
            mainService.StartTooltip();
            mainService.StartSlider("w8-slider1",$scope.galleryData.length,4000,1000);
            // START
            $scope.showWebsiteData = {
                a1 : {mode: "AnimateWord", selector: "#logo > h1", word: "A R T S", stepTime: 75, delayTime: 0},
                a2 : {mode: "AnimateWord", selector: "#logo > p", word: "S T O R E", stepTime: 33, delayTime: 0},
                a3 : {mode: "FadeIn", selector: "#menu-center", stepTime: 500, delayTime: 0},
                a4 : {mode: "FadeIn", selector: "#menu-right", stepTime: 500, delayTime: 0},
            };
            //mainService.ShowWebsite($scope.showWebsiteData);
        }); 

        $scope.SlideUpAndDownByClass = function(elementClass) {
            $(elementClass).slideUp($scope.slideTime).slideDown($scope.slideTime);
        };
        $scope.SlideUpAndDownChildByClass = function(e,elementChildClass) {
            $(e.currentTarget).find(elementChildClass).slideUp($scope.slideTime).slideDown($scope.slideTime);
        };
   
        $('.underline-link').mouseenter(function() {
            $(this).find('underline').animate({width: '100%'}, $scope.slideTime);
        });
        $('.underline-link').mouseleave(function() {
            $(this).find('underline').animate({width: '0%'}, $scope.slideTime);
        });

    }]);

})();