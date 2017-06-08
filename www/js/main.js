(function($) {
    $(document).ready(function() {
        console.log("ready");

        $('.keyboad-col').click(function(event) {
            console.log("keyboad-col");
            var key = $(this).data("key");
            console.log(key);
        });

    });
})(window.jQuery);
