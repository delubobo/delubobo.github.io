# Portfolio Content Update Guide

This guide will help you easily update your portfolio content without touching any HTML, CSS, or JavaScript code. All content is managed through the `assets/data/portfolio.json` file.

## 📍 Quick Navigation

- [Basic Profile Information](#basic-profile-information)
- [Professional Experience](#professional-experience)
- [Education](#education)
- [Skills](#skills)
- [Projects](#projects)
- [Publications](#publications)
- [Certifications](#certifications)
- [Awards](#awards)
- [Testimonials](#testimonials)
- [Professional Memberships](#professional-memberships)

---

## 🎯 Basic Profile Information

**Location in JSON:** `profile` section (lines 2-22)

### What to Update:
```json
{
  "profile": {
    "name": "Your Full Name",
    "firstName": "FirstName",
    "lastName": "LastName",
    "titles": "Ph.D., PMP",  // Your credentials
    "tagline": "Your Professional Tagline",
    "bio": "Short bio paragraph (2-3 sentences)",
    "longBio": "Longer bio paragraph (3-4 sentences)",
    "imageUrl": "assets/images/profile/Profile_Picture.jpeg",
    "cvUrl": "assets/documents/cv/Your_CV.pdf",
    "location": "City, State, Country",
    "yearsOfExperience": "X+",
    "researchInterests": [
      "Interest 1",
      "Interest 2",
      "Interest 3"
    ]
  }
}
```

### Steps to Update:
1. Open `assets/data/portfolio.json`
2. Find the `"profile"` section at the top
3. Update the text values between the quotes
4. Save the file
5. Refresh your browser - changes appear instantly!

---

## 💼 Professional Experience

**Location in JSON:** `experience` section (lines 118-189)

### Adding a New Job:
Copy this template and add it to the `experience` array:

```json
{
  "position": "Your Job Title",
  "company": "Company Name",
  "location": "City, State",
  "startDate": "2021-08",           // Format: YYYY-MM
  "endDate": "2025-08",             // Format: YYYY-MM
  "current": false,                  // Set to true if current position
  "type": "Industry",                // Options: "Industry" or "Academic"
  "description": "One paragraph describing the role",
  "achievements": [
    "Achievement 1 with specific metrics",
    "Achievement 2 with impact",
    "Achievement 3 with results"
  ],
  "technologies": ["Tech 1", "Tech 2", "Tech 3"]
}
```

### Example:
```json
{
  "position": "AI Engineer",
  "company": "Tech Corp",
  "location": "Austin, TX",
  "startDate": "2023-01",
  "endDate": "2024-12",
  "current": false,
  "type": "Industry",
  "description": "Led development of AI-powered safety systems for construction sites.",
  "achievements": [
    "Increased safety compliance by 35% using computer vision",
    "Managed team of 3 ML engineers",
    "Deployed 5 production AI models"
  ],
  "technologies": ["Python", "TensorFlow", "AWS", "Docker"]
}
```

---

## 🎓 Education

**Location in JSON:** `education` section (lines 191-265)

### Adding a Degree:
```json
{
  "degree": "Degree Type, Major",
  "institution": "University Name",
  "location": "City, State, Country",
  "date": "Graduation Month Year",
  "startYear": "2021",
  "endYear": "2025",
  "gpa": "4.00/4.00",
  "distinction": "Any special honors",
  "details": [
    {"type": "badge", "text": "GPA: 4.00/4.00"},
    {"type": "text", "text": "<strong>Dissertation:</strong> Your dissertation title"},
    {"type": "text", "text": "<strong>Advisor:</strong> Advisor Name, Ph.D."}
  ]
}
```

---

## 💪 Skills

**Location in JSON:** `skills` section (lines 57-116)

### Updating Technical Skills:
Skills are organized by category. To add a new skill:

```json
{
  "category": "Category Name",
  "skills": [
    {
      "name": "Skill Name",
      "level": 95,              // 0-100 (affects progress bar)
      "icon": "fab fa-python"   // FontAwesome icon class
    }
  ]
}
```

### Available Categories:
- Programming & AI
- Data Science & Analysis
- Construction & Engineering
- Tools & Technologies

### Professional Competencies:
Located in `skills.professional`:

```json
{
  "name": "Competency Name",
  "icon": "fas fa-tasks",
  "description": "Brief description of this competency"
}
```

---

## 🚀 Projects

**Location in JSON:** `projects` section (lines 293-356)

### Adding a New Project:
```json
{
  "id": "unique-project-id",
  "icon": "fas fa-brain",
  "title": "Project Title",
  "subtitle": "Project Subtitle",
  "category": "AI/ML Application",
  "status": "Production Ready",
  "description": "Short description (1-2 sentences)",
  "longDescription": "Detailed description (2-3 paragraphs)",
  "problem": "What problem does this solve?",
  "solution": "How does your solution work?",
  "impact": [
    "Impact metric 1",
    "Impact metric 2",
    "Impact metric 3"
  ],
  "tags": ["Tag1", "Tag2", "Tag3"],
  "technologies": ["Tech1", "Tech2"],
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "imageUrl": "assets/images/projects/project-screenshot.png",
  "links": [
    {
      "type": "primary",
      "text": "View Code",
      "icon": "fab fa-github",
      "url": "https://github.com/username/repo"
    },
    {
      "type": "secondary",
      "text": "Live Demo",
      "icon": "fas fa-external-link-alt",
      "url": "https://demo.com"
    }
  ]
}
```

---

## 📚 Publications

**Location in JSON:** `publications` section (lines 358-452)

### Adding a Journal Article:
```json
{
  "authors": "<strong>YourName</strong>, CoAuthor1, CoAuthor2",
  "year": "2024",
  "title": "Paper Title",
  "journal": "Journal Name",
  "volume": "5",
  "issue": "3",
  "pages": "100-115",
  "doi": "10.1234/journal.2024",
  "citations": 15,
  "badge": null    // Or "In Press", "Under Review", etc.
}
```

### Adding a Conference Paper:
```json
{
  "authors": "<strong>YourName</strong>, CoAuthor",
  "year": "2024",
  "title": "Paper Title",
  "conference": "Conference Name",
  "location": "City, Country",
  "pages": "50-60",
  "badge": "Best Paper Award"  // Optional
}
```

---

## 🎖️ Certifications

**Location in JSON:** `certifications` section (lines 540-579)

### Adding a Professional Certification:
```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "year": "2023",
  "credentialId": "CREDENTIAL-ID",
  "icon": "fas fa-certificate",
  "verifyUrl": "https://verify-link.com",
  "description": "What this certification demonstrates",
  "skills": ["Skill 1", "Skill 2", "Skill 3"]
}
```

---

## 🏆 Awards

**Location in JSON:** `awards` section (lines 267-291)

### Adding an Award:
```json
{
  "icon": "fas fa-trophy",
  "title": "Award Name",
  "source": "Awarding Organization",
  "year": "2024",
  "description": "Description of the award and its significance",
  "category": "Research"  // or "Scholarship", "Leadership", etc.
}
```

---

## 💬 Testimonials

**Location in JSON:** `testimonials` section (lines 706-723)

### Adding a Recommendation:
```json
{
  "name": "Recommender Name",
  "title": "Their Job Title",
  "organization": "Their Organization",
  "photo": "assets/images/testimonials/photo.jpg",  // Optional
  "quote": "The testimonial text goes here. Keep it concise and impactful.",
  "relationship": "PhD Advisor"  // or "Former Manager", "Colleague", etc.
}
```

**Tips for Testimonials:**
- Keep quotes under 3 sentences
- Focus on specific achievements or qualities
- Ask permission before adding
- If no photo, their initial will be displayed

---

## 🤝 Professional Memberships

**Location in JSON:** `professionalMemberships` section (lines 611-633)

### Adding a Membership:
```json
{
  "organization": "Organization Full Name",
  "role": "Member",  // or "Certified Member", "Fellow", etc.
  "since": "2021",
  "icon": "fas fa-landmark",
  "description": "Brief description of your involvement"
}
```

---

## 🎯 Quick Tips

### 1. **JSON Formatting Rules**
- Always use double quotes `"` not single quotes `'`
- Don't forget commas between items (but not after the last item)
- If you break the JSON, the site won't load - use a JSON validator

### 2. **Testing Changes**
- Make one change at a time
- Refresh your browser after each change
- If the site breaks, check the browser console (F12) for errors

### 3. **Icons**
All icons use Font Awesome. Find icons at: https://fontawesome.com/icons

Common icons:
- `fas fa-trophy` - Trophy
- `fas fa-award` - Award/Medal
- `fas fa-certificate` - Certificate
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fas fa-envelope` - Email
- `fas fa-phone` - Phone

### 4. **Dates Format**
- Experience dates: `"YYYY-MM"` (e.g., `"2024-01"`)
- Years only: `"2024"`
- Month-Year display: `"January 2024"`

### 5. **Images**
- Profile images: Place in `assets/images/profile/`
- Project images: Place in `assets/images/projects/`
- Always use relative paths starting with `assets/`

---

## 🔥 Common Updates Checklist

When starting a new job search or academic application:

- [ ] Update professional experience with latest role
- [ ] Add new publications
- [ ] Update certifications if you've earned new ones
- [ ] Add recent awards or recognition
- [ ] Update skills levels based on recent work
- [ ] Refresh projects with latest work
- [ ] Get new testimonials from recent supervisors
- [ ] Update CV file in `assets/documents/cv/`
- [ ] Update contact information if changed

---

## 🆘 Troubleshooting

**Site not loading after changes?**
1. Check if you broke the JSON syntax
2. Copy your JSON content to https://jsonlint.com to validate
3. Common issues:
   - Missing comma
   - Extra comma after last item
   - Mismatched quotes or brackets
   - Special characters not escaped

**Changes not appearing?**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check if you saved the file

**Need to revert changes?**
- Git keeps history: `git checkout assets/data/portfolio.json`
- Or restore from `index.html.backup` if needed

---

## 📞 Need Help?

If you're stuck:
1. Check the browser console (F12) for error messages
2. Validate your JSON at https://jsonlint.com
3. Compare your changes with the original structure
4. Make sure all quotes and brackets match

---

**Remember:** All changes happen in **one file**: `assets/data/portfolio.json`

You never need to touch HTML, CSS, or JavaScript files!
