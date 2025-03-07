document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        const imageBox = document.getElementById('imageBox');
        imageBox.innerHTML = `<img src="${this.src}" alt="${this.alt}" style="width: 100%; height: auto;">`;
    });
});