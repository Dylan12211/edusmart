document.addEventListener('DOMContentLoaded', function() {
    // Generate QR codes for app downloads
    generateQRCode('android-qrcode', 'https://play.google.com/store');
    generateQRCode('ios-qrcode', 'https://apps.apple.com');
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Function to generate QR codes
function generateQRCode(elementId, url) {
    const qrcodeElement = document.getElementById(elementId);
    
    if (qrcodeElement && typeof QRCode !== 'undefined') {
        new QRCode(qrcodeElement, {
            text: url,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// Add placeholder images if real ones aren't available
window.addEventListener('load', function() {
    // App mockup placeholder
    const appMockup = document.getElementById('app-mockup');
    if (appMockup && !appMockup.complete) {
        appMockup.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="600" viewBox="0 0 300 600"><rect width="300" height="600" rx="30" fill="%234285F4"/><rect x="20" y="20" width="260" height="560" rx="20" fill="white"/><text x="150" y="300" font-family="Arial" font-size="24" text-anchor="middle" fill="%234285F4">App Mockup</text></svg>';
    }
    
    // Android logo placeholder
    const androidLogo = document.getElementById('android-logo');
    if (androidLogo && !androidLogo.complete) {
        androidLogo.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="%233DDC84" d="M17.523 15.34c0 .73-.6 1.33-1.331 1.33h-1.886v3.157c0 .97-.788 1.76-1.763 1.76a1.766 1.766 0 01-1.765-1.76v-3.156H9.03v3.157c0 .97-.788 1.76-1.766 1.76a1.766 1.766 0 01-1.765-1.76v-3.156h-1.89a1.333 1.333 0 01-1.332-1.331V7.924h15.246v7.416zm-3.84-12.806l1.571-1.571a.409.409 0 000-.574.407.407 0 00-.573 0L13.03 2.04a4.27 4.27 0 00-2.03-.51c-.729 0-1.425.189-2.029.51L7.32 .389a.407.407 0 00-.573 0 .409.409 0 000 .574L8.317 2.534c-1.028.81-1.695 2.075-1.695 3.496 0 .06.008.118.008.178h9.741c0-.06.008-.118.008-.178 0-1.421-.667-2.686-1.695-3.496zM9.309 4.858a.47.47 0 01-.47-.47.47.47 0 01.47-.47.47.47 0 01.47.47.47.47 0 01-.47.47zm5.378 0a.47.47 0 01-.47-.47.47.47 0 01.47-.47.47.47 0 01.47.47.47.47 0 01-.47.47zM5.377 17.064c0-.97.788-1.76 1.765-1.76.976 0 1.765.79 1.765 1.76s-.789 1.76-1.765 1.76a1.766 1.766 0 01-1.765-1.76zm11.481 0c0-.97.788-1.76 1.766-1.76.976 0 1.765.79 1.765 1.76s-.789 1.76-1.765 1.76a1.766 1.766 0 01-1.766-1.76z"/></svg>';
    }
    
    // iOS logo placeholder
    const iosLogo = document.getElementById('ios-logo');
    if (iosLogo && !iosLogo.complete) {
        iosLogo.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="%23999" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.33-.89 3.12-.84 1.3.1 2.29.53 2.99 1.55-2.61 1.54-2.2 5.04.16 6.22-.44 1.27-.95 2.51-1.35 3.24zm-3.1-15.75c-.58.04-1.35.32-1.98.81-.55.43-1.09 1.14-1.25 1.83 0 0 1.66.35 2.69-.42.9-.65 1.14-1.72 1.14-1.72-.23-.31-.6-.5-.6-.5z"/></svg>';
    }
}); 