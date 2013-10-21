var Repeater = (function Repeater() {
        var count = 1;
        return {
       
                // repeats a string passed a string and a number
                repeatString: function repeatString(str, n) {
                        var outputString = '';

                        for (var i=0; i<n; i++) {
                              outputString += String(str);
                        }

                    return outputString;
                },

                // repeats a function passed a function and a number
                repeatFunction: function repeatFunction(func, n) {

                        for (var i=0; i<n; i++) {
                                func();
                        }
                },

                // repeats a string the number of times the function is called
                repeatMore: function repeatMore(str) {
                        var moreString = '';

                        for (var i=0; i<count; i++) {
                              moreString += String(str);
                        }

                count ++;
                return moreString;
                },
        };
})();