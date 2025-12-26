// 1. Theme Toggle 
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Dynamic Greeting & Date (Only runs on Home page) [cite: 10]
const greetingElement = document.getElementById('greeting');
const dateElement = document.getElementById('current-date');

if (greetingElement) {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "Good Morning";

    if (hour >= 12 && hour < 18) {
        greetingText = "Good Afternoon";
    } else if (hour >= 18) {
        greetingText = "Good Evening";
    }

    greetingElement.innerText = `${greetingText}, Welcome to Urban Kicks!`;
    dateElement.innerText = `Today is: ${now.toDateString()}`;
}

// 3. Shopping Cart Counter [cite: 9]
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.innerText = cartCount;
        alert("Item added to cart!");
    });
});

// 4. Form Validation [cite: 8]
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop actual submission for demo
        const email = document.getElementById('email').value;
        
        // Simple validation to check for "@" symbol
        if (!email.includes('@')) {
            alert("Please enter a valid email address containing '@'.");
            return;
        }
        
        alert("Message sent successfully!");
        form.reset();
    });
}