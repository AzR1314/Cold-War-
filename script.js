document.addEventListener("DOMContentLoaded", function () {
    let events = document.querySelectorAll(".event");

    const showEvent = () => {
        events.forEach((event) => {
            let position = event.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                event.style.opacity = "1";
                event.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", showEvent);
    showEvent();
});
