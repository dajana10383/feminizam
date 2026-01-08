// Particle Animation
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 15 + 10;
        this.opacity = Math.random() * 0.3 + 0.2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillText('♀', this.x, this.y);
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Smooth Scrolling
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
        }, 800);
    }
});

// Contact Form with AJAX
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    };

    // Simulate AJAX request
    setTimeout(() => {
        $('#successMessage').fadeIn();
        $('#contactForm')[0].reset();
        
        setTimeout(() => {
            $('#successMessage').fadeOut();
        }, 5000);
    }, 500);

    /* Real AJAX would look like this:
    $.ajax({
        url: 'your-backend-url.php',
        method: 'POST',
        data: formData,
        success: function(response) {
            $('#successMessage').fadeIn();
            $('#contactForm')[0].reset();
        },
        error: function(error) {
            alert('Došlo je do greške. Molimo pokušajte ponovo.');
        }
    });
    */
});

// Fade-in animation on scroll
$(window).on('scroll', function() {
    $('section').each(function() {
        const elementTop = $(this).offset().top;
        const viewportBottom = $(window).scrollTop() + $(window).height();
        
        if (viewportBottom > elementTop + 100) {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
});

// Initial section styling for animation
$('section').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'transition': 'all 0.6s ease-out'
});
