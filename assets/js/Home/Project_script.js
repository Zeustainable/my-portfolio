const iframe = document.getElementById('projectIframe');

const pages = [
    "https://zeustainable.github.io/Session4_Activity_Satsatin/Session4_Activity_Satsatin.html",
    "https://zeustainable.github.io/Session5_Activity_Satsatin/Session5_Satsatin.html",
    "https://zeustainable.github.io/Session7_Activity_Satsatin/Main.html",
    "https://zeustainable.github.io/Session8_Activity_Satsatin/mainForm.html",
    "https://zeustainable.github.io/Session9_Activity_Satsatin/mainForm.html",
    "https://zeustainable.github.io/PokeAPI_Satsatin/index.html",
    "https://olpmc.net:12443/"
];

const projectData = [
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "Session 4",
            start: "October 31, 2023",
            end: "November 5, 2023"
        },
        technologies: ["HTML", "CSS", "GitHub"],
        overview: [
            "Desktop-view only",
            "Product Showcase Web Application",
            "Static website created without JS or frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "Session 5",
            start: "November 6, 2023",
            end: "November 11, 2023"
        },
        technologies: ["HTML", "CSS", "GitHub"],
        overview: [
            "Desktop-view only",
            "Product Showcase Web Application",
            "Static website created without JS or frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "Session 7",
            start: "November 12, 2023",
            end: "November 17, 2023"
        },
        technologies: ["HTML", "CSS", "Bootstrap", "GitHub"],
        overview: [
            "Desktop-view only",
            "My First Personal Website",
            "Static website created without JS or frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "Session 8",
            start: "November 18, 2023",
            end: "November 23, 2023"
        },
        technologies: ["HTML", "CSS", "Bootstrap", "GitHub"],
        overview: [
            "Desktop-view only",
            "Automotive Landing Page",
            "Static website created without JS or frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "Session 9",
            start: "November 24, 2023",
            end: "November 29, 2023"
        },
        technologies: ["HTML", "CSS", "Bootstrap", "GitHub"],
        overview: [
            "Desktop-view only",
            "Business Profile Website",
            "Static website created without JS or frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "BOOTCAMP ACTIVITY",
            activity: "PokeAPI Project",
            start: "December 1, 2023",
            end: "December 6, 2023"
        },
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API", "GitHub"],
        overview: [
            "Desktop-view only",
            "Uses external PokeAPI",
            "Pokémon Info Database",
            "Static website created without frameworks"
        ]
    },
    {
        details: {
            activityHighlight: "CAPSTONE PROJECT",
            activity: "Appointment System",
            start: "July 5, 2024",
            end: "December 18, 2024"
        },
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "C#.NET", "MongoDB"],
        overview: [
            "Best viewed on Desktop and Mobile Phone",
            "Online Appointment and Billing System",
            "Display of Doctor Schedules & HMO List",
            "Integrated an Access Control System",
            "Dynamic website developed in C#.NET framework"
        ]
    }
];

let currentPage = 0;

const updateIframe = () => {
    iframe.src = pages[currentPage];

    // Highlight active page
    document.querySelectorAll('.page-num').forEach(el => el.classList.remove('active'));
    document.querySelector(`.page-num[data-index="${currentPage}"]`).classList.add('active');

    // Update Project Details
    const currentData = projectData[currentPage];
    document.getElementById('detailActivity').innerHTML = `<strong>${currentData.details.activityHighlight}</strong>: ${currentData.details.activity}`;
    document.getElementById('detailStart').innerHTML = `<strong>START DATE</strong>: ${currentData.details.start}`;
    document.getElementById('detailEnd').innerHTML = `<strong>END DATE</strong>: ${currentData.details.end}`;

    // Update Technologies
    const techContainer = document.getElementById('techList');
    techContainer.innerHTML = '';
    currentData.technologies.forEach(tech => {
        const item = document.createElement('a');
        item.className = "list-group-item list-group-item-action text-dark text-decoration-none";
        item.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${tech}`;
        techContainer.appendChild(item);
    });

    // Update Overview
    const overviewContainer = document.getElementById('overviewList');
    overviewContainer.innerHTML = '';
    currentData.overview.forEach(line => {
        const item = document.createElement('a');
        item.className = "list-group-item list-group-item-action text-dark text-decoration-none";
        item.textContent = line;
        overviewContainer.appendChild(item);
    });
};

document.querySelectorAll('.page-num').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(el.getAttribute('data-index'));
        updateIframe();
    });
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 0) {
        currentPage--;
        updateIframe();
    }
});

document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateIframe();
    }
});

// Initialize the first iframe and active class
updateIframe();