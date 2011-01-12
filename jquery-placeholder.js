(function($){
	$.fn.placeholder = ('placeholder' in document.createElement('input')) ?
		
		function(){
			return this.each(function(){
				var label = $(this).html();
				$('#'+$(this).attr('for')).attr('placeholder', $(this).html());
			}).hide();
		}:
		
		function(){
			return this.each(function(){
				var label = $(this),
					input = $('#'+label.attr('for')),
					hide_label = function(){
						label.css('text-indent','-10000px');
					},show_label = function(){
						this.value || label.css('text-indent','0px');
					};
				label.css({
					'position':'absolute',
					'display':'inline',
					'top':'3px',
					'left':'5px',
					'z-index':'1'
				});
				input.parent().css('position','relative').end()
					.focus(hide_label).blur(show_label).each(hide_label).each(show_label);
			});
		};
})(jQuery);
