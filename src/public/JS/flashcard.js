//handle active header
document.querySelector(".nav-item.active").classList.remove("active")
document.querySelectorAll(".nav-item")[3].classList.add("active")

//handle render and search flashcards


const listData = []
const input = document.querySelectorAll(".input")
input.forEach(item => {
    listData.push({
        frontSide: item.getAttribute("frontSide"),
        backSide: item.getAttribute("backSide"),
    })
})

const listCard = document.querySelector(".list")
const html = listData.map(card => {
    return `
          <div class="flip-box swiper-slide">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h2>${card.frontSide}</h2>
        </div>
        <div class="flip-box-back">
          <h2>${card.backSide}</h2>
        </div>
      </div>
    </div>
    `
}).join("")
listCard.innerHTML = html;


// handle swiper and flip card


const flipBoxs = document.querySelectorAll(".flip-box")
const inner = document.querySelector(".flip-box-inner")
flipBoxs.forEach(flipBox => {
    flipBox.addEventListener("click", function(){
        flipBox.classList.toggle("active")
    })
})

const p_productList = new Swiper('.wraper', {
        slidesPerView:1,
        slidesPerGroup:1,
        spaceBetween: 10,
        // loop:true,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
})

const contents = document.querySelectorAll(".flip-box-inner h2")
contents.forEach(content => {
  if(content.innerText.length >= 260){
    content.style.fontSize = '24px'
  }
})


