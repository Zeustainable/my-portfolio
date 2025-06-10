window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backToTopBtn = document.getElementById('back-to-top');

    if (scrollPosition > 100) {
        backToTopBtn.style.opacity = 1;
    } else {
        backToTopBtn.style.opacity = 0;
    }
});
  
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function btnDownload() {
    window.print();
}