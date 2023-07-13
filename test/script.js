const audioElement = document.getElementById('audio');
const hoverImage = document.querySelector("hover-image");

hoverImage.addEventListener('mouseenter', () => {
    audioElement.play();
});

hoverImage.addEventListener('mouseleave', () => {
    audioElement.pause();
    audioElement.currentTime = 0;
});
