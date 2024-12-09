document.addEventListener("DOMContentLoaded", () => {
    const TopScroller = document.getElementById("TopScroller");

    // Top Button
    TopScroller.addEventListener("click", () => {
        window.scrollTo({top : 0, behavior: "smooth"});
    });

    // Image Scroller
    const images = ["Image Slider/Auditorium.png", "Image Slider/Chem.png", "Image Slider/Football.png", "Image Slider/Gym Wall.png", "Image Slider/Library.png", "Image Slider/Maths.png", "Image Slider/Playground 1.png", "Image Slider/Tennis.png"];
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("Scroller").src = images[currentIndex];
    }, 3141.1592653589793238462643383279502885419716935993751);
});