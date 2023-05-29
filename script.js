let readMore = document.querySelector('.read-more');//слушаем клик по контейнеру
let readMoreBtnTitle = readMore.querySelector('p');//меняем значение с Читать далее на скрыть и обратно
let readMoreIcon = readMore.querySelector('.read-more__icon')//вращаем иконку 
let contentList = document.querySelector('.swiper-wrapper'); //контейнер 
let contentItems = contentList.children;//живая коллекция итемов
const width = window.innerWidth;


const breakpoint = window.matchMedia( '(min-width:768px)' );
const breakpoint2 = window.matchMedia( '(min-width:1120px)' );
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
const breakpointChecker = function() {
	if (breakpoint2.matches === true) {
		//скрываем элементы
		hideItems();
    // if larger viewport and multi-row layout needed
    } else if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
         if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      // or/and do nothing
	  hideItems();
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpoint.matches === false ) {
      // fire small viewport version of swiper
      return enableSwiper();
   }
};
//////////////////////////////////////////////////////////////////
const enableSwiper = function() {
   mySwiper = new Swiper ('.swiper', {
		direction: 'horizontal',
		loop: true,
		spacebetween: 20, //вот это почему-то не работает!!!!!!!!!<--------------------------------------------
		// slidesPerView: auto,
		// If we need pagination
		pagination: {
		el: '.swiper-pagination',			},
   });
};
//////////////////////////////////////////////////////////////////
function hideItems() {
	if (width >= 768) {
		let divider = (width < 1120? 6: 8);//если разрешение больше 1120 будем отображать по 8 итемов,если меньше - по 6
		for (let i = 0; i < contentItems.length; i++) {
			if (i > divider - 1) {
				contentItems[i].classList.add('hidden');
			}
		}
	}
}
//////////////////////////////////////////////////////////////////

function readMoreButton() {
	let hiddenContent = document.querySelectorAll('.hidden');
	if (hiddenContent.length > 0) {
		for (let i = 0; i < hiddenContent.length; i++) {
			hiddenContent[i].classList.remove('hidden');
		}
		readMoreBtnTitle.textContent = "Скрыть";
		readMoreIcon.classList.add('reversed');
	} else {
		hideItems ();
		readMoreBtnTitle.textContent = "Читать далее";
		readMoreIcon.classList.remove('reversed');
	}
}
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
breakpoint2.addListener(breakpointChecker);
window.addEventListener('resize', breakpointChecker);
//  
// kickstart
breakpointChecker();



//////////////////////////////////////////////////////////////////

readMore.addEventListener('click', function() {
	readMoreButton();
});


// let readMore = document.querySelector('.read-more');//слушаем клик по контейнеру
// let readMoreBtnTitle = readMore.querySelector('p');//меняем значение с Читать далее на скрыть и обратно
// let readMoreIcon = readMore.querySelector('.read-more__icon')//вращаем иконку 
// let contentList = document.querySelector('.swiper-wrapper'); //контейнер 
// let contentItems = contentList.children;//живая коллекция итемов
// const width = window.innerWidth;
// let divider = (width < 1120? 6: 8);//если разрешение больше 1120 будем отображать по 8 итемов,если меньше - по 6

// //инициируем слайдер
// function initSlider() {
// 	const swiper = new Swiper('.swiper', {
// 		// Optional parameters
// 		direction: 'horizontal',
// 		loop: true,
// 		spacebetween: 20, //вот это почему-то не работает!!!!!!!!!
// 		// slidesPerView: auto,
// 		// If we need pagination
// 		pagination: {
// 		el: '.swiper-pagination',
// 		},
// 	});
// 	if (width >= 768) {
// 		swiper.destroy(true, true);
// 	}
// }

// //функция прячет итемы добавляя им класс hidden, кол-во зависит от текущего значения divider
// function hideItems() {
// 	if (width >= 768){
// 		for (let i = 0; i < contentItems.length; i++) {
// 			if (i > divider - 1) {
// 				contentItems[i].classList.add('hidden');
// 			}
// 		}
// 	}
// }

// //функция при загрузке документа вызывает либо слайдер либо прячет итемы
// document.addEventListener('DOMContentLoaded', () => {
// 	if (width < 768){
// 		initSlider();
// 	} else {
// 		initSlider();
// 		hideItems();
// 	}
// });

// //слушаем ресайз документа, почему-то не работает, раньше работало)
// document.addEventListener("resize", (event) => {
// 	width = window.innerWidth;
// 	if (width < 768){
// 		initSlider();
// 	} else {
// 		initSlider();
// 		hideItems();
// 	}
// });

// // сворачивает/ разворачивает список, трансформирует кнопку
// readMore.addEventListener('click', function() {
// 	let hiddenContent = document.querySelectorAll('.hidden');
// 	if (hiddenContent.length > 0) {
// 		for (let i = 0; i < hiddenContent.length; i++) {
// 			hiddenContent[i].classList.remove('hidden');
// 		}
// 		readMoreBtnTitle.textContent = "Скрыть";
// 		readMoreIcon.classList.add('reversed');
// 	} else {
// 		hideItems ();
// 		readMoreBtnTitle.textContent = "Читать далее";
// 		readMoreIcon.classList.remove('reversed');
// 	}
// });



//от Chat GPT
// window.addEventListener('DOMContentLoaded', function () {
// 	var swiper = null;

// 	function initSwiper() {
// 	  swiper = new Swiper('.swiper-container', {
// 		// Ваши настройки Swiper
// 	  });
// 	}

// 	function destroySwiper() {
// 	  if (swiper !== null) {
// 		swiper.destroy(true, true);
// 		swiper = null;
// 	  }
// 	}

// 	function checkScreenWidth() {
// 	  if (window.innerWidth < 768) {
// 		destroySwiper();
// 	  } else {
// 		initSwiper();
// 	  }
// 	}

// 	// Проверить ширину экрана при загрузке страницы
// 	checkScreenWidth();

// 	// Проверить ширину экрана при изменении размеров окна
// 	window.addEventListener('resize', checkScreenWidth);
//   });






















// window.addEventListener('DOMContentLoaded', function () {
// 	var swiper = null;

// 	function initSwiper() {
// 	  swiper = new Swiper('.swiper', {
// 		direction: 'horizontal',
// 		loop: true,
// 		spacebetween: 20,
// 		// slidesPerView: auto,
// 		// // If we need pagination
// 		pagination: {
// 		el: '.swiper-pagination',
// 		},
// 		});
// 	}

// 	function destroySwiper() {
// 	  if (swiper !== null) {
// 		swiper.destroy(true, true);
// 		swiper = null;
// 	  }
// 	}

// 	function checkScreenWidth() {
// 	  if (window.innerWidth < 768) {
// 		destroySwiper();
// 	  } else {
// 		initSwiper();
// 	  }
// 	}

// 	// Проверить ширину экрана при загрузке страницы
// 	checkScreenWidth();

// 	// Проверить ширину экрана при изменении размеров окна
// 	window.addEventListener('resize', checkScreenWidth);
//   });



//document.addEventListener("resize", (event) => {
	// 	const width = window.innerWidth
	// 	if (width < 768){
	// 		initSlider();
	// 	}
	//   });
	

// function detectDevice() {
// 	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
// 	  // true for mobile device
// 	  initSlider();
	  
// 	}else{
// 	  // false for not mobile device
	  
// 	}
//   }
  
//   detectDevice();
