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


})();