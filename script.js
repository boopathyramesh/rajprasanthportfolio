
                // go to about 
document.querySelector('.downArrow').addEventListener('click', function() {
  const nextSection = document.querySelector('#aboutMe');
  nextSection.scrollIntoView({ behavior: 'smooth' });
});


                //  Text change typing in Homepage
document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamicText");
  const texts = ["Full Stack Developer.", "Document Specialist."];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    // Get the current text
    const currentText = texts[index];
    const displayedText = currentText.substring(0, charIndex);

    // Update the dynamic text
    dynamicText.textContent = displayedText;

    // Adjust typing speed
    let typingSpeed = isDeleting ? 50 : 100;

    // Handle typing/deleting logic
    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 2000; // Pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // Move to the next text
    } else {
      charIndex += isDeleting ? -1 : 1;
    }

    // Call the function again after typingSpeed
    setTimeout(type, typingSpeed);
  }

  // Start the typing animation
  type();
});




                    // Menu change while scrolling on Navbar

// Toggle the nav menu on mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

// Function to handle scroll event for navbar visibility
window.addEventListener('scroll', () => {
    // Show navbar after scrolling past the home section
    if (window.scrollY > document.querySelector('.headerWrap').offsetHeight) {
        navbar.style.opacity = 1;
        navbar.style.top = '0';
    } else {
        navbar.style.opacity = 0;
        navbar.style.top = '-60px'; // Hides navbar when at the top
    }
  
    // Highlight active link based on scroll position
    updateActiveLink();
});

// Toggle mobile menu visibility
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Highlight active link on click
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active')); 
        // Add active class to the clicked link
        link.classList.add('active'); 
        // Close mobile menu after click (for mobile view)
        navLinks.classList.remove('active');
    });
});

// Function to update the active link based on scroll position
function updateActiveLink() {
    let currentSection = '';
  
    // Loop through each section and find which one is currently in view
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in view
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the link corresponding to the current section
    if (currentSection) {
        const activeLink = document.querySelector(`.nav-links a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}


function sendToWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  const whatsappMessage = `Name: ${name}, Email: ${email}, Message: ${message}`;
  
 
  const whatsappURL = `https://wa.me/918508879830?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank'); // Opens WhatsApp link in a new tab
}



                                // Backup Code:- 

// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicText = document.getElementById("dynamicText");
//   const texts = ["a Full Stack Developer.", "a Document Specialist."];
//   let index = 0;

//   setInterval(() => {
//     // Update the text content
//     index = (index + 1) % texts.length;
//     dynamicText.textContent = texts[index];
//   }, 2000); // Change text every 2 seconds
// });