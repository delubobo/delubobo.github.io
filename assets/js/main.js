/* ==========================================================================
   MAIN JAVASCRIPT - Core Functionality
   ========================================================================== */

class PortfolioApp {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    /**
     * Setup all functionality
     */
    setup() {
        this.initTheme();
        this.initNavigation();
        this.initScrollEffects();
        this.initAnimations();
        this.initMobileMenu();
        this.initContactForm();
        this.initSmoothScroll();
    }

    /**
     * Initialize theme system
     */
    initTheme() {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', this.theme);

        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.innerHTML = this.theme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        document.body.appendChild(themeToggle);

        // Handle theme toggle
        themeToggle.addEventListener('click', () => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);

            // Update icon with animation
            const icon = themeToggle.querySelector('i');
            icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            icon.classList.add('theme-icon-enter');
            setTimeout(() => icon.classList.remove('theme-icon-enter'), 500);
        });
    }

    /**
     * Initialize navigation functionality
     */
    initNavigation() {
        const nav = document.querySelector('.nav-header');
        if (!nav) return;

        // Highlight active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const highlightNav = () => {
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNav);
        highlightNav(); // Call once on load
    }

    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        const nav = document.querySelector('.nav-header');
        if (!nav) return;

        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // Add shadow when scrolled
            if (currentScrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
        });
    }

    /**
     * Initialize scroll animations
     */
    initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // Animate stat numbers
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber && !statNumber.classList.contains('counted')) {
                        this.animateStatNumber(statNumber);
                    }

                    // Animate skill bars
                    const skillProgress = entry.target.querySelector('.skill-progress');
                    if (skillProgress && !skillProgress.classList.contains('animated')) {
                        const level = skillProgress.getAttribute('data-level');
                        skillProgress.style.width = level + '%';
                        skillProgress.classList.add('animated');
                    }
                }
            });
        }, observerOptions);

        // Observe elements with fade-in-up class
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.classList.add('fade-in-up');
            observer.observe(el);
        });

        // Observe cards, timeline items, project cards
        document.querySelectorAll('.card, .timeline-item, .project-card, .stat-box, .skill-item').forEach(el => {
            el.classList.add('fade-in-up');
            observer.observe(el);
        });
    }

    /**
     * Animate stat numbers with counting effect
     * @param {HTMLElement} element - Stat number element
     */
    animateStatNumber(element) {
        element.classList.add('counted');
        const target = parseFloat(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const stepDuration = duration / steps;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                element.textContent = (target > 10 ? Math.ceil(current) : current.toFixed(1)) + suffix;
                setTimeout(updateNumber, stepDuration);
            } else {
                element.textContent = target + suffix;
            }
        };

        updateNumber();
    }

    /**
     * Initialize mobile menu
     */
    initMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (!menuBtn || !mobileMenu) return;

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.className = mobileMenu.classList.contains('active')
                ? 'fas fa-times'
                : 'fas fa-bars';
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    /**
     * Initialize contact form
     */
    initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Get contact email from data
            const contactEmail = window.portfolioData?.contact?.email || 'roylanuzoma@gmail.com';

            // Create mailto link
            const subject = encodeURIComponent(`Message from ${name} via Portfolio`);
            const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

            // Show feedback
            const feedback = document.getElementById('form-feedback');
            if (feedback) {
                feedback.textContent = 'Thank you! Opening your email client...';
                feedback.classList.add('alert', 'alert-success');
                feedback.style.opacity = '1';

                form.reset();

                setTimeout(() => {
                    feedback.style.opacity = '0';
                    setTimeout(() => {
                        feedback.className = '';
                    }, 300);
                }, 4000);
            }
        });
    }

    /**
     * Initialize smooth scrolling for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 70; // Account for fixed nav

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Utility functions
const utils = {
    /**
     * Format date to readable string
     * @param {string} dateStr - Date string
     * @returns {string} Formatted date
     */
    formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    },

    /**
     * Truncate text to specified length
     * @param {string} text - Text to truncate
     * @param {number} length - Max length
     * @returns {string} Truncated text
     */
    truncate(text, length = 100) {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    },

    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Create element with attributes and content
     * @param {string} tag - HTML tag
     * @param {Object} attrs - Attributes object
     * @param {string|HTMLElement} content - Content
     * @returns {HTMLElement} Created element
     */
    createElement(tag, attrs = {}, content = '') {
        const el = document.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => {
            if (key === 'className') {
                el.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    el.dataset[dataKey] = dataValue;
                });
            } else {
                el.setAttribute(key, value);
            }
        });

        if (typeof content === 'string') {
            el.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            el.appendChild(content);
        }

        return el;
    }
};

// Initialize app when DOM is ready
const app = new PortfolioApp();

// Make utilities globally available
window.portfolioUtils = utils;
