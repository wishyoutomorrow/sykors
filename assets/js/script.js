

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
    console.log()
    if(e.target.closest(".accordion__item")){
        e.target.closest(".accordion__item").classList.toggle("accordion__item_active")
    }
})