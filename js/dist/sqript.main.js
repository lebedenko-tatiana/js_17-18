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
;$(function () {
  var $inputs = $('.ftooltip .ftooltip__txt');

  $inputs.on('focusin', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.show();
  })
        .on('focusout', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.hide();
  })
        .on('mousemove', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.show();
  })
        .on('mouseleave', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.hide();
  });
});

