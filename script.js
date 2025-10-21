// Modern JavaScript for Arena Tuitions Website

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle menu on hamburger click
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            }
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // JEE/NEET PILL SMOOTH SCROLL
    // ============================================
    const jeeNeetPill = document.querySelector('.pill-clickable[href="#jee-neet-feature"]');
    if (jeeNeetPill) {
        jeeNeetPill.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#jee-neet-feature');
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Extra offset for visibility
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add highlight animation
                targetSection.style.animation = 'highlightFeature 2s ease-out';
                setTimeout(() => {
                    targetSection.style.animation = '';
                }, 2000);
            }
        });
    }

    // ============================================
    // NAVBAR SCROLL EFFECTS
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and background on scroll
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const animateElements = document.querySelectorAll('.feature-block, .success-card, .course-modern, .review-modern, .info-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ============================================
    // FORM HANDLING
    // ============================================
    const contactForm = document.querySelector('.form-modern form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const studentName = this.querySelector('input[type="text"]').value;
            const className = this.querySelectorAll('input[type="text"]')[1].value;
            const phone = this.querySelector('input[type="tel"]').value;
            const subject = this.querySelector('select').value;
            
            // Create WhatsApp message
            const message = `New Demo Class Request:%0A%0AStudent: ${studentName}%0AClass: ${className}%0APhone: ${phone}%0ASubject: ${subject}`;
            const whatsappUrl = `https://wa.me/919891440504?text=${message}`;
            
            // Show success feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> <span>Success! Opening WhatsApp...</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            // Open WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                
                // Reset form
                this.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                }, 3000);
            }, 500);
        });
        
        // Real-time validation feedback
        const formInputs = contactForm.querySelectorAll('input, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#f87171';
                } else {
                    this.style.borderColor = '#10b981';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#667eea';
            });
        });
    }

    // ============================================
    // REVIEWS CAROUSEL AUTO-SCROLL (OPTIONAL)
    // ============================================
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    if (reviewsCarousel && window.innerWidth < 769) {
        let isScrolling;
        
        reviewsCarousel.addEventListener('scroll', function() {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                // Snap to closest card
                const scrollLeft = reviewsCarousel.scrollLeft;
                const cardWidth = reviewsCarousel.querySelector('.review-modern').offsetWidth;
                const targetIndex = Math.round(scrollLeft / cardWidth);
                reviewsCarousel.scrollTo({
                    left: targetIndex * cardWidth,
                    behavior: 'smooth'
                });
            }, 100);
        });
    }

    // ============================================
    // PERFORMANCE: LAZY LOAD IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // ACCESSIBILITY: FOCUS TRAP IN MOBILE MENU
    // ============================================
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    if (navMenu) {
        trapFocus(navMenu);
    }

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c🎓 Arena Tuitions - Modern Website', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cBuilt with ❤️ for students and parents', 'font-size: 12px; color: #718096;');

    // ============================================
    // MODAL FUNCTIONALITY
    // ============================================
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');

    // Open Privacy Policy Modal
    if (privacyLink && privacyModal) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            privacyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Open Terms of Service Modal
    if (termsLink && termsModal) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close Modal Function
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Close on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
});

// ============================================
// UTILITY: DEBOUNCE FUNCTION
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll and resize events
window.addEventListener('resize', debounce(function() {
    // Handle resize events if needed
}, 250));