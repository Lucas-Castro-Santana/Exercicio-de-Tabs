$(document).ready(function() {
    $('.content').hide();
 
    $('.tab-btn').click(function() {
        var tab = $(this);
 
        $('.tab-btn').removeClass('active');
        tab.addClass('active');
 
        $('.content').hide();
 
        var contentId = tab.attr('content-id');
        $('#' + contentId).show();
    });
 
    var currentActiveTab = $('.tab-btn.active');
    currentActiveTab.click();
});