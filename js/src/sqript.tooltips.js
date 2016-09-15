$(function () {
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

