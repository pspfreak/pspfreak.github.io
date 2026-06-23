document.addEventListener('DOMContentLoaded', function () {

    // --- Typing animation ---

    var phrases = [
        'build automation pipelines.',
        'am a Systems Developer.',
        'build production tooling.',
        'am a Data Analyst.',
        'build things that probably didn\'t need building.',
        'am a Home Lab Enthusiast.',
        'build IoT firmware from scratch.',
        'am always learning.'
    ];

    var typerEl = document.getElementById('typer');
    for (var i = phrases.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = phrases[i];
        phrases[i] = phrases[j];
        phrases[j] = temp;
    }

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var typeSpeed = 70;
    var deleteSpeed = 40;
    var pauseEnd = 2000;
    var pauseStart = 500;

    function type() {
        var current = phrases[phraseIndex];

        if (!deleting) {
            typerEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                setTimeout(function () {
                    deleting = true;
                    type();
                }, pauseEnd);
                return;
            }
            setTimeout(type, typeSpeed);
        } else {
            typerEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, pauseStart);
                return;
            }
            setTimeout(type, deleteSpeed);
        }
    }

    if (typerEl) {
        setTimeout(type, 800);
    }

    // --- Scroll fade-in ---

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

    // --- Smooth scroll ---

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
