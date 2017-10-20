jQuery(function ($) {
    function changeColor(selector, colors, time) {
        /* Params:
         * selector: string,
         * colors: array of color strings,
         * every: integer (in mili-seconds)
         */
        var curCol = 0,
            timer = setInterval(function () {
                if (curCol === colors.length) curCol = 0;
                $(selector).css("background-color", colors[curCol]);
                curCol++;
            }, time);
    }
    $(window).load(function () {
        changeColor("body", ["#b71c1c","#880e4f", "#4a148c", "#311b92", "#1a237e","#0d47a1","#01579b","#006064","#004d40","#1b5e20","#33691e","#3e2723"], 2000);
    });
});
