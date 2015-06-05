function update_bg_size() {
    $('.background').height(
        $('.jumbotron').outerHeight()
    );
}

$(window).resize(update_bg_size)
$(window).load(update_bg_size)
