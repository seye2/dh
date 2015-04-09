/***********************************************************************************
*
* https://github.com/jquery-boilerplate/jquery-patterns : Best options pattern
*
************************************************************************************/

/* [URL] */
;(function(defaults, $, window, document, undefined) {

	'use strict';

	$.extend({
		// Function to change the default properties of the plugin
		// Usage:
		// jQuery.pluginSetup({property:'Custom value'});
		pluginSetup : function(options) {

			return $.extend(defaults, options);
		}
	}).fn.extend({
		// public variable
		$w:null,
		$d:null,
		wdHeight:0,
		maxHeight:0,
		timer:null,
		// Usage:
		// jQuery(selector).pluginName({property:'value'});
		mTicker : function(options) {
			
			//extend options{}
			options = $.extend({}, defaults, options);
			
			this.$w=$(window);
			this.$d=$(document);
			
			// private virable
			var _this=this;
			
			// event support jQuery 1.6.4
			$('.allmenu_arrow_down').live('mouseenter',function(e) {
				_this.startSlide(this,'down',options);
				//_this.startSlide(event,move direction,options);
			});
			
			$('.allmenu_arrow_up').live('mouseenter',function(e) {
				_this.startSlide(this,'up',options);
				//_this.startSlide(event,move direction,options);
			});

			$('.allmenu_arrow_down').mouseleave(function(e) {
				_this.stopSlide(e);
			});

			$('.allmenu_arrow_up').mouseleave(function(e) {
				_this.stopSlide(e);
			});
			
			this.panelHeightResize();

			$(window).resize(function() {
				// call panelHeight
				_this.panelHeightResize();
			});
			
			//call callback
			/*
				if(typeof(options.callback) === 'function') {
					options.callback.call(this);
				}
			*/
			
			return this;
			/*
			return $(this).each(function() {
					
				// Plugin logic
				// Calling the function:
				// jQuery(selector).pluginName(options);
			});
			*/
		},
		panelHeightResize : function() {
			
			//set $slide height
			this.wdHeight=parseInt(this.$w.height())-parseInt($(this).css('margin-top'))-(parseInt($(this).find('.menu_scroll_btn').css('height'))+(parseInt($(this).find('.menu_scroll_btn').css('height'))/2));
			$(this).height(this.wdHeight);
			
			//compare _currentY to maxHeight at slide down
			this.maxHeight=(this.wdHeight-$(this).find('.slides').outerHeight())-55;
		},
		startSlide : function(that,dir,options) {
			var _this=this,
				_$that=$(that),
				_currentY=0,
				_$slides=$(this).find('.slides'),
				_down='allmenu_arrow_down',
				_up='allmenu_arrow_up';
			
			//initializing timer
			clearInterval(this.timer);

			//call setInterval
			this.timer=setInterval(function() {
				//start slideAnimate
				if(dir=='down') {
					_currentY=_this.slideAnimate('down',_$slides,options);
				} else {
					_currentY=_this.slideAnimate('top',_$slides,options);
				}
			},options.intervalTime);
		},
		slideAnimate : function(dir,_$slides,options) {
			var _currentY=0;
			
			//if browser support transition get _$slides margin-top else currentY
			if(!$.support.transition) {
				_currentY=parseInt(_$slides.css('margin-top'));
			} else {
				_currentY=parseInt(_$slides.css('y'));
			}
			
			//move _$slide currentY
			if(dir=='down') {
				if(this.maxHeight<_currentY) {
					if(!$.support.transition) {
						_$slides.stop(true,true).animate({
							'margin-top':parseInt(_$slides.css('margin-top'))-1
						},options.aniTime,function() {
						});
					} else {
						_$slides.css({'y':parseInt(_$slides.css('y'))-1});
					}
				} else {
					clearInterval(this.timer);
				}
			} else {
				if(0>_currentY) {
					if(!$.support.transition) {
						_$slides.stop(true,true).animate({
							'margin-top':parseInt(_$slides.css('margin-top'))+1
						},options.aniTime,function() {
						});
					} else {
						_$slides.css({'y':parseInt(_$slides.css('y'))+1});
					}
				} else {
					clearInterval(this.timer);
				}
			}

			return _currentY;
		},
		stopSlide : function(e) {
			//stop Slide
			if($(this).find('.slides').is(':animated')) {
				$(this).find('.slides').stop(true,true);
			}
			clearInterval(this.timer);
			e.stopPropagation();
		}
	});
})({
	//set defaults value
	aniTIme:5,
	intervalTime:8,
	callback:function(){}
}, jQuery, window, document);
