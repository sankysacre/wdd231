// URL to the members JSON file
const url = 'data/members.json';

// Select the container where cards will be appended
const cards = document.querySelector('#cards');

// Async function to fetch data from the JSON file
async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data); 
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Display members function
const displayMembers = (members) => {
    cards.innerHTML = ''; // Clear previous content
    members.forEach((member) => {
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');

        portrait.setAttribute('src', `images/${member.image}`);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '200');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = member.website;

        let levelText = member.membershipLevel === 3 ? 'Gold Member' : member.membershipLevel === 2 ? 'Silver Member' : 'Member';
        level.textContent = `Membership Level: ${levelText}`;

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
};

// Initialize data retrieval on page load
getMembersData();

// Grid / List view toggle button functionality
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");

if (gridButton && listButton && display) {
    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });
}