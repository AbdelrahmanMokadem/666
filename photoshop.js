const sectionTitle = document.getElementById("head");
sectionTitle.style.textAlign = "center";
sectionTitle.style.margin = "40px 0";
sectionTitle.style.color = "black";


const descripe = document.getElementById("descripe");
descripe.style.textAlign = "center";
descripe.style.width = "80%";
descripe.style.margin = "0 auto";
descripe.style.backgroundColor = "#d8e8f7";
descripe.style.borderRadius = "10px";
descripe.style.borderRadius = "10px";
descripe.style.padding = "20px";



document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      image: "Images/noor.avif",
      title: "تعلم الفوتوشوب مع نور ديزاين   ",
      author: "نور ديزاين",
      price: "999 ج.م",
      link: "noor_design.html"
    },
    {
      image: "Images/makramPhoto.jpg",
      title: "تعلم الفوتوشوب مع مصطفي مكرم",
      author: "مصطفي مكرم",
      price: "1500 ج.م",
      link: "mostafaMakram.html"
    },
    {
      image: "Images/ahmedmostafa.jpg",
      title: "تعلم الفوتوشوب مع احمد مصطفي ",
      author: "احمد مصطفي",
      price: "1500 ج.م",
      link: "ahmed_mostafa.html"
    },
    {
      image: "Images/illustratur.jpg",
      title: "تعلم الاليستريتور مع عمرو عطالله",
      author: "عمرو عطالله",
      price: "1500 ج.م",
      link: "illustratur_amr.html"
    },
    {
      image: "Images/mohamed_kaial.jpg",
      title: "تعلم الليستريتور مع محمد خيال",
      author: "محمد خيال",
      price: "1500 ج.م",
      link: "illustratur_mohamed.html"
    }
  ];

  const container = document.getElementById("photoshop-courses-container");

  if (!container) return;

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "start";
  container.style.gap = "20px";
  container.style.padding = "20px";

  courses.forEach(course => {
    const card = document.createElement("div");
    card.style.width = "300px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    card.style.background = "#fff";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.overflow = "hidden";

    const img = document.createElement("img");
    img.src = course.image;
    img.alt = course.title;
    img.style.width = "100%";

    const title = document.createElement("p");
    title.textContent = course.title;
    title.style.fontWeight = "bold";
    title.style.fontSize = "16px";
    title.style.margin = "10px";

    const author = document.createElement("p");
    author.textContent = course.author;
    author.style.fontSize = "14px";
    author.style.color = "#555";
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
