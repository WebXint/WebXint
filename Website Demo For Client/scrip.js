document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded with animation!');
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".demo-images-grid img");

    images.forEach(img => {
        let pressTimer;

        img.addEventListener("touchstart", () => {
            pressTimer = setTimeout(() => {
                img.classList.add("is-popped-up");
            }, 400); // 400ms long press
        });

        img.addEventListener("touchend", () => {
            clearTimeout(pressTimer);
            img.classList.remove("is-popped-up");
        });

        img.addEventListener("click", () => {
            img.classList.toggle("is-popped-up");
            setTimeout(() => img.classList.remove("is-popped-up"), 1200); // auto remove
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded with animation!');
});
