function fadescroll(selector, offset=100) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= offset) {
            opacity = 1 - currentScroll / offset;
        } else {
            opacity = 0;
        }
        document.querySelector(selector).style.opacity = opacity;
    });
}
