(function(){

    var app = angular.module('myServices', []);

    app.service('mainService', function () {
        var mainService = {};
        
        mainService.StartTooltip = function() {
            $('[data-toggle="tooltip"]').tooltip({
                placement: 'right'
            });
        };        

        mainService.AnimateWord = function(myTag,myWord,myDelay,myStep) {
            var myChars = myWord.split("");
            var i = 0;
            var myTimer;
            var myTimeout = setTimeout(function() {
                myTimer = setInterval(timerTick, myStep);
            }, myDelay);
            function timerTick() {
                var mySpan = document.createElement("span");
                var myText = document.createTextNode(myChars[i]);
                mySpan.appendChild(myText);
                $(myTag).append(mySpan);
                mySpan.classList.add('animation-1');
                i++;
                if (i >= myChars.length) {
                    clearInterval(myTimer);
                }
            }
        };

        return mainService;
    });

    app.factory('LoadJsonData', ['$http', '$log', function($http, $log){
        var cache = {};
        var urls = {
            'categories': 'json/categories.json',
        };

        return function (type, callback){
            if(angular.isUndefined(cache[type])){
                callback = callback||function(){};

                var url = urls[type];

                $http.get(urls[type])
                    .success(function (data, status, headers, config) {
                        cache[type] = data;
                        callback(data);
                    })
                    .error(function (data, status, headers, config) {

                        $log.error('Wystąpił błąd podczas żądania "'+url+'"!');

                    });
            } else {
                callback(data);
            }

        };
    }]);

})();