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
      const nextSibling = goal.nextElementSibling; // Lấy phần tử ul liền kề
      const goalItem = goal.parentNode; // Lấy phần tử cha .goal
  
      goalItem.addEventListener('mouseover', () => {
        goal.style.color = '#c2e7fe'; // Màu khi di chuột qua
        goal.style.cursor = 'pointer'; // Thay đổi con trỏ chuột
        if (nextSibling && nextSibling.tagName === 'UL') {
          nextSibling.style.display = 'block'; // Hiển thị danh sách
        }
      });
  
      goalItem.addEventListener('mouseout', () => {
        goal.style.color = '#062F85'; // Màu mặc định
        if (nextSibling && nextSibling.tagName === 'UL') {
          nextSibling.style.display = 'none'; // Ẩn danh sách
        }
      });
    });
  });
