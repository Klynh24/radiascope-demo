function includeHTML() {
    
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

includeHTML();

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const heroBannerItems = document.querySelectorAll(".hero-banner-item");
heroBannerItems.forEach((item) => {
    item.addEventListener("click", () => {
        const targetBannerId = item.dataset.target;
        const slideIndex = Array.from(
            document.querySelectorAll(".swiper-slide")
        ).findIndex((slide) => slide.id === targetBannerId);
        swiper.slideTo(slideIndex);
    });
});

var endorsementSwiper = new Swiper(".endorsementSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', (event) => {
    const sustainableGoals = document.querySelectorAll('.goal h3');
  
    sustainableGoals.forEach(goal => {
      const nextSibling = goal.nextElementSibling; 
      const goalItem = goal.parentNode; 
  
      goalItem.addEventListener('mouseover', () => {
        goal.style.color = '#c2e7fe'; 
        goal.style.cursor = 'pointer'; 
        if (nextSibling && nextSibling.tagName === 'UL') {
          nextSibling.style.display = 'block'; 
        }
      });
  
      goalItem.addEventListener('mouseout', () => {
        goal.style.color = '#062F85'; 
        if (nextSibling && nextSibling.tagName === 'UL') {
          nextSibling.style.display = 'none'; 
        }
      });
    });
  });
