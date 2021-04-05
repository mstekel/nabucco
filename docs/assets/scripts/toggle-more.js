jQuery(document).ready(function () {
    if (jQuery(".more-info").find(".item-meta").length < 1) {
        jQuery(".toggle-more").css("display", "none");
    }
    jQuery(".toggle-more").click(function (event) {
        event.preventDefault();
        if (jQuery(".toggle-more").text() == "+ Show more") {
            jQuery(".toggle-more").text("- Show less");
        } else {
            jQuery(".toggle-more").text("+ Show more");
        }
        jQuery(".more-info").toggle(function () {
        });
    });
});
