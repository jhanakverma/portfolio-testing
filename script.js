// Your existing dynamic content code
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Update Summary Section
        document.querySelector('#summary p').innerText = data.summary;

        // Update Experience Section
        const expContainer = document.querySelector('#journey .journey-grid');
        expContainer.innerHTML = '';
        data.journey.forEach(exp => {
            expContainer.innerHTML += `
                <div>
                    <h3>${exp.title}</h3>
                    <p>${exp.role} - ${exp.since}</p>
                </div>`;
        });

        // Update Publications Section
        const pubContainer = document.querySelector('#publications ul');
        pubContainer.innerHTML = '';
        data.publications.forEach(pub => {
            pubContainer.innerHTML += `
                <li><strong>${pub.title}</strong> <a href="${pub.link}" target="_blank">View</a></li>`;
        });
    });
    
    // Smooth reveal animations for elements
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight) {
                element.classList.add('visible');
            }
        });
    });

    // Smooth scrolling for loader dismissal
    document.addEventListener('DOMContentLoaded', () => {
        const loader = document.querySelector('.loader');
        const header = document.querySelector('header');
    
        const dismissLoader = () => {
            loader.classList.add('hidden'); // Hide the loader
            setTimeout(() => {
                loader.style.display = 'none'; // Remove loader from the DOM
                window.scrollTo({ top: header.offsetTop, behavior: 'smooth' }); // Scroll to header
            }, 1000); // Add delay for smooth transition
        };
    
        // Detect user interaction to dismiss loader
        document.addEventListener('wheel', dismissLoader);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') dismissLoader();
        });
        document.addEventListener('touchend', dismissLoader);
    });

    document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('bounce');
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );
    
        // Target all sections or boxes you want to animate
        const sections = document.querySelectorAll('.section, .journey-box');
        sections.forEach((section) => observer.observe(section));
    });
    

    // Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    modal.style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Adding ESC key functionality
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            modal.style.display = "none";
        });
    }
});



