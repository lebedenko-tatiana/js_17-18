$(function () {

  var $tabs = $('.tabs__navi');

  $tabs.on('click', '.tabs__li:not(.active)', function() {
    $(this).addClass('active')
           .siblings().removeClass('active');
    var $content = $(this).closest('.tabs').find('.tabs__content');
    $content.removeClass('active')
            .eq($(this).index()).addClass('active');
  });

});
