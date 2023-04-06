// плавающая шапка
const windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 980) {
	var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
	$(window).scroll(function () { //Вызов функции при прокрутке страницы
		currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
		if (currentScrollTop > $('#header-top').height() + $('#header-mid').height()) { //Проверка условия 'переменная больше высоты шапки'
			$('#header-bot').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'header-bot'
			$('#header-mid').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'header-mid'
			var midBot = $('#header-mid').height() + $('#header-bot').height(); // Высота средней и нижней шапки для заполнения воздуха, от их перехода в position fix
			$('#header-top').css('margin-bottom', midBot + 'px'); // заполняем воздух от перехода средней и нижней в position fix
			if (tempScrollTop > currentScrollTop) { //Проверка условия 'значение переменной до вызова функции больше значения после её вызова'
				$('#header-mid').addClass('show'); //создание класса 'show' в селекторе 'header'
				$('#header-bot').css('top', $('#header-mid').height() + 'px'); // задаём положение низа под высотой средней
			} else { // выполнение, если второе условие не прошло проверку
				$('#header-mid').removeClass('show'); //удаление класса 'show' в селекторе 'header'
				$('#header-bot').css('top', '0px'); //возвращаем низ к топу вьюпорта
			}
		} else { // выполнение, если первое условие не прошло проверку
			$('#header-bot').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'header-bot'
			$('#header-mid').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'header-mid'
			$('#header-top').css('margin-bottom', '0px');
			$('#header-mid').removeClass('show'); //удаление класса 'show' в селекторе 'header-mid'
			$('#header-bot').css('top', '0px'); //возвращаем низ к топу вьюпорта
		}
		tempScrollTop = currentScrollTop; //присвоение одной переменной значение другой
	});
} else {
	// Для мобилки:
	var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
	$(window).scroll(function () { //Вызов функции при прокрутке страницы
		currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
		var midBot = $('#header-mid').height(); // Высота средней и нижней шапки для заполнения воздуха, от их перехода в position fix
		if (currentScrollTop > midBot) { //Проверка условия 'переменная больше 1px'
			$('#header-mid').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'header-mid'
			$('body').css('padding-top', midBot + 'px'); // заполняем воздух от перехода средней и нижней в position fix
			if (tempScrollTop > currentScrollTop) { //Проверка условия 'значение переменной до вызова функции больше значения после её вызова'
				$('#header-mid').addClass('show'); //создание класса 'show' в селекторе 'header'
			} else { // выполнение, если второе условие не прошло проверку
				$('#header-mid').removeClass('show'); //удаление класса 'show' в селекторе 'header'
			}
		} else { // выполнение, если первое условие не прошло проверку
			$('#header-mid').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'header-mid'
			$('body').css('padding-top', '0px');
			$('#header-mid').removeClass('show'); //удаление класса 'show' в селекторе 'header-mid'
		}
		tempScrollTop = currentScrollTop; //присвоение одной переменной значение другой
	});
};


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			document.body.classList.toggle('_lock')
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// аккордеон menuburger
$('.menuburger').accordion({
	heightStyle: 'content',
	active: 0, // индекс открытой вкладки
	header: '> .menuburger-item > .menuburger-header'
});

// аккордеон в фильтрах
var acc = document.getElementsByClassName("accordion ");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		var parentPanel = this.closest(".submenu");

		if (panel.style.height) {
			panel.style.height = null;
			if (parentPanel != null) {
				parentPanel.style.height = 'max-content';
			}
		} else {
			panel.style.height = panel.scrollHeight + "px";
			if (parentPanel != null) {
				parentPanel.style.height = 'max-content';
			}
		}
	});
}

// аккордеон, который закрывает фильтры на мобилке
var acc = document.getElementsByClassName("accordion-mob");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
}

// аккордеон, который закрывает меню личного кабинета на мобилке
var accLK = document.getElementsByClassName("accordion-lk");
var i;
for (i = 0; i < accLK.length; i++) {
	accLK[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
}

// аккордеон заказов на странице заказов в личном кабинете
var accLKO = document.getElementsByClassName("accordion-lk-order");
var i;
for (i = 0; i < accLKO.length; i++) {
	accLKO[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.classList.contains('_active')) {
			panel.classList.remove('_active');
			panel.style.height = null;
		} else {
			panel.classList.add('_active');
			panel.style.height = panel.scrollHeight + "px";
		}
	});
};
var activeP = document.getElementsByClassName("_active");
for (i = 0; i < activeP.length; i++) {
	function activeHeight() {
		activeP[i].style.height = activeP[i].scrollHeight + "px";
	};
	activeHeight();
}


// плавная прокрутка по якорям
$('a[href*=#]:not([href=#])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		var headerHeight = $('#header-bot').height() + 30;

		const windowInnerWidth = window.innerWidth;
		if (windowInnerWidth > 980) {
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 500, function () {
					target.focus();
				});
				return false;
			}
		} else {
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 30
				}, 500, function () {
					target.focus();
				});
				return false;
			}
		}
	}
});


// Табы
const tabsWrappers = document.querySelectorAll(".tab-wrapper");
tabsWrappers.forEach((tabWrapper) => {
	// tabs
	let tabBtn = tabWrapper.querySelectorAll(".tab-btn"),
		tabControl = tabWrapper.querySelector(".tab-control"),
		tabContent = tabWrapper.querySelectorAll(".tab-content");
	if (tabControl != null) {
		tabs(tabBtn, tabControl, tabContent);
		function tabs(tab, info, tabContent) {
			function hideTab(a) {
				for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove("show");
					tabContent[i].classList.add("hide");
				}
			}
			hideTab(1);
			function showTab(b) {
				if (tabContent[b].classList.contains("hide")) {
					tabContent[b].classList.remove("hide");
					tabContent[b].classList.add("show");
				}
			}
			tabControl.addEventListener("click", function (e) {
				let target = e.target;
				if (target && target.classList.contains("tab-btn")) {
					for (let i = 0; i < tabBtn.length; i++) {
						tabBtn[i].classList.remove("tab-btn--act");
						if (target == tabBtn[i]) {
							tabBtn[i].classList.add("tab-btn--act");
							hideTab(0);
							showTab(i);
						}
					}
				}
			});
		}
	}
});


//табы в карточке товара
$(".prod__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".prod__box_" + tabVal).addClass("active");
	$(".prod__box_" + tabVal).siblings(".prod__box").removeClass("active");
});
// переключение на таб "характеристики" при нажатии на кнопку "Все характеристики"
$(".character-btn").click(function () {
	$(".character-tab").addClass("active");
	$(".character-tab").siblings(".prod__tab").removeClass("active");

	$(".prod__box_1").addClass("active");
	$(".prod__box_1").siblings(".prod__box").removeClass("active");
});
// переключение на таб "Описание" при нажатии на кнопку "бренда"
$(".opisan-btn").click(function () {
	$(".opisan-tab").addClass("active");
	$(".opisan-tab").siblings(".prod__tab").removeClass("active");

	$(".prod__box_2").addClass("active");
	$(".prod__box_2").siblings(".prod__box").removeClass("active");
});


// счетчик товара в карточке товара
let buttonCountPlus = document.getElementsByClassName("buttonCountPlus");
let buttonCountMinus = document.getElementsByClassName("buttonCountMinus");
let count = document.getElementsByClassName("buttonCountNumber");
let countPost = document.getElementsByClassName("num");
if (count) {
	var p;
	for (p = 0; p < buttonCountPlus.length; p++) {
		buttonCountPlus[p].addEventListener("click", function () {
			let itemCount = this.previousElementSibling.textContent;
			if (itemCount < 100) {
				itemCount++;
				this.previousElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
	var m;
	for (m = 0; m < buttonCountMinus.length; m++) {
		buttonCountMinus[m].addEventListener("click", function () {
			let itemCount = this.nextElementSibling.textContent;
			if (itemCount > 1) {
				itemCount--;
				this.nextElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
}


// Стилизация селектов
setTimeout(function () {
	$('select').styler();
}, 100)


// Все попапы
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	// настройки (не обязательно), см. API
});


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
if (selector.length > 0) {
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});
}


// Перелистывание картинок как на озоне
(function ($) {
	$.fn.HvrSlider = function () {
		return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
				var hvr = $('<div>', {
					class: 'hvr',
					append: [
						$('<div>', {
							class: 'hvr__images',
							append: $('<div>', {
								class: 'hvr__sectors',
							}),
						}),
						$('<div>', {
							class: 'hvr__dots',
						}),
					],
					insertAfter: el,
					prepend: el,
				});
				var hvrImages = $('.hvr__images', hvr);
				var hvrImage = $('img', hvr);
				var hvrSectors = $('.hvr__sectors', hvr);
				var hvrDots = $('.hvr__dots', hvr);
				el.prependTo(hvrImages);
				hvrImage.each(function () {
					hvrSectors.prepend('<div class="hvr__sector"></div>');
					hvrDots.append('<div class="hvr__dot"></div>');
				});
				$('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
				var setActiveEl = function (el) {
					hvrImage.hide().eq(el.index()).show();
					$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
				};
				$('.hvr__sector', hvrSectors).hover(function () {
					setActiveEl($(this));
				});
				hvrSectors.on('touchmove', function (e) {
					var position = e.originalEvent.changedTouches[0];
					var target = document.elementFromPoint(position.clientX, position.clientY);
					if ($(target).is('.hvr__sector')) {
						setActiveEl($(target));
					}
				});
			}
		});
	};
})(jQuery);
$('.images').HvrSlider();



// Отображение карточек в каталоге
var checkCook = localStorage.getItem('template');
// Если состаяние grid, добавляем классы для отображения
if (checkCook == 'list') {
	$('.tamplate-view__list').addClass('active');
	$('.catalog-main').addClass('list');
} else {
	$('.tamplate-view__grid').addClass('active');
}

var btnTv = document.getElementsByClassName("btn-tv");
if (btnTv) {
	var inx;
	for (inx = 0; inx < btnTv.length; inx++) {
		btnTv[inx].addEventListener("click", function () {

			if (this.classList.contains('tamplate-view__list')) {
				// устанавливаем куки
				localStorage.setItem('template', 'list')
				// Устанавливаем класс active на нажатую кнопку
				$(this).siblings().removeClass("active");
				$(this).addClass('active');
				// Устанавливаем класс отображения на весь контейнер
				$('.catalog-main').addClass('list');
			}

			if (this.classList.contains('tamplate-view__grid')) {
				// устанавливаем куки
				localStorage.setItem('template', 'grid')
				// Устанавливаем класс active на нажатую кнопку
				$(this).siblings().removeClass("active");
				$(this).addClass('active');
				// Устанавливаем класс отображения на весь контейнер
				$('.catalog-main').removeClass('list');
			}

		});
	}
}


// слайдер Swiper специальных предложений
var specSwiper = new Swiper('.spec-slider', {
	slideToClickedSlide: false,
	slidesPerView: 4,
	spaceBetween: 20,
	simulateTouch: false,
	navigation: {
		nextEl: '.spec-swiper-button-next',
		prevEl: '.spec-swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		// when window width is >= 480px
		750: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 4,
		}
	}
});

// слайдер Swiper меню в нижней шапке
var porod5Swiper = new Swiper('.porod-5-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 15,
	initialSlide: 0,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 'auto',
		},
		1000: {
			slidesPerView: 4,
		},
		1300: {
			slidesPerView: 5,
		},
	}
});

// слайдер Swiper с 5ю карточками товаров
var porod5Swiper = new Swiper('.porod-5-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 15,
	initialSlide: 0,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 'auto',
		},
		1000: {
			slidesPerView: 4,
		},
		1300: {
			slidesPerView: 5,
		},
	}
});

// слайдер Swiper с 3я карточками товаров
var porod3Swiper = new Swiper('.porod-3-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 15,
	initialSlide: 0,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 'auto',
		},
		980: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	}
});

// слайдер Swiper с 2я отзывами
var reviewsSwiper = new Swiper('.reviews-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 15,
	initialSlide: 0,
	grabCursor: true,
	navigation: {
		nextEl: '.reviews-swiper-button-next',
		prevEl: '.reviews-swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		980: {
			slidesPerView: 2,
		},
	}
});

// слайдер Swiper с 3я карточками блога
var blogsSwiper = new Swiper('.blog-block-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 15,
	initialSlide: 0,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 'auto',
		},
		980: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	}
});


// слайдер Swiper главного баннера
var mainbannerSwiper = new Swiper('.mainbanner-swiper', {
	slideToClickedSlide: false,
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// слайдер Swiper категорий в каталоге
var categorySwiper = new Swiper('.category-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	initialSlide: 0,
	mousewheel: true,
});

// слайдер Swiper во внутренней странице товара с галереей
var cardSwiper = new Swiper('.card-inner-thumb', {
	slideToClickedSlide: true,
	slidesPerView: 1,
	preloadImages: false,
	lazy: true,
	navigation: {
		nextEl: '.card-button-next',
		prevEl: '.card-button-prev',
	},
	thumbs: {
		swiper: {
			el: '.card-thums',
			slidesPerView: 4,
			slideToClickedSlide: true,
			spaceBetween: 10,
			mousewheel: true,
			direction: 'vertical',
			preloadImages: false,
			lazy: true,
			breakpoints: {
				320: {
					direction: 'horizontal',
				},
				650: {
					direction: 'vertical',
				},
			}
		}
	}
});

// слайдер Swiper табов на странице товара
var cardTabsSwiper = new Swiper('.card-tabs-swiper', {
	slideToClickedSlide: false,
	slidesPerView: 'auto',
	spaceBetween: 20,
	initialSlide: 0,
	mousewheel: true,
	breakpoints: {
		320: {
			spaceBetween: 10,
		},
		980: {
			spaceBetween: 20,
		},
	}
});

// слайдер Swiper таблицы сравнений
var compareSwiper = new Swiper('.compare-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	initialSlide: 0,
	grabCursor: true,
	freeMode: true,
});

// слайдер Swiper табов на странице контактов
var contactsTabsSwiper = new Swiper('.contacts-tabs-swiper', {
	slideToClickedSlide: false,
	slidesPerView: 'auto',
	spaceBetween: 20,
	initialSlide: 0,
	mousewheel: true,
	breakpoints: {
		320: {
			spaceBetween: 10,
		},
		980: {
			spaceBetween: 20,
		},
	}
});


// слайдер Swiper категорий блога и каотегорий вакансий
var categorySwiper = new Swiper('.category-swiper', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 12,
	initialSlide: 0,
	// freeMode: true,
	mousewheel: true,
});

// слайдер Swiper "Смотрите также"
var moreSwiper = new Swiper('.more-swiper', {
	slideToClickedSlide: false,
	slidesPerView: 'auto',
	spaceBetween: 19,
	initialSlide: 0,
	grabCursor: true,
});