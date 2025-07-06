// ✅ Animate cards when they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
