
    const toggle = document.getElementById("themeToggle")

toggle.onclick = () =>{
        document.body.classList.toggle("light")
 toggle.innerText =
    document.body.classList.contains("light") ? "☀️" : "🌙"
}


const toggle = document.getElementById("themeToggle")

toggle.onclick = () =>{
 document.body.classList.toggle("light")
 toggle.innerText =
 document.body.classList.contains("light") ? "☀️" : "🌙"
}


const images = document.querySelectorAll(".designImg")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")

images.forEach(img => {
    img.onclick = () => {
        lightbox.classList.remove("hidden")
        lightboxImg.src = img.src
    }
})

lightbox.onclick = () => {
    lightbox.classList.add("hidden")
}