function imageGallery() {
    const hl = document.querySelector('.gallery-hightlight');
    const previews = document.querySelectorAll('.room-preview img');

    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('sm', 'big');
            hl.src = bigSrc;
        });
    });
}

imageGallery();