// Wait for HTML to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const allLinks = document.querySelectorAll('.nav-links a');
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // ========== TUTOR DATA ==========
    const tutors = [
        { name: "John Okello", subject: "Mathematics", rating: 4.8, experience: "5 years", desc: "Expert in Calculus & Algebra", icon: "📐" },
        { name: "Sarah Namugga", subject: "Physics", rating: 4.9, experience: "7 years", desc: "Physics specialist for high school", icon: "⚡" },
        { name: "Michael Kibet", subject: "Chemistry", rating: 4.7, experience: "4 years", desc: "Organic & Inorganic Chemistry", icon: "🧪" },
        { name: "Grace Akinyi", subject: "English", rating: 4.9, experience: "6 years", desc: "Literature & Writing expert", icon: "📖" },
        { name: "David Mwangi", subject: "Computer Science", rating: 4.8, experience: "5 years", desc: "Programming & Web Development", icon: "💻" },
        { name: "Alice Nantume", subject: "Biology", rating: 4.6, experience: "3 years", desc: "Human Biology & Genetics", icon: "🧬" },
        { name: "James Odongo", subject: "Mathematics", rating: 4.9, experience: "8 years", desc: "Statistics & Probability expert", icon: "📐" },
        { name: "Patricia Achieng", subject: "Computer Science", rating: 4.8, experience: "4 years", desc: "Python & JavaScript specialist", icon: "💻" }
    ];
    
    // ========== DISPLAY TUTORS FUNCTION ==========
    function displayTutors(tutorsList) {
        const tutorsGrid = document.getElementById('tutorsGrid');
        if (!tutorsGrid) return;
        
        if (tutorsList.length === 0) {
            tutorsGrid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:50px;font-size:1.2rem;">😔 No tutors found. Try a different search.</p>';
            return;
        }
        
        let html = '';
        for (let i = 0; i < tutorsList.length; i++) {
            const tutor = tutorsList[i];
            html = html + `
                <div class="tutor-card">
                    <div class="tutor-avatar">${tutor.icon}</div>
                    <h3>${tutor.name}</h3>
                    <p class="tutor-subject">📚 ${tutor.subject}</p>
                    <p class="tutor-desc">⭐ ${tutor.rating} ★ • ${tutor.experience}</p>
                    <p class="tutor-desc">${tutor.desc}</p>
                    <a href="contact.html" class="contact-btn"><i class="fas fa-comment"></i> Contact Tutor</a>
                </div>
            `;
        }
        tutorsGrid.innerHTML = html;
    }
    
    // ========== FILTER TUTORS FUNCTION ==========
    function filterTutors() {
        const searchInput = document.getElementById('searchInput');
        const subjectFilter = document.getElementById('subjectFilter');
        
        if (!searchInput || !subjectFilter) return;
        
        const searchTerm = searchInput.value.toLowerCase();
        const subjectValue = subjectFilter.value;
        
        const filtered = [];
        for (let i = 0; i < tutors.length; i++) {
            const tutor = tutors[i];
            const matchesSearch = tutor.name.toLowerCase().includes(searchTerm) || tutor.subject.toLowerCase().includes(searchTerm);
            const matchesSubject = subjectValue === 'all' || tutor.subject === subjectValue;
            if (matchesSearch && matchesSubject) {
                filtered.push(tutor);
            }
        }
        
        displayTutors(filtered);
    }
    
    // ========== SETUP TUTORS PAGE ==========
    const searchInput = document.getElementById('searchInput');
    const subjectFilter = document.getElementById('subjectFilter');
    const tutorsGrid = document.getElementById('tutorsGrid');
    
    if (tutorsGrid) {
        // This is the tutors page, load tutors
        displayTutors(tutors);
        
        if (searchInput) {
            searchInput.addEventListener('input', filterTutors);
        }
        if (subjectFilter) {
            subjectFilter.addEventListener('change', filterTutors);
        }
    }
    
    // ========== CONTACT FORM HANDLER ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const formMessage = document.getElementById('formMessage');
            const name = nameInput ? nameInput.value : '';
            
            if (formMessage) {
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you ' + name + '! Your message has been sent. We\'ll contact you soon.';
                formMessage.style.color = '#27ae60';
            }
            
            contactForm.reset();
            
            setTimeout(function() {
                if (formMessage) {
                    formMessage.innerHTML = '';
                }
            }, 5000);
        });
    }
    
});