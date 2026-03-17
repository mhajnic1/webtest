function changeTitle() {
    const title = document.getElementById("title");
    title.innerText = "🚀 You clicked the button!";
    title.style.transform = "scale(1.2)";
    setTimeout(() => {
        title.style.transform = "scale(1)";
    }, 300);
}

// Animate cards when page loads
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
});
