'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu_item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	});
});


window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent'),
			tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
		
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
});

window.addEventListener('DOMContentLoaded', () => {

	const PriceTabs = document.querySelectorAll('.tabheader__item'),
			PriceTabsContent = document.querySelectorAll('.price'),
			PriceTabsParent = document.querySelector('.tabheader__items');

	function hideTabContentPrice() {
		PriceTabsContent.forEach(item => {
			item.style.display = 'none';
		});

		PriceTabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContentPrice(i = 0) {
		PriceTabsContent[i].style.display = 'block';
		PriceTabs[i].classList.add('tabheader__item_active');
	}

	hideTabContentPrice();
	showTabContentPrice();

	PriceTabsParent.addEventListener('click', (event) => {
		const target = event.target;
		
		if (target && target.classList.contains('tabheader__item')) {
			PriceTabs.forEach((item, i) => {
				if (target == item) {
					hideTabContentPrice();
					showTabContentPrice(i);
				}
			});
		}
	});
});

window.addEventListener('DOMContentLoaded', () => {

	const QATabs = document.querySelectorAll('.tabquestion'),
			QATabsContent = document.querySelectorAll('.tabanswers'),
			QATabsParent = document.querySelector('.tabquestions');

	function hideTabContentQA() {
		QATabsContent.forEach(item => {
			item.style.display = 'none';
		});

		QATabs.forEach(item => {
			item.classList.remove('tabquestion_active');
		});
	}

	function showTabContentQA(i = 0) {
		QATabsContent[i].style.display = 'block';
		QATabs[i].classList.add('tabquestion_active');
	}

	hideTabContentQA();
	showTabContentQA();

	QATabsParent.addEventListener('click', (event) => {
		const target = event.target;
		
		if (target && target.classList.contains('tabquestion')) {
			QATabs.forEach((item, i) => {
				if (target == item) {
					hideTabContentQA();
					showTabContentQA(i);
				}
			});
		}
	});

	//modal
	const modalTrigger = document.querySelectorAll('[data-modal]'),
			modal = document.querySelector('.modal'),
			modalCloseBtn = document.querySelector('[data-close]');

	modalTrigger.forEach(btn => {
		btn	.addEventListener('click', () => {
			modal.classList.add('show');
			modal.classList.remove('hide');
			document.body.style.overflow = 'hidden';
		});
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	function TabsCarousel(tabcar) {
		$(document).ready(function(){
			$(tabcar).slick({
				slidesToShow: 3,
				speed: 600,
				draggable: true,
				swipe: true,
				autoplay: true,
				autoplaySpeed: 1500,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							arrows: false
						}
					}
				]
			});
		});
	}

	TabsCarousel('.tabcontent__carousel_1');
	TabsCarousel('.tabcontent__carousel_2');
	TabsCarousel('.tabcontent__carousel_3');
	TabsCarousel('.tabcontent__carousel_4');
	TabsCarousel('.tabcontent__carousel_5');
});