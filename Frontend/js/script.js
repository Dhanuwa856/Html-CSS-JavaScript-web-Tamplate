// Nav bar menu Icon function

const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const hideList = document.getElementById("menu");

openMenu.addEventListener("click", function () {
  hideList.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "flex";
});
closeMenu.addEventListener("click", function () {
  hideList.setAttribute("style", "");
  openMenu.style.display = "flex";
  closeMenu.style.display = "none";
});

// Nav bar position sticky

function handleStickyNav() {
  const header = document.querySelector(".nav-contact");
  const navbar = document.querySelector(".nav-bar");
  const reHome = document.querySelector(".re-home");

  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("fixed");
    reHome.classList.add("block");
  } else {
    navbar.classList.remove("fixed");
    reHome.classList.remove("block");
  }
}

// Add an event listener for scrolling
window.addEventListener("scroll", handleStickyNav);

// Initial setup
handleStickyNav();

// Re Home Button function

function scrollToElement() {
  // Get the target element
  const targetElement = document.getElementById("targetElement");

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// counter Animation
const counters = document.querySelectorAll(".count");
const speed = 2000;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 70);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
// food menu button function

function toggleClass(clickedButton) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.classList.remove("active-btn"));
  clickedButton.classList.add("active-btn");
}

function toggleCategory(category) {
  // Hide all category content
  const allCategoryContent = document.querySelectorAll(".category-content");
  allCategoryContent.forEach((content) => content.classList.remove("active"));

  // Show the selected category content
  const selectedCategoryContent = document.getElementById(`${category}Content`);
  selectedCategoryContent.classList.add("active");
}

//autoScrollSection

const autoScrollSection = document.getElementById("autoScrollSection");
let scrollAmount = 1;

function scrollSection() {
  scrollAmount += 250;
  autoScrollSection.scrollLeft = scrollAmount;

  if (
    scrollAmount >=
    autoScrollSection.scrollWidth - autoScrollSection.clientWidth
  ) {
    scrollAmount = 1;
    autoScrollSection.scrollLeft = true; // Reset scroll position
  }
}

const scrollInterval = setInterval(scrollSection, 4000); // Adjust the interval time for scrolling speed

const cardAs = document.querySelectorAll(".card-a");
const cardBs = document.querySelectorAll(".card-b");
const cardCs = document.querySelectorAll(".card-c");
const cardDs = document.querySelectorAll(".card-d");
const cardXs = document.querySelectorAll(".card-x");
const cardYs = document.querySelectorAll(".card-y");
const cardZs = document.querySelectorAll(".card-z");
const cardPs = document.querySelectorAll(".card-p");
const cardImgs = document.querySelectorAll(".card-img");
const notSees = document.querySelectorAll(".not-see");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("transform0");
      entry.target.classList.add("see");

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("transform0");
      entry.target.classList.remove("see");
    }
    // entry.target.style.width = intersecting ? "200px":"50px";
  });
}, options);

// observer.observe(primaryBtn);

cardAs.forEach((cardA) => {
  observer.observe(cardA);
});
cardBs.forEach((cardB) => {
  observer.observe(cardB);
});
cardCs.forEach((cardC) => {
  observer.observe(cardC);
});
cardDs.forEach((cardD) => {
  observer.observe(cardD);
});
cardXs.forEach((cardX) => {
  observer.observe(cardX);
});
cardYs.forEach((cardY) => {
  observer.observe(cardY);
});
cardZs.forEach((cardZ) => {
  observer.observe(cardZ);
});
cardPs.forEach((cardP) => {
  observer.observe(cardP);
});
cardImgs.forEach((cardImg) => {
  observer.observe(cardImg);
});
notSees.forEach((notSee) => {
  observer.observe(notSee);
});
