// Detect IE
var browserIE = false;
if (whichBrs() == 'Internet Explorer') browserIE = true;

// Detect Mobile
var browserMobile = false;
if ($('body').hasClass('layout-mobile')) browserMobile = true;

// Elements
var $wrapper = $('#wrapper'),
	$header = $('header'),
	$section = $('section'),
	$footer = $('footer'),
	$imgFit = $('.img-fit'),
	$toLoad = $('.to-load'),
	$toLoadNews = $('.to-load-news'),
	$blockProject = $('#block-project'),
	$blockProjectImg = $('#block-project .slider .img'),
	$blockArticle = $('#block-article'),
	$news = $('#section-news'),
	$newsArticles = $('.listing > div li', $news),
	$newsNav = $('#section-news .arrows > a'),
	$bgBlock = $('.background-block'),
	$bgBlockC = $('.background-block .centered'),
	$featured = $('.featured', $section),
	$letters = $('#letter-h, #letter-t, #letter-a'),
	$projectsListing = $('#section-projects .listing');

var animRunning = false,
	currentScroll = -1,
	scrollTimeout,
	lettersArray = [],
	borderW = 135,
	mobileIcons = [],
	timeoutAbout;

$('html,body').stop().scrollTop(0);
$(window).load(function() {
	/* ////////////////////////////////////////
	//
	// General
	//
	/////////////////////////////////////// */

	// Links
//	$wrapper.on('click', 'a', function() {
//		var $object = $(this);
//		var link = $object.attr('href');
//		if ($object.attr('target') != '_blank' && link != '' && link != '#' && link.indexOf('mailto') == -1) {
//			$('.loaded').addClass('unloaded');
//			setTimeout(function() {
//				$('#loading-mask').fadeIn(750, function() {
//					window.location.href = link;
//				});
//			}, 450);
//
//			return false;
//		}
//	});

	// Share Popups
	//	$('.btn-facebook-share, .btn-twitter-share, .btn-pinterest-share').on('click', function(){
	//		window.open($(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
	//
	//		return false;
	//	});

	// Header Mobile
	//	$('.btn-nav-mobile > div', $header).each(function(){
	//		var $object = $(this);
	//		var $img = $('img', $object);
	//		var ID = $object.attr('id');
	//		var size = $img.attr('data-frame-size').split('|');
	//		var frames = parseFloat($img.attr('data-frame-nb')) - 1;
	//		mobileIcons[ID] = new PNGPreloader($object,frames,size[0],size[1],20,false);
	//	});

	//	$('.btn-nav-mobile', $header).on('click', function(){
	//		$header.toggleClass('opened');
	//
	//		// Open
	//		if($header.hasClass('opened')){
	//			mobileIcons['mobile-nav-open'].reset();
	//			setTimeout(function(){
	//				mobileIcons['mobile-nav-open'].start(mobileIcons['mobile-nav-open'].frames);
	//			}, 450);
	//		}
	//		// Close
	//		else {
	//			mobileIcons['mobile-nav-close'].reset();
	//			setTimeout(function(){
	//				mobileIcons['mobile-nav-close'].start(mobileIcons['mobile-nav-close'].frames);
	//			}, 450);
	//		}
	//
	//		return false;
	//	});

	// Footer Letters
		$letters.each(function(){
			var $object = $(this);
			var $img = $('img', $object);
			var ID = $object.attr('id');
			var size = $img.attr('data-frame-size').split('|');
			var frames = parseFloat($img.attr('data-frame-nb')) - 1;
			lettersArray[ID] = new PNGPreloader($object,frames,size[0],size[1],25,false);
			lettersArray[ID].start(frames);
		});





	// Footer - Thumbnails
	//	$('footer > div .projects ul > li').on('mousemove', function(e){
	//		var $object = $(e.target).parents('li');
	//		var $mask = $('.mask', $object);
	//		var $img = $('img', $mask);
	//		var oWidth = $object.width();
	//		var posX = e.pageX - $object.offset().left;
	//		// Set Limits
	//		if(posX < 0) posX = 0;
	//		if(posX > oWidth) posX = oWidth;
	//		var pxHidden = $img.width() - $mask.width();
	//		var percPos = posX / oWidth;
	//		var fakePerc = percPos;
	//		if(percPos >= 0.5) fakePerc = percPos - 0.5;
	//		else fakePerc = - (0.5 - percPos);
	//
	//		$mask.css({'left': pxHidden * fakePerc});
	//		$img.css({'left': (- pxHidden * fakePerc) - pxHidden * 0.5});
	//	}).on('mouseenter', function(){
	//		$(this).parent().addClass('hovered');
	//	}).on('mouseleave', function(){
	//		$(this).parent().removeClass('hovered');
	//	});

	/* ////////////////////////////////////////
	//
	// Home
	//
	/////////////////////////////////////// */

	setTimeout(function() {
		var InfiniteSliderCSS = new InfiniteSlider($blockProject, 1250, 6000, 'css', 'easeOutQuad', false, true);

		// Next
		$('.panel-1, .panel-2, .panel-3', $blockProject).on('click', function() {
			$('.slider-arrows .next a', $blockProject).trigger('click');
		});
		$(".nextIcon").show();
		$(".nextIcon").css("padding-top",$(".bannBox").height()+59);
	}, 950);
//	setTimeout(function(){
//		
//		$(".nextIcon").css("padding-top",$(".bannBox").height()+59);
//	},1000)

//letter
//	setTimeout(function(){
		$('.gifImg').fadeIn();
//	},200)

	setTimeout(function(){
		$(".indHeadBox>div").addClass("headbg");
	},1000)


	/* ////////////////////////////////////////
	//
	// Projects
	//
	/////////////////////////////////////// */

	// SelectboxIt
	//	$('select option').eq(1).attr('selected', 'selected');
	//	$('select').selectBoxIt({
	//		showEffect: 'slideDown',
	//		showEffectSpeed: 400,
	//		hideEffect: 'slideUp',
	//		hideEffectSpeed: 400,
	//		showFirstOption: false,
	//		hideCurrent: true
	//	});

	// Trigger Filter
	//	$('#orderby a').on('click', function(){
	//		$(this).siblings().removeClass('active');
	//		$(this).addClass('active');
	//		getProjects();
	//
	//		return false;
	//	});

	// Trigger Filter
	//	$('#filterby select').on('change', function(){
	//		getProjects();
	//	});

	/* ////////////////////////////////////////
	//
	// News
	//
	/////////////////////////////////////// */

	// Arrows
	//	$newsNav.on('click', function(){
	//		var $object = $(this);
	//		var $current = $('.listing > div li.loaded', $news).last();
	//
	//		if($object.hasClass('arrow-previous')){
	//			if($current.index() <= 0) $target = $newsArticles.eq($newsArticles.length - 1);
	//			else $target = $current.prev();
	//		} else {
	//			if($current.index() >= $newsArticles.length - 1) $target = $newsArticles.eq(0);
	//			else $target = $current.next();
	//		}
	//
	//		clearTimeout(scrollTimeout);
	//		$('html,body').stop().animate({scrollTop: $target.position().top + borderW}, 750, 'easeInOutQuad');
	//
	//		return false;
	//	});

	/* ////////////////////////////////////////
	//
	// About
	//
	/////////////////////////////////////// */

	// Sliders
	//	$('#section-about .slider').each(function(){
	//		if($('li', this).length <= 1) $(this).addClass('disabled');
	//
	//		timeoutAbout = setTimeout(function(){
	//			changeSlider();
	//		}, 6950);
	//	});

//	$('#section-about .slider .btn-arrow').on('click', function() {
//		var $listing = $(this).siblings('ul');
//
//		if (!$listing.hasClass('animating')) {
//			clearTimeout(timeoutAbout);
//			timeoutAbout = setTimeout(function() {
//				changeSlider();
//			}, 6750);
//
//			$listing.addClass('animating');
//
//			var nbImages = $('> li', $listing).length - 1;
//			var current = $('> li.active', $listing).index();
//			var next = current + 1;
//
//			if (next > nbImages) next = 0;
//
//			$('> li', $listing).eq(current).removeClass('animated').addClass('leaving');
//			$('> li', $listing).eq(next).addClass('animated active');
//			setTimeout(function() {
//				$listing.removeClass('animating');
//				$('> li', $listing).eq(current).removeClass('active').removeClass('leaving');
//			}, 950);
//
//		}
//
//		return false;
//	});
//
//	$('#section-about .slider ul').on('click', function() {
//		if (!$(this).parent().hasClass('disabled')) {
//			$(this).siblings('.btn-arrow').trigger('click');
//		}
//	});
//
//	function changeSlider() {
//		$('#section-about .slider .btn-arrow').trigger('click');
//	}

	/* ////////////////////////////////////////
	//
	// Init
	//
	/////////////////////////////////////// */

	positionContent();
	$('#loading-mask').fadeOut(950);
	setTimeout(function() {
		$wrapper.addClass('loaded');
		positionContent();
	}, 450);
}).resize(function() {
	positionContent();
}).scroll(function() {
	scrollContent();
}).on('mousewheel', function(event) {
	if ($news.length == 1) $('html,body').stop();
});

/* ////////////////////////////////////////////////////////////////////////////
//
// Get Filtered Projects
//
/////////////////////////////////////////////////////////////////////////// */

function getProjects() {
	var orderby = $('#orderby a.active').attr('data-orderby');
	var filterby = $('#filterby .selectboxit-text').attr('data-val');

	$projectsListing.animate({
		opacity: 0
	}, 450, function() {
		$.ajax({
			cache: false,
			timeout: 8000,
			url: php_array.admin_ajax,
			type: "POST",
			dataType: "html",
			data: ({
				action: 'get_filtered_projects',
				order: orderby,
				filter: filterby
			}),
			success: function(data) {
				$projectsListing.html(data);
				$toLoad = $('.to-load');
				$projectsListing.css({
					'opacity': 1
				});
				positionContent();
			}
		});
	});

}

/* ////////////////////////////////////////////////////////////////////////////
//
// Position Content
//
/////////////////////////////////////////////////////////////////////////// */

function positionContent() {
	// Footer
	$wrapper.css({
		'padding-bottom': $footer.outerHeight()
	});

	// Borders
	if ($(window).width() <= 1440) borderW = 55;
	else borderW = 135;

	// Section Height
	$section.css({
		'min-height': $(window).height() - $header.height()
	});

	// Featured height
	$featured.height($(window).height() - $header.height());

	// Home
	if ($blockProject.length == 1) {
		var heightHeader = 250;
		if ($(window).width() <= 1440) heightHeader = 170;

		$blockProject.height($(window).height() - heightHeader-64);
		$blockProjectImg.width($blockProject.width()).height($blockProject.outerHeight());
	}

	// Project
	$('#section-project .header .img img').width($('#section-project .header .img').width());

	// News
	if ($news.length == 1 || $blockArticle.length == 1) {
		// News - Background Block
		$('> div', $bgBlockC).height($(window).height() - (parseFloat($bgBlockC.css('padding-top')) + parseFloat($bgBlockC.css('padding-bottom'))));

		if ($news.length == 1) {
			// News - Listing
			$newsArticles.each(function() {
				$(this).height($('.text', this).height() + $('.img', this).height() * 0.66);
				$news.css({
					'padding-bottom': $('.img', this).height() * 0.33
				});
			})

			// News - Arrows
			var arrowLeft = ($(window).width() - $('> div', $bgBlockC).width()) / 4;
			$('.arrows .arrow-previous', $news).css({
				'left': arrowLeft
			});
			$('.arrows .arrow-next', $news).css({
				'left': $(window).width() - arrowLeft
			});
		}
	}

	// News Article
	$('#section-news-article .section iframe').each(function() {
		var $object = $(this);
		var ratio = parseFloat($object.attr('width')) / parseFloat($object.attr('height'));

		$object.width($object.parent().width()).height($object.parent().width() / ratio);
	});

	// About
	$('#section-about .text > div > div').css({
		'min-height': ($('#section-about .text > div .slider').height())
	});
	$('#section-about .text > div .slider ul > li > div').width($('#section-about .text > div .slider').width());

	// Contact
	$('#section-contact .featured').css('min-height', $('#section-contact .featured .desc').outerHeight());

	// 1px Chrome
	$('.navigation').each(function() {
		var navWidth = $('#wrapper').width();
		if (navWidth % 2 != 0) navWidth += 1;

		$(this).width(navWidth);
	});

	// Image Fit
	$imgFit.each(function() {
		var bg_main = $(this);
		var wrapper = $(this).parent();
		var wrapperWidth = wrapper.outerWidth();
		var wrapperHeight = wrapper.outerHeight();

		var bgMainSizes = $(this).attr('data-size').split('|');
		var bgMainRatio = bgMainSizes[0] / bgMainSizes[1];
		var wrapperRatio = wrapperWidth / wrapperHeight;

		if (!bg_main.hasClass('invert')) {
			if (bgMainRatio > wrapperRatio) {
				bg_main
					.height(wrapperHeight)
					.width(wrapperHeight * bgMainRatio);
			} else {
				bg_main
					.width(wrapperWidth)
					.height(wrapperWidth / bgMainRatio);
			}
		} else {
			if (bgMainRatio < wrapperRatio) {
				bg_main
					.height(wrapperHeight)
					.width(wrapperHeight * bgMainRatio);
			} else {
				bg_main
					.width(wrapperWidth)
					.height(wrapperWidth / bgMainRatio);
			}
		}
	});

	// Header Mobile Height
	var height = window.innerHeight ? window.innerHeight : $(window).height();
	$('nav', $header).height(height - 60);
	$('nav > div', $header).height(height - 60);

	// Nav
	$('.navigation > a .hover > div', $section).each(function() {
		$(this).width($(this).parents('a').width());
	});

	scrollContent();
}

function scrollContent() {
	var totalScroll = $(document).height() - $(window).height();

	// Get Scroll Value
	newScroll = $(window).scrollTop();

	// Header
	$header.each(function() {
		var curScroll = newScroll;
		var toScroll = borderW;
		var hdScroll = 47;
		if ($(window).width() <= 1440) hdScroll = 36;
		var hdHeight = 104;
		if ($(window).width() <= 1440) hdHeight = 78;
		var ratio = hdScroll / toScroll;
		if (curScroll > toScroll) curScroll = toScroll;
		var spaceTop = 35;
		if ($(window).width() <= 1440) spaceTop = 10;
		var ratioTop = spaceTop / toScroll;

		$('.logo > span', $header).height(hdHeight - (curScroll * ratio));
		$('> div', $header).css({
			'margin-top': (spaceTop - (curScroll * ratioTop))
		});
	});

	// To Load
	$toLoad.each(function() {
		if ($wrapper.hasClass('loaded') && !$(this).hasClass('disabled')) {
			var object = $(this);
			if (newScroll + $(window).height() * 0.9 > $(this).offset().top) {
				object.removeClass('no-anim');
				object.addClass('loaded');
			} else if (newScroll + $(window).height() < $(this).offset().top + 1) {
				object.addClass('no-anim');
				object.removeClass('loaded');
			}
		}
	});

	// Home
//	$('#block-project .slider > ul > li .panel-1 > div .img').css({
//		'top': newScroll * 0.5
//	});
//	$('#block-project .slider > ul > li .panel-2 > div .img').css({
//		'top': newScroll * 0.5
//	});
//	$('#block-project .slider > ul > li .panel-3 > div .img').css({
//		'bottom': -newScroll * 0.5
//	});

	// News
	if ($news.length == 1) {
		// Background Block
		$bgBlock.each(function() {
			// Top
			var toScroll = borderW;
			var curScroll = toScroll - newScroll;
			if (curScroll < 0) curScroll = 0;
			// Footer
			var scrollOffset = totalScroll - $footer.outerHeight();
			var tempScroll = newScroll - scrollOffset;
			if (tempScroll < 0) tempScroll = 0;

			$(this).css({
				'top': curScroll - tempScroll
			});
		});

		// Listing - Load
		$toLoadNews.each(function() {
			if ($wrapper.hasClass('loaded')) {
				var object = $(this);
				if (newScroll + $(window).height() * 0.66 > $(this).offset().top) {
					object.addClass('loaded');
				} else if (newScroll + $(window).height() * 0.66 < $(this).offset().top) {
					object.removeClass('loaded');
				}
			}
		});

		// Listing - Scroll
		$newsArticles.each(function() {
			var $object = $(this);
			var $container = $object.parent();
			var testScroll = newScroll - borderW;
			var tempScroll = (testScroll + $container.offset().top) - $object.offset().top;
			var tempScrollImg = (testScroll + $container.offset().top) - $object.offset().top;
			var toScroll = $('.text', $object).height() / 2;
			if (tempScroll < 0) tempScroll = 0;
			if (tempScroll > toScroll) {
				tempScroll = toScroll;
				$('.text', $object).addClass('hidden');
			} else $('.text', $object).removeClass('hidden');

			$('.text', $object).css({
				'transform': 'translateY(' + tempScroll + 'px)',
				'-webkit-transform': 'translateY(' + tempScroll + 'px)'
			});
			$('.img', $object).css({
				'transform': 'translateY(' + (-tempScrollImg) + 'px)',
				'-webkit-transform': 'translateY(' + (-tempScrollImg) + 'px)'
			});
		});

		// Timer
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(function() {
			scrollPosition();
		}, 750);
	}

	// Project - Parallax
	$('#section-project .header .img').each(function() {
		$(this).css({
			'transform': 'translateY(-' + (newScroll * 0.2) + 'px)',
			'-webkit-transform': 'translateY(-' + (newScroll * 0.2) + 'px)'
		});
	});

	// Banner - Parallax
	$('#section-news-article .banner img').each(function() {
		var posTop = newScroll * 0.75;

		$(this).css({
			'margin-top': posTop
		});
	});

	// Featured - Parallax
	$('.img > img', $featured).each(function() {
		var tempScroll = newScroll * 0.2;
		$(this).css({
			'transform': 'translateY(' + tempScroll + 'px)',
			'-webkit-transform': 'translateY(' + tempScroll + 'px)'
		});
	});

	// Update Scroll
	currentScroll = newScroll;
}

function scrollPosition() {
	if (!browserMobile && $(window).width() > 1080) {
		var $target = $('.listing > div li.loaded', $news).last();
		var targetPos = $target.position().top + borderW;

		$('html,body').animate({
			scrollTop: targetPos
		}, 750, 'easeInOutQuad');
	}
}

/* ////////////////////////////////////////////////////////////////////////////
//
// Get Browser
//
/////////////////////////////////////////////////////////////////////////// */

function whichBrs() {
	var agt = navigator.userAgent.toLowerCase();
	if (agt.indexOf("opera") != -1) return 'Opera';
	if (agt.indexOf("staroffice") != -1) return 'Star Office';
	if (agt.indexOf("webtv") != -1) return 'WebTV';
	if (agt.indexOf("beonex") != -1) return 'Beonex';
	if (agt.indexOf("chimera") != -1) return 'Chimera';
	if (agt.indexOf("netpositive") != -1) return 'NetPositive';
	if (agt.indexOf("phoenix") != -1) return 'Phoenix';
	if (agt.indexOf("firefox") != -1) return 'Firefox';
	if (agt.indexOf("chrome") != -1) return 'Chrome';
	if (agt.indexOf("safari") != -1) return 'Safari';
	if (agt.indexOf("skipstone") != -1) return 'SkipStone';
	if (agt.indexOf("msie") != -1) return 'Internet Explorer';
	if (agt.indexOf("netscape") != -1) return 'Netscape';
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
	if (agt.indexOf('\/') != -1) {
		if (agt.substr(0, agt.indexOf('\/')) != 'mozilla') {
			return navigator.userAgent.substr(0, agt.indexOf('\/'));
		} else return 'Netscape';
	} else if (agt.indexOf(' ') != -1)
		return navigator.userAgent.substr(0, agt.indexOf(' '));
	else return navigator.userAgent;
}