//I referred to this website for info: https://www.w3schools.com/jsref/event_onload.asp

let images = document.querySelectorAll(".thumbnails img");

function toggleTitle(imageElement) {
    let existingTitle = imageElement.parentElement.querySelector(".image-title");

    if (existingTitle) {
        existingTitle.remove(); 
    } else {
        const title = document.createElement("p");
        title.textContent = imageElement.alt;
        title.classList.add("image-title");
        title.style.marginTop = "10px";
        title.style.fontSize = "18px";
        title.style.color = "#555";
        imageElement.parentElement.appendChild(title); // Appends it after the image
    }
}

images.forEach((image) => {
    image.addEventListener("click", () => toggleTitle(image));
});
