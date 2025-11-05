/* ==========================================================================
   COMPONENTS - Dynamic Component Rendering
   ========================================================================== */

class PortfolioComponents {
    constructor(data) {
        this.data = data;
    }

    /**
     * Render profile information in hero section
     * @param {string} containerId - Container element ID
     */
    renderHero(containerId = 'hero-section') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.profile) return;

        const { profile } = this.data;

        container.innerHTML = `
            <div class="container">
                <div class="hero-content grid grid-2 gap-xl" style="align-items: center;">
                    <div class="fade-in-up">
                        <h1 class="mb-2">${profile.name}</h1>
                        <p class="mb-2" style="font-size: var(--font-size-2xl); opacity: 0.9;">${profile.titles}</p>
                        <p class="mb-3" style="font-size: var(--font-size-xl); color: var(--construction-orange);">${profile.tagline}</p>
                        <p class="mb-4" style="font-size: var(--font-size-lg); opacity: 0.85;">${profile.bio}</p>
                        <div class="flex gap-md" style="flex-wrap: wrap;">
                            <a href="#projects" class="btn btn-primary">
                                <i class="fas fa-rocket"></i> View Projects
                            </a>
                            <a href="#contact" class="btn btn-outline">
                                <i class="fas fa-envelope"></i> Get In Touch
                            </a>
                            <a href="${profile.cvUrl}" class="btn btn-outline" download>
                                <i class="fas fa-download"></i> Download CV
                            </a>
                        </div>
                    </div>
                    <div class="flex-center fade-in-up">
                        <img src="${profile.imageUrl}" alt="${profile.name}" class="profile-img">
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render statistics section
     * @param {string} containerId - Container element ID
     */
    renderStats(containerId = 'stats-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.stats) return;

        container.innerHTML = this.data.stats.map(stat => `
            <div class="stat-box fade-in-up">
                ${stat.icon ? `<div class="stat-icon"><i class="${stat.icon}"></i></div>` : ''}
                <div class="stat-number" data-target="${stat.value}" data-suffix="${stat.suffix || ''}">
                    ${stat.value > 10 ? '0' : '0.0'}${stat.suffix || ''}
                </div>
                <p class="stat-label">${stat.label}</p>
            </div>
        `).join('');
    }

    /**
     * Render education timeline
     * @param {string} containerId - Container element ID
     */
    renderEducation(containerId = 'education-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.education) return;

        container.innerHTML = `
            <div class="timeline">
                ${this.data.education.map(edu => {
                    const details = edu.details.map(d =>
                        d.type === 'badge'
                            ? `<span class="badge">${d.text}</span>`
                            : `<p style="margin-top: var(--spacing-md); color: var(--text-secondary);">${d.text}</p>`
                    ).join('');

                    return `
                        <div class="timeline-item fade-in-up">
                            <div class="timeline-content">
                                <div class="timeline-date">${edu.date}</div>
                                <h3 class="timeline-title">${edu.degree}</h3>
                                <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-md);">
                                    ${edu.institution}
                                </p>
                                ${details}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    /**
     * Render awards and recognition
     * @param {string} containerId - Container element ID
     */
    renderAwards(containerId = 'awards-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.awards) return;

        container.innerHTML = this.data.awards.map(award => `
            <div class="award-card fade-in-up">
                <div class="award-icon-wrapper">
                    <i class="${award.icon} award-icon"></i>
                </div>
                <div class="award-content">
                    <h3 class="award-title">${award.title}</h3>
                    <p class="award-source">${award.source}</p>
                    <p class="award-description">${award.description}</p>
                </div>
            </div>
        `).join('');
    }

    /**
     * Render publications
     * @param {string} journalsId - Journals container ID
     * @param {string} conferencesId - Conferences container ID
     */
    renderPublications(journalsId = 'journals-container', conferencesId = 'conferences-container') {
        const { publications } = this.data;
        if (!publications) return;

        // Render journals
        const journalsContainer = document.getElementById(journalsId);
        if (journalsContainer && publications.journals) {
            journalsContainer.innerHTML = publications.journals.map(pub => `
                <div class="publication-item fade-in-up">
                    <p class="publication-title">
                        ${pub.authors} (${pub.year}). "${pub.title}"
                        ${pub.badge ? `<span class="badge badge-secondary">${pub.badge}</span>` : ''}
                    </p>
                    <p class="publication-venue">
                        <em>${pub.journal}</em>${pub.volume ? `, ${pub.volume}` : ''}${pub.issue ? `(${pub.issue})` : ''}${pub.pages ? `, ${pub.pages}` : ''}.
                    </p>
                </div>
            `).join('');
        }

        // Render conferences
        const conferencesContainer = document.getElementById(conferencesId);
        if (conferencesContainer && publications.conferences) {
            conferencesContainer.innerHTML = publications.conferences.map(pub => `
                <div class="publication-item fade-in-up">
                    <p class="publication-title">
                        ${pub.authors} (${pub.year}). "${pub.title}"
                        ${pub.badge ? `<span class="badge badge-primary">${pub.badge}</span>` : ''}
                    </p>
                    <p class="publication-venue">
                        <em>${pub.conference}</em>${pub.location ? `, ${pub.location}` : ''}${pub.pages ? `, ${pub.pages}` : ''}.
                    </p>
                </div>
            `).join('');
        }
    }

    /**
     * Render projects
     * @param {string} containerId - Container element ID
     */
    renderProjects(containerId = 'projects-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.projects) return;

        container.innerHTML = this.data.projects.map(project => `
            <div class="project-card fade-in-up">
                ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" class="project-image">` : ''}
                <div class="project-header">
                    <h3 class="project-title">
                        <i class="${project.icon}"></i> ${project.title}
                    </h3>
                    <p class="project-subtitle">${project.subtitle}</p>
                </div>
                <div class="project-body">
                    <p style="color: var(--text-secondary); margin-bottom: var(--spacing-lg);">
                        ${project.description}
                    </p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="flex gap-md" style="margin-top: auto;">
                        ${project.links.map(link => {
                            const btnClass = link.type === 'primary' ? 'btn-primary' : 'btn-secondary';
                            return `
                                <a href="${link.url}"
                                   class="btn ${btnClass}"
                                   ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'}
                                   style="flex: 1; justify-content: center;">
                                    <i class="${link.icon}"></i> ${link.text}
                                </a>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    /**
     * Render experience timeline
     * @param {string} containerId - Container element ID
     */
    renderExperience(containerId = 'experience-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.experience) return;

        container.innerHTML = `
            <div class="timeline">
                ${this.data.experience.map(exp => `
                    <div class="timeline-item fade-in-up">
                        <div class="timeline-content">
                            <div class="timeline-date">
                                ${this.formatDateRange(exp.startDate, exp.endDate, exp.current)}
                            </div>
                            <h3 class="timeline-title">${exp.position}</h3>
                            <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-md);">
                                ${exp.company} | ${exp.location}
                            </p>
                            <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                                ${exp.description}
                            </p>
                            <div>
                                <strong style="color: var(--construction-blue);">Key Achievements:</strong>
                                <ul style="margin-top: var(--spacing-sm); padding-left: var(--spacing-lg); color: var(--text-secondary);">
                                    ${exp.achievements.map(achievement => `<li style="margin-bottom: var(--spacing-sm);">${achievement}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="project-tags" style="margin-top: var(--spacing-md);">
                                ${exp.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Render skills section with progress bars
     * @param {string} containerId - Container element ID
     */
    renderSkills(containerId = 'skills-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.skills) return;

        const { technical } = this.data.skills;

        container.innerHTML = technical.map(category => `
            <div class="card fade-in-up">
                <h3 class="card-title">${category.category}</h3>
                <div class="card-body">
                    ${category.skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">
                                    <i class="${skill.icon}"></i> ${skill.name}
                                </span>
                                <span class="skill-level">${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-level="${skill.level}" style="width: 0%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    /**
     * Render contact information
     * @param {string} containerId - Container element ID
     */
    renderContact(containerId = 'contact-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.contact) return;

        const { contact } = this.data;

        const contactItems = [
            { href: `mailto:${contact.email}`, icon: 'fas fa-envelope', label: 'Email', value: contact.email },
            { href: `tel:${contact.phone.replace(/\D/g, '')}`, icon: 'fas fa-phone', label: 'Phone', value: contact.phone },
            { href: contact.linkedin, icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Connect on LinkedIn' },
            { href: contact.github, icon: 'fab fa-github', label: 'GitHub', value: 'View GitHub Profile' }
        ];

        container.innerHTML = contactItems.map(item => `
            <a href="${item.href}" class="contact-item fade-in-up" target="_blank" rel="noopener noreferrer">
                <div class="contact-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="contact-info">
                    <p class="contact-label">${item.label}</p>
                    <p class="contact-value">${item.value}</p>
                </div>
            </a>
        `).join('');
    }

    /**
     * Render footer with social links
     * @param {string} containerId - Container element ID
     */
    renderFooter(containerId = 'footer-socials') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.contact) return;

        const { contact, profile } = this.data;

        const socials = [
            { url: contact.linkedin, icon: 'fab fa-linkedin' },
            { url: contact.github, icon: 'fab fa-github' },
            { url: `mailto:${contact.email}`, icon: 'fas fa-envelope' }
        ];

        container.innerHTML = socials.map(social => `
            <a href="${social.url}" class="social-link" target="_blank" rel="noopener noreferrer">
                <i class="${social.icon}"></i>
            </a>
        `).join('');

        // Update copyright year and name
        const yearEl = document.getElementById('copyright-year');
        const nameEl = document.getElementById('footer-name');

        if (yearEl) yearEl.textContent = new Date().getFullYear();
        if (nameEl) nameEl.textContent = profile.name;
    }

    /**
     * Helper: Format date range
     * @param {string} start - Start date
     * @param {string} end - End date
     * @param {boolean} current - Is current position
     * @returns {string} Formatted date range
     */
    formatDateRange(start, end, current = false) {
        const startDate = new Date(start);
        const endDate = current ? new Date() : new Date(end);

        const formatOptions = { year: 'numeric', month: 'short' };
        const startStr = startDate.toLocaleDateString('en-US', formatOptions);
        const endStr = current ? 'Present' : endDate.toLocaleDateString('en-US', formatOptions);

        // Calculate duration
        const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                       (endDate.getMonth() - startDate.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        let duration = '';
        if (years > 0) duration += `${years} year${years > 1 ? 's' : ''}`;
        if (remainingMonths > 0) duration += `${years > 0 ? ' ' : ''}${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;

        return `${startStr} - ${endStr} (${duration})`;
    }
}

// Make components class globally available
window.PortfolioComponents = PortfolioComponents;
