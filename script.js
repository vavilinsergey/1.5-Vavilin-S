// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

// // Инициализация превью слайдера
// const sliderThumbs = new Swiper('.swiper', { // ищем слайдер превью по селектору
// 	// задаем параметры
// 	direction: 'horizontal', // вертикальная прокрутка
// 	slidesPerView: 1, // показывать по 3 превью
// 	spaceBetween: 24, // расстояние между слайдами
// 	navigation: { // задаем кнопки навигации
// 		nextEl: '.swiper-button-next', // кнопка Next
// 		prevEl: '.swiper-button-prev' // кнопка Prev
// 	},
// 	freeMode: true, // при перетаскивании превью ведет себя как при скролле
// 	breakpoints: { // условия для разных размеров окна браузера
// 		0: { // при 0px и выше
// 			direction: 'horizontal', // горизонтальная прокрутка
// 		},
// 		768: { // при 768px и выше
// 			direction: 'vertical', // вертикальная прокрутка
// 		}
// 	}
// });
// Инициализация слайдера изображений
const sliderImages = new Swiper('.swiper', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: false, // можно прокручивать изображения колёсиком мыши
    
    pagination: {
        el: '.swiper-pagination',
    },
	// navigation: { // задаем кнопки навигации
	// 	nextEl: '.swiper-button-next', // кнопка Next
	// 	prevEl: '.swiper-button-prev' // кнопка Prev
	// },
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		// 0: { // при 0px и выше
		// 	direction: 'horizontal', // горизонтальная прокрутка
		// },
		// 768: { // при 768px и выше
		// 	direction: 'vertical', // вертикальная прокрутка
		// }
	}
});