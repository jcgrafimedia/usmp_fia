
/* 	Efecto Scroll en Header
	================================================================*/
var flag = false;
var scroll;
var size;

$(window).scroll(function(event) {
	scroll = $(window).scrollTop();
		

	if(scroll > 200 ){

		if(!flag){
			$('.menu_content').css({
				'background-color' : 'rgb(42, 55, 68)',
				'transition' : '0.6s'
			});
			$('#logo').css({
				'width' : '25%',
				'transition' : '0.6s'
			});
			$('#usmp').hover(
				function dentro() {
					$('#usmp').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#usmp').css('background-color' , 'transparent');
				}
			);
			$('#facultad').hover(
				function dentro() {
					$('#facultad').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#facultad').css('background-color' , 'transparent');
				}
			);
			$('#escuelas').hover(
				function dentro() {
					$('#escuelas').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#escuelas').css('background-color' , 'transparent');
				}
			);
			$('#posgrados').hover(
				function dentro() {
					$('#posgrados').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#posgrados').css('background-color' , 'transparent');
				}
			);
			$('#institutos').hover(
				function dentro() {
					$('#institutos').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#institutos').css('background-color' , 'transparent');
				}
			);
			$('#epu').hover(
				function dentro() {
					$('#epu').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#epu').css('background-color' , 'transparent');
				}
			);
			$('#admision').hover(
				function dentro() {
					$('#admision').css('background-color' , 'rgb(228, 75, 48)');
				},
				function fuera() {
					$('#admision').css('background-color' , 'transparent');
				}
			);
			flag = true;
		}
			
	}else {
		if(flag){
			$('.menu_content').css({
				'background-color': 'rgba(0, 0, 0 , 0.5)',
				'transition': '0.8s'
			});
			$('#logo').css({
				'width' : '28%',
				'transition' : '0.6s'
			});
			$('#usmp').hover(
				function dentro() {
					$('#usmp').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#usmp').css('background-color' , 'transparent');
				}
			);
			$('#facultad').hover(
				function dentro() {
					$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#facultad').css('background-color' , 'transparent');
				}
			);
			$('#escuelas').hover(
				function dentro() {
					$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#escuelas').css('background-color' , 'transparent');
				}
			);
			$('#posgrados').hover(
				function dentro() {
					$('#posgrados').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#posgrados').css('background-color' , 'transparent');
				}
			);
			$('#institutos').hover(
				function dentro() {
					$('#institutos').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#institutos').css('background-color' , 'transparent');
				}
			);
			$('#epu').hover(
				function dentro() {
					$('#epu').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#epu').css('background-color' , 'transparent');
				}
			);
			$('#admision').hover(
				function dentro() {
					$('#admision').css('background-color' , 'rgb(42, 55, 68)');
				},
				function fuera() {
					$('#admision').css('background-color' , 'transparent');
				}
			);	
			flag = false;
		}
	}
});

/* 	Efecto Sub-Menu
	================================================================*/
			
$('#facultad').hover(
	function dentro() {
		$('#menu_fa').css('display' , 'block');
		$('#menu_fa').addClass('sub_menu');
		$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
	},
	function fuera() {
		$('#menu_fa').css('display' , 'none');
		$('#menu_fa').removeClass('sub_menu');
		$('#facultad').css('background-color' , 'transparent');
	}
);

	$('#menu_fa').hover(
		function dentro() {
			$('#menu_fa').css('display' , 'block');
			$('#menu_fa').addClass('sub_menu');
			$('#facultad').css('background-color' , 'rgb(42, 55, 68)');
		},
		function fuera() {
			$('#menu_fa').css('display' , 'none');
			$('#facultad').css('background-color' , 'transparent');
		}
	);

$('#escuelas').hover(
	function dentro() {
		$('#menu_esc').css('display' , 'block');
		$('#menu_esc').addClass('sub_menu');
		$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
	},
	function fuera() {
		$('#menu_esc').css('display' , 'none');
		$('#menu_esc').removeClass('sub_menu');
		$('#escuelas').css('background-color' , 'transparent');
	}
);

	$('#menu_esc').hover(
		function dentro() {
			$('#menu_esc').css('display' , 'block');
			$('#menu_esc').addClass('sub_menu');
			$('#escuelas').css('background-color' , 'rgb(42, 55, 68)');
		},
		function fuera() {
			$('#menu_esc').css('display' , 'none');
			$('#escuelas').css('background-color' , 'transparent');
		}
	);



/*  Efecto Acordeon
    ========================================================================================== */

(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();


/*  Efecto Menu Desplegable
    ========================================================================================== */

(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		steps = morphEl.getAttribute( 'data-morph-open' ).split(';');
		stepsTotal = steps.length;
		isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}
	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false; 
			}, 300 );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// animate path
			var pos = 0,
				nextStep = function( pos ) {
					if( pos > stepsTotal - 1 ) {
						isAnimating = false; 
						return;
					}
					path.animate( { 'path' : steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function() { nextStep(pos); } );
					pos++;
				};

			nextStep(pos);
		}
		isOpen = !isOpen;
	}

	init();

})();


function evento_menu(){

	var container_menu = document.querySelector("#container_wrap");

	if(container_menu.className == ""){
		container_menu.className = "sombreado";
	}else {
		container_menu.className = "";
	}

}

/*  
    ========================================================================================== */
