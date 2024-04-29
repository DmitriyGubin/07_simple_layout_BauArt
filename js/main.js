document.querySelector("header .burger").addEventListener('click', function() {
	document.querySelector("header .menu").classList.toggle('open-menu');
	document.querySelector("header .burger").classList.toggle('open-menu');
	document.querySelector("header .shade-box").classList.toggle('show-shade-box');
});

$('.find-house-slider').slick({
	dots: false,
	fade: true,
	prevArrow: '<div class="prev-find-house"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>',
	nextArrow: '<div class="next-find-house"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>'
});

$('.examples-slider').slick({
	dots: false,
	fade: true,
	prevArrow: '<div class="prev-examples"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>',
	nextArrow: '<div class="next-examples"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>'
});

var sub_menu_points = document.querySelectorAll(".sub-menu-point");
for(let item of sub_menu_points)
{
	item.addEventListener('mouseover', function() {
		item.querySelector('.sub-menu').classList.add('show');
	});

	item.addEventListener('mouseout', function() {
		item.querySelector('.sub-menu').classList.remove('show');
	});
}

var hits_img_box = document.querySelectorAll(".hits .img-box");
for(let item of hits_img_box)
{
	item.addEventListener('mouseover', function() {
		item.querySelector('.one-img').classList.toggle('hide');
		item.querySelector('.two-img').classList.toggle('hide');
	});

	item.addEventListener('mouseout', function() {
		item.querySelector('.one-img').classList.toggle('hide');
		item.querySelector('.two-img').classList.toggle('hide');
	});
}


/*****************карта******************/
ymaps.ready(init);

function init () 
{
	var myMap = new ymaps.Map("map", {
		center: [54.970000,82.925550],
		zoom: 9,
				//controls: [],//без элементов управления
			}, {
				searchControlProvider: 'yandex#search'
			}),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
    	"{{ properties.address }}" +
    	"</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                	var el = this.getElement(),
                	result = null;
                	if (el) {
                		var firstChild = el.firstChild;
                		result = new ymaps.shape.Rectangle(
                			new ymaps.geometry.pixel.Rectangle([
                				[0, 0],
                				[firstChild.offsetWidth, firstChild.offsetHeight]
                				])
                			);
                	}
                	return result;
                }
            }
            );

//https://yandex.ru/dev/maps/jsbox/2.1/icon_customImage

function Add_point(x, y, name)
{
	var myPlacemark = new ymaps.Placemark([x, y], {
            balloonContent: name,
            hintContent: name
        }, {
            preset: 'islands#icon'
        });
	myMap.geoObjects.add(myPlacemark);
}

Add_point(55.017751, 82.940237, "название посёлка");
}

$('.ready-proj-slider').slick({
	dots: false,
	fade: true,
	prevArrow: '<div class="prev-ready-proj"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>',
	nextArrow: '<div class="next-ready-proj"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.44 12.44a1 1 0 001.41 1.41l5.3-5.29a1 1 0 000-1.41l-5.3-5.3a1 1 0 00-1.41 1.42L9.67 7.5c.2.2.2.51 0 .7l-4.23 4.24z"></path></svg></div>'
});

/**показать ещё**/
document.querySelector('#show-more-blog').addEventListener("click", () => Show_More_Items('.blogg .blog-item', 3, 'hide','#show-more-blog'));


function Show_More_Items(items_selector, num_records, hide_class, button_selector)
{
	var elements = document.querySelectorAll(items_selector);
	var num = 0;
    for (let item of elements)
    {
        if((item.classList.contains(hide_class)) && (num < num_records))
        {
            item.classList.remove(hide_class);
            num++;
        }
    }
    if (num == 0)
    {
        document.querySelector(button_selector).remove();
    }
}

/**********Ползунок************/
$(".polzunok-5").slider({
    min: 4600000,
    max: 25000000,
    values: [4600000, 25000000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {
    	var left_input = new Intl.NumberFormat("ru").format(ui.values[ 0 ]);
    	var right_input = new Intl.NumberFormat("ru").format(ui.values[ 1 ]);
        $(".polzunok-input-5-left").val(left_input);   
        $(".polzunok-input-5-right").val(right_input);  
    }    
});

var left_input_first = new Intl.NumberFormat("ru").format($(".polzunok-5").slider("values", 0));
var right_input_first = new Intl.NumberFormat("ru").format($(".polzunok-5").slider("values", 1));
$(".polzunok-input-5-left").val(left_input_first);
$(".polzunok-input-5-right").val(right_input_first);
$(".polzunok-container-5 input").change(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
});


// Делим на разряды инпуты
function digits_int(target){
	val = $(target).val().replace(/[^0-9]/g, '');
	val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	$(target).val(val);
}
 
$(function($){
	$('body').on('input', '#price-from', function(e){
		digits_int(this);
	});

	$('body').on('change', '#price-from', function(e){
		digits_int(this);
		digits_int('#price-to');
	});

	$('body').on('input', '#price-to', function(e){
		digits_int(this);
	});

	$('body').on('change', '#price-to', function(e){
		digits_int(this);
		digits_int('#price-from');
	});

	digits_int('#price-from');
	digits_int('#price-to');
});

// Делим на разряды инпуты

/**********Ползунок************/

var catalog_img_box = document.querySelectorAll(".filter-catalog .img-box");
for(let item of catalog_img_box)
{
    item.addEventListener('mouseover', function() {
        item.querySelector('.one-img').classList.toggle('hide');
        item.querySelector('.two-img').classList.toggle('hide');
    });

    item.addEventListener('mouseout', function() {
        item.querySelector('.one-img').classList.toggle('hide');
        item.querySelector('.two-img').classList.toggle('hide');
    });
}

/*************************/
var check_boxes = document.querySelectorAll(".filter-catalog .checkbox-text");
for (let item of check_boxes)
{
    item.addEventListener('click', function() {
       item.classList.toggle('active-checkbox');
       item.querySelector('.galka').classList.toggle('hide');
       item.classList.toggle('no-opacity');
       Create_Variants();
    });
}

function Create_Variants()
{
    var parent = document.querySelector(".filter-catalog .variants");
    parent.innerHTML='';

    var check_boxes = document.querySelectorAll(".filter-catalog .checkbox-text");
    for (let item of check_boxes)
    {
        if(item.classList.contains('active-checkbox'))
        {
            let div = document.createElement('div');
            div.classList.add('variants-item');

            let cross_span = document.createElement('span');
            cross_span.classList.add('cross');
            cross_span.innerHTML = '✕';

            let text_span = document.createElement('span');
            text_span.classList.add('variants-item-text');
            text_span.innerHTML = item.querySelector('.my-checkbox-descr').innerHTML;

            parent.appendChild(div);
            div.appendChild(cross_span);
            div.appendChild(text_span);
        }
    }
}












