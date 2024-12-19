const cevronUpsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>`;  
// Cevron Up Icon
document.querySelectorAll('.cevron-up').forEach(span => {
  span.innerHTML = cevronUpsvg;
});

const cevronDownsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`;
// Cevron Down Icon
document.querySelectorAll('.cevron-down').forEach(span => {
  span.innerHTML = cevronDownsvg;
});


//Mobile nav toggle right slider
document.addEventListener('DOMContentLoaded', () => {
    const hamIcon = document.querySelector('.ham_icon');
    const mobileMenu = document.querySelector('.mobile_menu');
    const cross = document.querySelector('.cross');
    const body = document.body; 
  
    const openMenu = () => {
      mobileMenu.classList.add('open');
    };
  
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
    };

    hamIcon.addEventListener('click', openMenu);
    cross.addEventListener('click', closeMenu);
  
  });


  //Mobile menu insider switch slide
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu_btn");
  const accountBtn = document.querySelector(".account_btn");
  const menuSec = document.querySelector(".menu_sec");
  const accountSec = document.querySelector(".account_sec");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuSec.classList.remove("hidden");
      accountSec.classList.add("hidden");

      menuBtn.classList.add("active");
      accountBtn.classList.remove("active");
    });

    accountBtn.addEventListener("click", () => {
      accountSec.classList.remove("hidden");
      menuSec.classList.add("hidden");

      accountBtn.classList.add("active");
      menuBtn.classList.remove("active");
    });
  }
});


//menu nav dropdown
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.m_drop').forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
          e.stopPropagation();

          const dropOpt = dropdown.nextElementSibling;

          if (dropOpt) {
              dropOpt.classList.toggle('hidden');
          }

          const chevron = dropdown.querySelector('.cevron-right');
          if (chevron) {
              if (dropOpt.classList.contains('hidden')) {
                  chevron.style.transform = 'rotate(0deg)';
              } else {
                  chevron.style.transform = 'rotate(90deg)';
              }
          }
      });
  });
});



  //Quantity Increase and decrease Button
  document.addEventListener("DOMContentLoaded", () => {
    const quantityBtn = document.querySelectorAll('.quantitybtn');

    quantityBtn.forEach(quantity => {
    
        const plusBtn = quantity.querySelector('.plusbtn');
        const minusBtn = quantity.querySelector('.minusbtn');
        const quantityInput = quantity.querySelector('.quantityInput');

        // Initial state of the buttons
        updateButtonStates();

        // Event listeners to the plus and minus buttons
        plusBtn.addEventListener("click", increaseValue);
        minusBtn.addEventListener("click", decreaseValue);

        quantityInput.addEventListener("input", validateInput);

        // Function to update button states based on input value
        function updateButtonStates() {
            const value = parseInt(quantityInput.value);
            // minusBtn.disabled = value <= 1; 
        }

        // Function to decrease the value
        function decreaseValue() {
            let value = parseInt(quantityInput.value);
             if(value == 1){
              const cartBox = quantity.closest('.cartbox');  
              const cartBag = cartBox.querySelector('.cart_bag');
              cartBag.style.display = 'block';
              quantity.style.display= 'none';
             }
             
            value = isNaN(value) ? 1 : Math.max(value - 1, 1); 
            quantityInput.value = value;
            updateButtonStates();
        }

        // Function to increase the value
        function increaseValue() {
            let value = parseInt(quantityInput.value);
            value = isNaN(value) ? 1 : value + 1; 
            quantityInput.value = value;
            updateButtonStates();
        }

        function validateInput() {
            let value = quantityInput.value;
            if (isNaN(value) || value <= 0) {
                quantityInput.value = 1;
            } else {
                quantityInput.value = parseInt(value);
            }
            updateButtonStates();
        }
    });
});
  

// Product Image scroll
document.addEventListener("DOMContentLoaded", () => {
  const Prod_scrollImage = document.querySelector('.img_scroll');
  const prodimg_scrollLeft = document.querySelector('.img_scroll_contain .cevron-left');
  const prodimg_scrollRight = document.querySelector('.img_scroll_contain .cevron-right');

  // Scroll amount (adjust as needed)
  const scrollAmount = 200;

  // Scroll Left
  if (prodimg_scrollLeft) {
      prodimg_scrollLeft.addEventListener('click', () => {
          Prod_scrollImage.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth'
          });
      });
  }

  // Scroll Right
  if (prodimg_scrollRight) {
      prodimg_scrollRight.addEventListener('click', () => {
          Prod_scrollImage.scrollBy({
              left: scrollAmount, // Use 'left' with positive value to scroll right
              behavior: 'smooth'
          });
      });
  }
});



//Product detail page js 
document.addEventListener('DOMContentLoaded', function () {
const prodInfo = document.querySelector('.prod_info');
const prodReview = document.querySelector('.prod_review');
const prodInfo_container = document.querySelector('.prod_information');
const prodReview_container = document.querySelector('.review_container');

// Function to handle display toggle
function toggleDisplay(selectedElement, otherElement, selectedContainer, otherContainer) {
  selectedElement.classList.add('selected');
  otherElement.classList.remove('selected');
  
  // Display the corresponding container and hide the other
  selectedContainer.style.display = 'block';
  otherContainer.style.display = 'none';
}

// Event listener for Product Information tab
if(prodInfo){
  prodInfo.addEventListener('click', () => {
    toggleDisplay(prodInfo, prodReview, prodInfo_container, prodReview_container);
  });
}

if(prodReview){
  prodReview.addEventListener('click', () => {
    toggleDisplay(prodReview, prodInfo, prodReview_container, prodInfo_container);
  });
}
});


// Product category filter dropdown
document.addEventListener('DOMContentLoaded', function () {
  const filterHeaders = document.querySelectorAll('.filter_type');
  if(filterHeaders){
    filterHeaders.forEach(header => {
      header.addEventListener('click', function () {
        const filterItems = this.nextElementSibling;  
        const span = header.querySelector("span");
  
    
        if (filterItems.classList.contains('hidden')) {
          filterItems.classList.remove('hidden');  
         span.innerHTML = cevronUpsvg; 
        } else {
          filterItems.classList.add('hidden');  
          span.innerHTML = cevronDownsvg; 
        }
      });
    });
  }

});


//Hero banner slider
document.addEventListener('DOMContentLoaded', function () {

const heroslider = document.querySelector('.heroslider');

if(heroslider){
  const slider = heroslider.querySelector('.heroslider_track');
  let slides = [...slider.children];


  // Initial slides position, so user can go from first to last slide (click to the left first)
slider.prepend(slides[slides.length - 1]);

// Creating dot for each slide
const createDots = (heroslider, initSlides) => {
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('heroslider_nav');

  initSlides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.classList.add('heroslider_dot');
    dot.setAttribute('aria-label', `Slide number ${index + 1}`);
    slide.dataset.position = index;
    slide.classList.contains('is-selected') && dot.classList.add('is-selected');
    dotsContainer.appendChild(dot);
  });

  heroslider.appendChild(dotsContainer);

  return dotsContainer;
}

// Updating relevant dot
const updateDot = slide => {
  const currDot = dotNav.querySelector('.is-selected');
  const targetDot = slide.dataset.position;

  currDot.classList.remove('is-selected');
  dots[targetDot].classList.add('is-selected');
}

// Handling arrow buttons
const handleArrowClick = arrow => {
  arrow.addEventListener('click', () => {
    slides = [...slider.children];
    const currSlide = slider.querySelector('.is-selected');
    currSlide.classList.remove('is-selected');
    let targetSlide;

    if (arrow.classList.contains('jsPrev')) {
      targetSlide = currSlide.previousElementSibling;
      slider.prepend(slides[slides.length - 1]);
    }

    if (arrow.classList.contains('jsNext')) {
      targetSlide = currSlide.nextElementSibling;
      slider.append(slides[0]);
    }

    targetSlide.classList.add('is-selected');
    updateDot(targetSlide);
  });
}

const buttons = heroslider.querySelectorAll('.heroslider_btn');
buttons.forEach(handleArrowClick);

// Handling dot buttons
const handleDotClick = dot => {
  const dotIndex = dots.indexOf(dot);
  const currSlidePos = slider.querySelector('.is-selected').dataset.position;
  const targetSlidePos = slider.querySelector(`[data-position='${dotIndex}']`).dataset.position;

  if (currSlidePos < targetSlidePos) {
    const count = targetSlidePos - currSlidePos;
    for (let i = count; i > 0; i--) nextBtn.click();
  }

  if (currSlidePos > targetSlidePos) {
    const count = currSlidePos - targetSlidePos;
    for (let i = count; i > 0; i--) prevBtn.click();
  }
}

const dotNav = createDots(heroslider, slides);
const dots = [...dotNav.children];
const prevBtn = buttons[0];
const nextBtn = buttons[1];

dotNav.addEventListener('click', e => {
  const dot = e.target.closest('button');
  if (!dot) return;
  handleDotClick(dot);
});

// Auto sliding
const slideTiming = 5000;
let interval;
const slideInterval = () => interval = setInterval(() => nextBtn.click(), slideTiming);

heroslider.addEventListener('mouseover', () => clearInterval(interval));
heroslider.addEventListener('mouseleave', slideInterval);
slideInterval();
}

});



//Testimonial slider
document.addEventListener('DOMContentLoaded', function () {
const wrapper = document.querySelector(".testimonial .wrapper");
if(wrapper){
  const carousel = document.querySelector(".testimonial .carousel");
const firstCardWidth = carousel.querySelector(".testimonial .card").offsetWidth;
const arrowBtns = document.querySelectorAll(".testimonial .wrapper .btn_move");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      const scrollAmount = btn.classList.contains("left") ? -firstCardWidth : firstCardWidth;
      carousel.scrollLeft += scrollAmount;

      // Allow a slight delay for the scroll update
      setTimeout(() => {
          // Handle infinite scroll manually on button click
          if (carousel.scrollLeft <= 0) {
              carousel.classList.add("no-transition");
              carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
              carousel.classList.remove("no-transition");
          } else if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
              carousel.classList.add("no-transition");
              carousel.scrollLeft = carousel.offsetWidth;
              carousel.classList.remove("no-transition");
          }
      }, 100); // Slight delay to account for smooth scrolling
  });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

}

});


//Product scroll
document.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll(".product_scroll").forEach(scrollSection => {
  const productWrapper = scrollSection.querySelector(".wrapper");
  const productCarousel = scrollSection.querySelector(".scroller");
  const productFirstCardWidth = productCarousel.querySelector(".prodcard").offsetWidth;
  const productArrowBtns = scrollSection.querySelectorAll(".btn_move");
  const productCarouselChildren = [...productCarousel.children];
  let isDraggingProduct = false, startXProduct, startScrollLeftProduct;

  let productCardPerView = Math.round(productCarousel.offsetWidth / productFirstCardWidth);

  // Insert copies of the last few cards at the beginning of the carousel for infinite scrolling
  productCarouselChildren.slice(-productCardPerView).reverse().forEach(card => {
      productCarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  // Insert copies of the first few cards at the end of the carousel for infinite scrolling
  productCarouselChildren.slice(0, productCardPerView).forEach(card => {
      productCarousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // Scroll the carousel to an appropriate position to hide the duplicate cards
  productCarousel.classList.add("no-transition");
  productCarousel.scrollLeft = productCarousel.offsetWidth;
  productCarousel.classList.remove("no-transition");


  productArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const scrollAmount = btn.classList.contains("left") ? -productFirstCardWidth : productFirstCardWidth;
        productCarousel.scrollLeft += scrollAmount;

        // Allow a slight delay for the scroll update
        setTimeout(() => {
            // Handle infinite scroll manually on button click
            if (productCarousel.scrollLeft <= 20) {
                productCarousel.classList.add("no-transition");
                productCarousel.scrollLeft = productCarousel.scrollWidth - (2 * productCarousel.offsetWidth);
                productCarousel.classList.remove("no-transition");
            } else if (Math.ceil(productCarousel.scrollLeft) >= productCarousel.scrollWidth - productCarousel.offsetWidth) {
                productCarousel.classList.add("no-transition");
                productCarousel.scrollLeft = productCarousel.offsetWidth;
                productCarousel.classList.remove("no-transition");
            }
        }, 100);
    });
});

// Infinite scroll functionality
const infiniteScrollProduct = () => {
    if (productCarousel.scrollLeft <= 0) {
        productCarousel.classList.add("no-transition");
        productCarousel.scrollLeft = productCarousel.scrollWidth - (2 * productCarousel.offsetWidth);
        productCarousel.classList.remove("no-transition");
    } else if (Math.ceil(productCarousel.scrollLeft) >= productCarousel.scrollWidth - productCarousel.offsetWidth) {
        productCarousel.classList.add("no-transition");
        productCarousel.scrollLeft = productCarousel.offsetWidth;
        productCarousel.classList.remove("no-transition");
    }
};


  // Drag functionality
  const dragStartProduct = (e) => {
      isDraggingProduct = true;
      productCarousel.classList.add("dragging");
      startXProduct = e.pageX;
      startScrollLeftProduct = productCarousel.scrollLeft;
  };

  const draggingProduct = (e) => {
      if (!isDraggingProduct) return;
      productCarousel.scrollLeft = startScrollLeftProduct - (e.pageX - startXProduct);
  };

  const dragStopProduct = () => {
      isDraggingProduct = false;
      productCarousel.classList.remove("dragging");
  };



  productCarousel.addEventListener("mousedown", dragStartProduct);
  productCarousel.addEventListener("mousemove", draggingProduct);
  document.addEventListener("mouseup", dragStopProduct);
  productCarousel.addEventListener("scroll", infiniteScrollProduct);
});

});



//Account Profile Dashboard Navigation

  document.addEventListener("DOMContentLoaded", function () {
    const dropHeads = document.querySelectorAll(".drop_head");

    dropHeads.forEach(navigation => {
        navigation.addEventListener("click", function () {

            const dashNavOption = document.querySelector('.dash_navOption');
            const isDescVisible = dashNavOption.classList.contains("show_dashnav");
            const span = this.querySelector("span");

            // Toggle the clicked description and change the sign
            if (!isDescVisible) {
                dashNavOption.classList.add("show_dashnav");
                span.innerHTML = cevronUpsvg;
            } else {
                dashNavOption.classList.remove("show_dashnav");
                span.innerHTML = cevronDownsvg;
            }
        });
    });
 });


//Product category
document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelector('.filtericon');
  const filterbox = document.querySelector('.filterbox');

  //Toggle the display of the filterbox
  if(filterBtn){
    filterBtn.addEventListener('click', function () {
      if (filterbox.style.display === 'block') {
        filterbox.style.display = 'none';
      } else {
        filterbox.style.display = 'block';
      }
    });
  }
 
});





//Scroll to top

let calcScrollValue = () => {
	let scrollProgress = document.querySelector(".scrollprogress");
	let progressValue = document.querySelector(".progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "grid";
	} else {
		scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(gray ${scrollValue}%, #C2C7D0 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;