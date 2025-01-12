// Your existing dynamic content code
fetch('portfolio-testing/data.json')
    .then(response => response.json())
    .then(data => {
        // Update Summary Section
        document.querySelector('#summary p').innerText = data.summary;

        // Update Experience Section
        const expContainer = document.querySelector('#experience .experience-grid');
        expContainer.innerHTML = '';
        data.experience.forEach(exp => {
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
        const sections = document.querySelectorAll('.section, .experience-box');
        sections.forEach((section) => observer.observe(section));
    });
    

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('experience-modal');
    const modalDetails = modal.querySelector('.modal-details');
    const closeModal = modal.querySelector('.close');

    // Data for each experience (for demonstration purposes)
    const experienceData = {
        1: {
            title: "I Am Still Alive, India",
            time: "(Since Jan’24)",
            details: [
                "Led strategic initiatives to optimize company operations, driving substantial organizational impact and growth.",
                "Managed and coordinated cross-functional teams to ensure seamless alignment with corporate objectives and enhanced collaboration.",
                "Established and nurtured partnerships with key stakeholders to improve service delivery, focusing on innovative support mechanisms for cancer patients."
            ]
        },
        2: {
            title: "Shivaji University, Kolhapur, India",
            time: "(Since Jun’23)",
            details: [
                "Delivered comprehensive courses on advanced Artificial Intelligence and Machine Learning, fostering a deep understanding of cutting-edge concepts and applications.",
                "Conducted innovative research in statistical machine learning, contributing to advancements in the field through impactful findings.",
                "Authored a foundational book on AI and ML mathematics, bridging theoretical insights with practical implementation for aspiring professionals and researchers."
            ]
        },
        3: {
            title: "Codvo.AI, Pune, India",
            time: "(Since Apr’23)",
            details: [
                "Provided strategic guidance on AI product development and research methodologies, ensuring alignment with industry standards and innovation goals.",
                "Spearheaded the implementation of AI-powered solutions, driving digital transformation and operational excellence across diverse industries.",
                "Collaborated with cross-functional teams to translate cutting-edge AI research into scalable, real-world applications."
            ] 
        },
        4: {
            title: "ICFAI Tech School, Hyderabad, India",
            time: "(2018-2021)",
            details: [
                "Conducted in-depth research in Artificial Intelligence and Machine Learning, with a focus on innovative methodologies and practical applications.",
                "Designed and delivered a comprehensive curriculum, teaching courses from foundational principles to advanced AI and ML techniques.",
                "Authored and published influential research on Network Flow Optimization using Monte Carlo Simulation."
            ]
        },
        5: {
            title: "Adobe Systems, Bangalore, India",
            time: "(2012-2014)",
            details: [
                "Spearheaded cutting-edge research on Artificial Intelligence technologies tailored for Adobe Experience Cloud, driving innovation in customer experience solutions.",
                "Co-invented three patents, revolutionizing digital marketing strategies with AI-powered advancements.",
                "Collaborated with multidisciplinary teams to integrate AI technologies, enhancing product scalability and market impact."
            ]
        },
        6: {
            title: "Alcatel-Lucent, India",
            time: "(2010-2012)",
            details: [
                "Designed and implemented predictive analytics solutions to optimize telecom network operations and performance.",
                "Utilized advanced statistical modeling techniques to identify and resolve network inefficiencies, boosting reliability and service quality.",
                "Collaborated with cross-functional teams to integrate analytics-driven insights into decision-making processes."
            ]
        },
        7: {
            title: "Bell Labs, USA",
            time: "(2005-2010)",
            details: [
                "Conducted pioneering research on advanced machine learning algorithms, driving innovation in AI technologies.",
                "Authored influential studies on pattern recognition and data analysis, contributing to cutting-edge academic and industrial applications.",
                "Collaborated with interdisciplinary teams to explore the intersection of machine learning and real-world problem-solving."
            ]
        },
        8: {
            title: "Purdue University, USA",
            time: "(1992-1994)",
            details: [
                "Specialized in statistical modeling techniques, focusing on large-scale data analysis to address complex research problems.",
                "Developed innovative regression methodologies, advancing statistical practices in data-driven research.",
                "Collaborated with academic and industry experts to apply statistical insights to impactful projects."
            ]
        }
    };

    // Show modal with selected experience details
    document.querySelectorAll('.experience-box').forEach(box => {
        box.addEventListener('click', () => {
            const id = box.getAttribute('data-id');
            const data = experienceData[id];

            if (data) {
                modalDetails.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.time}</p>
                    <ul>${data.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                `;
                modal.style.display = 'flex'; // Show modal
            }
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});


