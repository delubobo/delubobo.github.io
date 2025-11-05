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

    /**
     * Render research impact highlights
     * @param {string} containerId - Container element ID
     */
    renderResearchImpact(containerId = 'research-impact-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.researchImpact) return;

        const { highlights } = this.data.researchImpact;

        container.innerHTML = highlights.map(item => `
            <div class="card fade-in-up" style="text-align: center;">
                <div class="card-icon">
                    <i class="${item.icon}"></i>
                </div>
                <h3 class="card-title" style="font-size: var(--font-size-xl);">${item.metric}</h3>
                <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-sm);">
                    ${item.description}
                </p>
                <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">
                    ${item.impact}
                </p>
            </div>
        `).join('');
    }

    /**
     * Render key achievements
     * @param {string} containerId - Container element ID
     */
    renderKeyAchievements(containerId = 'key-achievements-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.keyAchievements) return;

        container.innerHTML = this.data.keyAchievements.map(category => `
            <div class="card fade-in-up">
                <div class="card-header">
                    <h3 class="card-title">
                        <i class="${category.icon}" style="color: var(--construction-orange); margin-right: var(--spacing-sm);"></i>
                        ${category.category}
                    </h3>
                </div>
                <div class="card-body">
                    <ul style="list-style: none; padding: 0;">
                        ${category.achievements.map(achievement => `
                            <li style="padding: var(--spacing-md) 0; border-bottom: 1px solid var(--border-color); display: flex; align-items: start; gap: var(--spacing-sm);">
                                <i class="fas fa-check-circle" style="color: var(--success); margin-top: 0.25rem; flex-shrink: 0;"></i>
                                <span style="color: var(--text-secondary);">${achievement}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    /**
     * Render certifications
     * @param {string} containerId - Container element ID
     */
    renderCertifications(containerId = 'certifications-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.certifications) return;

        const { professional, technical } = this.data.certifications;

        container.innerHTML = `
            <div class="mb-4">
                <h3 class="mb-3" style="font-size: var(--font-size-2xl); color: var(--construction-blue);">
                    <i class="fas fa-certificate" style="color: var(--construction-orange);"></i>
                    Professional Certifications
                </h3>
                <div class="grid grid-2 gap-lg">
                    ${professional.map(cert => `
                        <div class="card fade-in-up">
                            <div class="flex" style="align-items: start; gap: var(--spacing-lg);">
                                <div class="card-icon">
                                    <i class="${cert.icon}"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 class="card-title" style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-sm);">
                                        ${cert.name}
                                    </h4>
                                    <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-sm);">
                                        ${cert.issuer} | ${cert.year}
                                    </p>
                                    <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                                        ${cert.description}
                                    </p>
                                    <div class="project-tags">
                                        ${cert.skills.map(skill => `<span class="project-tag">${skill}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 class="mb-3" style="font-size: var(--font-size-2xl); color: var(--construction-blue);">
                    <i class="fas fa-brain" style="color: var(--construction-orange);"></i>
                    Technical Certifications
                </h3>
                <div class="grid grid-2 gap-lg">
                    ${technical.map(cert => `
                        <div class="card fade-in-up">
                            <div class="flex" style="align-items: start; gap: var(--spacing-lg);">
                                <div style="font-size: 2.5rem; color: var(--construction-orange);">
                                    <i class="${cert.icon}"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 style="font-size: var(--font-size-lg); color: var(--construction-blue); font-weight: 700; margin-bottom: var(--spacing-sm);">
                                        ${cert.name}
                                    </h4>
                                    <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-md);">
                                        ${cert.issuer} | ${cert.year}
                                    </p>
                                    <div class="project-tags">
                                        ${cert.skills.map(skill => `<span class="project-tag">${skill}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Render tools and technologies
     * @param {string} containerId - Container element ID
     */
    renderToolsAndTechnologies(containerId = 'tools-technologies-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.toolsAndTechnologies) return;

        const { programmingLanguages, aiFrameworks, constructionSoftware, dataAndCloud } = this.data.toolsAndTechnologies;

        const allTools = [
            { title: 'Programming', tools: programmingLanguages },
            { title: 'AI/ML', tools: aiFrameworks },
            { title: 'Construction', tools: constructionSoftware },
            { title: 'Data & Cloud', tools: dataAndCloud }
        ];

        container.innerHTML = allTools.map(category => `
            <div class="card fade-in-up">
                <h4 class="card-title" style="text-align: center; font-size: var(--font-size-lg);">
                    ${category.title}
                </h4>
                <div class="card-body">
                    ${category.tools.slice(0, 5).map(tool => `
                        <div style="margin-bottom: var(--spacing-md);">
                            <div class="flex" style="justify-content: space-between; margin-bottom: 0.25rem;">
                                <span style="font-weight: 600; color: var(--text-primary); font-size: var(--font-size-sm);">${tool.name}</span>
                                <span style="color: var(--text-tertiary); font-size: var(--font-size-xs);">${tool.experience}</span>
                            </div>
                            <div class="skill-bar" style="height: 6px;">
                                <div class="skill-progress" data-level="${tool.level}" style="width: 0%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    /**
     * Render professional memberships
     * @param {string} containerId - Container element ID
     */
    renderMemberships(containerId = 'memberships-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.professionalMemberships) return;

        container.innerHTML = this.data.professionalMemberships.map(membership => `
            <div class="card fade-in-up" style="text-align: center;">
                <div class="card-icon">
                    <i class="${membership.icon}"></i>
                </div>
                <h4 class="card-title" style="font-size: var(--font-size-lg);">
                    ${membership.organization}
                </h4>
                <p style="color: var(--construction-orange); font-weight: 600; margin-bottom: var(--spacing-sm);">
                    ${membership.role}
                </p>
                <p style="color: var(--text-tertiary); font-size: var(--font-size-sm); margin-bottom: var(--spacing-md);">
                    Member since ${membership.since}
                </p>
                <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">
                    ${membership.description}
                </p>
            </div>
        `).join('');
    }

    /**
     * Render testimonials
     * @param {string} containerId - Container element ID
     */
    renderTestimonials(containerId = 'testimonials-container') {
        const container = document.getElementById(containerId);
        if (!container || !this.data.testimonials) return;

        container.innerHTML = this.data.testimonials.map(testimonial => `
            <div class="card fade-in-up">
                <div class="card-body">
                    <i class="fas fa-quote-left" style="font-size: 2rem; color: var(--construction-orange); opacity: 0.3; margin-bottom: var(--spacing-md);"></i>
                    <p style="font-size: var(--font-size-lg); line-height: 1.8; color: var(--text-secondary); font-style: italic; margin-bottom: var(--spacing-lg);">
                        "${testimonial.quote}"
                    </p>
                    <div class="flex" style="align-items: center; gap: var(--spacing-md); padding-top: var(--spacing-md); border-top: 2px solid var(--border-color);">
                        ${testimonial.photo ? `<img src="${testimonial.photo}" alt="${testimonial.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">` : `<div style="width: 60px; height: 60px; border-radius: 50%; background: var(--construction-blue); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--font-size-xl); font-weight: 700;">${testimonial.name.charAt(0)}</div>`}
                        <div>
                            <h5 style="color: var(--construction-blue); font-weight: 700; margin-bottom: 0.25rem;">
                                ${testimonial.name}
                            </h5>
                            <p style="color: var(--text-secondary); font-size: var(--font-size-sm); margin-bottom: 0.25rem;">
                                ${testimonial.title}
                            </p>
                            <p style="color: var(--text-tertiary); font-size: var(--font-size-xs);">
                                ${testimonial.organization} | ${testimonial.relationship}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Make components class globally available
window.PortfolioComponents = PortfolioComponents;
