(function($) {
    $(document).ready(function() {
        $('.keyboad-col').click(function(event) {
            var key = $(this).data("key");
            console.log(key);
        });

    });
})(window.jQuery);
