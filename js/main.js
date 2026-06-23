document.addEventListener('DOMContentLoaded', function () {

    var targets = document.querySelectorAll('section, .project-card, .skill-group');
    targets.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
