
// Revealing Module Pattern
var Repeater = (function Repeater() {
        // Initialize 'count' for repeatMore function
        var count = 1;
       
                // repeats a string passed a string and a number
                var repeatString = function repeatString(str, n) {
                	var outputString = '';

                        for (var i=0; i<n; i++) {
        		      outputString += String(str);
                        }

        	    return outputString;
                };

                // repeats a function passed a function and a number
                var repeatFunction = function repeatFunction(func, n) {

                        for (var i=0; i<n; i++) {
                            func();
                        }
                };

                // repeats a string the number of times the function is called
                var repeatMore = function repeatMore(str) {
                        var moreString = '';

                        for (var i=0; i<count; i++) {
                            moreString += String(str);
                        }

                count ++;
                return moreString;
                };

                // calls repeatFunction twice
                var repeatFunctionTwice = function repeatFunctionTwice() {

                        for (var i=0; i<2; i++) {
                            repeatFunction(function() { console.log('from repeatFunctionTwice') }, 1);
                        }
                };

        
        return {
                repeatString: repeatString,
                repeatFunction: repeatFunction,
                repeatMore: repeatMore,
                repeatFunctionTwice: repeatFunctionTwice
        };

})();



$(function() {
        
        $('#repeated-string').text( Repeater.repeatString('chimps', 4) );

        Repeater.repeatFunction(function() { console.log('hi'); }, 3);

        $('#more-string').text( Repeater.repeatMore('bird') );
        $('#more-string2').text( Repeater.repeatMore('eagle') );
        $('#more-string3').text( Repeater.repeatMore('cats') );

        Repeater.repeatFunctionTwice();

});

