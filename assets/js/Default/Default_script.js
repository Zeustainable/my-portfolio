// ============================ BACK-TO-TOP ============================ //

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

// =========================== PROGRESS BAR =========================== //

// Animate progress bars when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                bar.style.transition = 'width 1.5s ease-in-out';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// ============================= DOWNLOAD ============================= //

function btnDownload() {
    window.print();
}