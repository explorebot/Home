let header = document.querySelector('.header');
let images = [
    {
        url: "assets/header.jpg",
    },
    {
        url: "assets/header1.jpg",
    },
    {
        url: "assets/header2.jpg",
    },
    {
        url: "assets/header3.jpg",
    },
    {
        url: "assets/header4.jpg",
    },
];

let currentIndex = 0;

function changeBackground() {
    header.style.backgroundImage = `linear-gradient(
        rgba(17, 43, 90, 0.7),
        rgba(17, 43, 90, 0.7)
    ), url("${images[currentIndex].url}")`;

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 2000);
const bookingType = document.getElementById("booking-type");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");

  if (e.target.textContent === "Find Places") {
    form1.style.display = "block";
    form2.style.display = "none";
  } else if (e.target.textContent === "Make Trip") {
    form1.style.display = "none";
    form2.style.display = "block";
  }
});
Array.from(document.getElementsByClassName('travelling')).forEach((input, i) => {
    input.addEventListener('input', (event) => {
        const inputValue = event.target.value;
        const caretIcons = document.querySelectorAll('.bi-caret-down-fill'); // Select all caret-down icons

        if (inputValue.length > 0) {
            caretIcons[i].style.transform = "rotate(180deg)";
        } else {
            caretIcons[i].style.transform = "rotate(0deg)";
        }
    });
});

