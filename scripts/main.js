// Hamburger Navigation Toggle
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('nav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Dynamic Copyright Year & Last Modified Date
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// Course List Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming Building Blocks',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'An introduction to programming building blocks.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to HTML, CSS, and basic web standards.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Extending programming concepts with functions and modular design.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Object-oriented programming concepts including classes and encapsulation.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Dynamic web design and JavaScript fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Advanced frontend web development practices.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseListContainer = document.getElementById('course-list');
const totalCreditsContainer = document.getElementById('total-credits');

function displayCourses(filteredCourses) {
    courseListContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        if (course.completed) {
            card.classList.add('completed');
        }
        card.innerHTML = `<h3>${course.subject} ${course.number}</h3><p>${course.credits} Credits</p>`;
        courseListContainer.appendChild(card);
    });

    // Calculate total credits using reduce()
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsContainer.textContent = `Total Credits Required: ${totalCredits}`;
}

// Initial display of all courses
displayCourses(courses);

// Filter Event Listeners
document.getElementById('all').addEventListener('click', () => {
    displayCourses(courses);
});

document.getElementById('cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

document.getElementById('wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});