

let showFooter = $('footer');

$('#icone-footer').click(function() {
    showFooter.addClass('footer-active');
});

$('#icone-close').click(function() {
    showFooter.removeClass('footer-active');
});