  // play list page
  const playlistButtons = document.querySelectorAll(".play-list .vid");
  const videoFrame = document.getElementById("video-frame");
  playlistButtons.forEach(button => {
    button.addEventListener("click", () => {
      const videoUrl = button.getAttribute("data-src");
      videoFrame.src = videoUrl;
    });
  });


  ///filter

  document.addEventListener("DOMContentLoaded", function () {
    const typeFilter = document.getElementById("typeFilter");
    const priceFilter = document.getElementById("priceFilter");

    
    const allBoxes = document.querySelectorAll(".pakage .box, .most-video .box");

    function filterCourses() {
      const selectedType = typeFilter.value;
      const selectedPrice = priceFilter.value;

      allBoxes.forEach(box => {
        const boxCategory = box.dataset.category;
        const boxPrice = parseInt(box.dataset.price);

        let matchType = selectedType === "all" || boxCategory === selectedType;
        let matchPrice = true;

        if (selectedPrice === "under1500") {
          matchPrice = boxPrice < 1500;
        } else if (selectedPrice === "1500to2000") {
          matchPrice = boxPrice >= 1500 && boxPrice <= 2000;
        } else if (selectedPrice === "above2000") {
          matchPrice = boxPrice > 2000;
        }

        if (matchType && matchPrice) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }
  
      typeFilter.addEventListener("change", filterCourses);
      priceFilter.addEventListener("change", filterCourses);
    }); 


// search 

  const searchInput = document.querySelector('.search');
  const allCourses = document.querySelectorAll('.box');

  searchInput.addEventListener('input', function () {
    const value = this.value.toLowerCase().trim();

    allCourses.forEach(course => {
      const title = course.querySelector('.head').textContent.toLowerCase();
      const instructor = course.querySelector('.descripe').textContent.toLowerCase();

      if (title.includes(value) || instructor.includes(value)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });

// all category 


  const btn = document.getElementById('btn');
  const secLinks = document.getElementById('sec');

  btn.addEventListener('click', ()=> {
if(secLinks.style.display==="none"){
secLinks.style.display="block"
}else{
secLinks.style.display="none"
}
  });


const icon = document.getElementById("icon");
const sear = document.getElementById("sear");

icon.addEventListener("click", () => {
  if (secLinks.style.display === "none") {
    secLinks.style.display = "block";
  } else {
    secLinks.style.display = "none";
  }
});
icon.addEventListener("click", () => {
  if (sear.style.display === "none") {
    sear.style.display = "block";
  } else {
    sear.style.display = "none";
  }
});

