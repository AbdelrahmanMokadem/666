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

//courses Home  page
    const courses = [
      {image: "Images/photoshop.jpg",
        title: "باقة التصميم والجرافيك",
        author: "Coursat Partners (Plan-B)",
        price: "3945 ج.م",
        link: "photoshop.html"
      },
      {
        image: "Images/programming.jpg",
        title: "باقة البرمجة ومهارات العمل الحر",
        author: "Coursat Partners (Plan-B)",
        price: "3945 ج.م",
        link: ""
      },
      {
        image: "Images/more_view/304e65f1-4a6c-47a9-842b-72d0ee1bf40f_اللغات (1).jpg",
        title: "باقة دليلك الشامل للغة الإنجليزية",
        author: "خبراء محترفون",
        price: "3945 ج.م",
        link: "english.html"
      },
      {
        image: "Images/videoediting.jpg",
        title: "باقة تعلم تحرير الفيديو",
        author: "Coursat Partners (Plan-B)",
        price: "3945 ج.م",
        link: "video.html"
      },
    ];

    const container = document.getElementById("courses-container");

    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    container.style.padding = "20px";
    container.style.boxSizing = "border-box";

    courses.forEach(course => {
      const card = document.createElement("div");
      card.style.width = "300px";
      card.style.border = "1px solid #ccc";
      card.style.borderRadius = "10px";
      card.style.overflow = "hidden";
      card.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
      card.style.background = "#fff";
      card.style.fontFamily = "sans-serif";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";


      const img = document.createElement("img");
      img.src = course.image;
      img.alt = course.title;
      img.style.width = "100%";
      img.style.objectFit = "cover";

      const title = document.createElement("p");
      title.textContent = course.title;
      title.style.fontWeight = "bold";
      title.style.fontSize = "16px";
      title.style.margin = "10px";


      const author = document.createElement("p");
      author.textContent = course.author;
      author.style.fontSize = "12px";
      author.style.color = "#888";
      author.style.margin = "5px 10px";

const link = document.createElement("a");
link.href = course.link; 
link.textContent = `اشترك الآن ${course.price}`;
link.style.display = "inline-block";
link.style.margin = "10px";
link.style.padding = "10px";
link.style.background = "#043377";
link.style.color = "#fff";
link.style.border = "none";
link.style.borderRadius = "5px";
link.style.cursor = "pointer";
link.style.textDecoration = "none";
link.style.textAlign = "center";

      // Add Elements To Cards
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(link);
      container.appendChild(card);
    });
















const newSection = document.createElement("div");
newSection.style.marginTop = "40px";
newSection.style.padding = "20px";
newSection.style.display = "flex";
newSection.style.flexWrap = "wrap";
newSection.style.justifyContent = "center";
newSection.style.gap = "20px";


const sectionTitle = document.createElement("h2");
sectionTitle.textContent = "الكورسات الاكثر مشاهده";
sectionTitle.style.textAlign = "center";
sectionTitle.style.fontFamily = "sans-serif";
sectionTitle.style.marginBottom = "20px";


const suggestedCourses = [
  {
    image: "Images/more_view/html.jpg",
    title: "تعلم لغه HTML",
    author: "اسامه الزيرو",
    price: "1500 ج.م"
  },
  {
    image: "Images/more_view/css.jpg",
    title: "تعلم لغه CSS",
    author: "اسامه الزيرو",
    price: "999 ج.م"
  },
  {
    image: "Images/more_view/js.jpg",
    title: "تعلم لغه JS",
    author: "اسامه محمد",
    price: "1500 ج.م"
  },
  {
    image: "Images/more_view/adobe.jpg",
    title: "تعلم برنامج بريمير",
    author: "مصطفي مكرم",
    price: "999 ج.م"
  },
  {
    image: "Images/adobe_amr.jpg",
    title: "تعلم برنامج  بريمير",
    author: "عمرو عطالله",
    price: "1500 ج.م"
  },
  {
    image: "Images/davinci.jpg",
    title: "تعلم برنامج دافنشي",
    author: "هيثم حسن",
    price: "999 ج.م"
  },
  {
    image: "Images/gr.jpg",
    title: "تعلم برنامج كاب كات ",
    author: "محمد جمال",
    price: "1500 ج.م"
  },
  {
    image: "Images/photoshop.jpg",
    title: "تعلم الفوتوشوب و التحرير علي الصور",
    author: "Plan-B",
    price: "999 ج.م"
  },
];


suggestedCourses.forEach(course => {
  const card = document.createElement("div");
  card.style.width = "300px";
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.fontFamily = "sans-serif";
  card.style.background = "#fff";
  card.style.overflow = "hidden";

  const img = document.createElement("img");
  img.src = course.image;
  img.alt = course.title;
  img.style.width = "100%";
  img.style.objectFit = "cover";

  const title = document.createElement("p");
  title.textContent = course.title;
  title.style.fontWeight = "bold";
  title.style.fontSize = "16px";
  title.style.margin = "10px";
  title.style.textAlign = "center";

  const info = document.createElement("p");
  info.textContent = `كورس ${course.count}`;
  info.style.fontSize = "14px";
  info.style.color = "#555";
  info.style.margin = "0 10px";
  info.style.textAlign = "center";

  const author = document.createElement("p");
  author.textContent = course.author;
  author.style.fontSize = "15px";
  author.style.color = "#888";
  author.style.margin = "5px 10px";
  author.style.textAlign = "center";

const link = document.createElement("a");
link.href = ""; 
link.textContent = `اشترك الآن ${course.price}`;
link.style.display = "inline-block";
link.style.margin = "10px";
link.style.padding = "10px";
link.style.background = "#043377";
link.style.color = "#fff";
link.style.border = "none";
link.style.borderRadius = "5px";
link.style.cursor = "pointer";
link.style.textDecoration = "none";
link.style.textAlign = "center";


  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(author);
card.appendChild(link);


  newSection.appendChild(card);
});


const wrapper = document.createElement("div");
wrapper.appendChild(sectionTitle);
wrapper.appendChild(newSection);


const footer = document.querySelector("footer");
document.body.insertBefore(wrapper, footer);




// Pakage Deatials

document.addEventListener("DOMContentLoaded", () => {
  const photoshopCourses = [
    {
      image: "Images/photoshop.jpg",
      title: "تعلم الفوتوشوب و التحرير على الصور",
      author: "Plan-B",
      price: "999 ج.م",
      link: "checkout.html"
    },
    {
      image: "Images/adobe_amr.jpg",
      title: "كورس الفوتوشوب المتقدم",
      author: "عمرو عطالله",
      price: "1500 ج.م",
      link: "checkout.html"
    }
  ];

  const container = document.getElementById("photoshop-courses-container");

  if (!container) {
    console.error("العنصر photoshop-courses-container مش موجود");
    return;
  }

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.gap = "20px";
  container.style.padding = "20px";
  container.style.boxSizing = "border-box";

  photoshopCourses.forEach(course => {
    const card = document.createElement("div");
    card.style.width = "300px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "10px";
    card.style.overflow = "hidden";
    card.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    card.style.background = "#fff";
    card.style.fontFamily = "sans-serif";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = course.image;
    img.alt = course.title;
    img.style.width = "100%";
    img.style.objectFit = "cover";

    const title = document.createElement("p");
    title.textContent = course.title;
    title.style.fontWeight = "bold";
    title.style.fontSize = "16px";
    title.style.margin = "10px";

    const author = document.createElement("p");
    author.textContent = course.author;
    author.style.fontSize = "12px";
    author.style.color = "#888";
    author.style.margin = "5px 10px";

    const link = document.createElement("a");
    link.href = course.link;
    link.textContent = `اشترك الآن ${course.price}`;
    link.style.display = "inline-block";
    link.style.margin = "10px";
    link.style.padding = "10px";
    link.style.background = "#043377";
    link.style.color = "#fff";
    link.style.border = "none";
    link.style.borderRadius = "5px";
    link.style.cursor = "pointer";
    link.style.textDecoration = "none";
    link.style.textAlign = "center";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(link);

    container.appendChild(card);
  });
});
