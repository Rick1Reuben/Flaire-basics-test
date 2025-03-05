document.addEventListener("DOMContentLoaded", function () {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Show content based on the current hash in the URL
    function updateContent() {
        const currentHash = window.location.hash || "#home";  // Default to home if no hash is present
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            if (`#${section.id}` === currentHash) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Add click event listeners to nav links to update the URL hash
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            window.location.hash = e.target.getAttribute('href');  // Update the hash
            updateContent();  // Show the content for the new section
        });
    });

    // Initialize content based on the current hash in the URL
    window.addEventListener("hashchange", updateContent);

    // Initial call to display the right section based on URL
    updateContent();

    // Product Click for Details (Modal functionality)
    const products = [
        { id: 1, title: "Fashion Style 1", description: "A modern and elegant look perfect for any occasion." },
        { id: 2, title: "Fashion Style 2", description: "Trendy and comfortable, ideal for casual outings." },
        { id: 3, title: "Fashion Style 3", description: "Sophisticated and classy, designed for formal events." },
        { id: 4, title: "Fashion Style 4", description: "Bold and stylish, suitable for evening parties." },
        { id: 5, title: "Fashion Style 5", description: "Casual and relaxed, perfect for weekends." },
        { id: 6, title: "Fashion Style 6", description: "Chic and comfortable, ideal for daytime wear." }
    ];

    const productElements = document.querySelectorAll('.product');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');

    // Open the modal when a product is clicked
    productElements.forEach(productElement => {
        productElement.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const product = products.find(p => p.id == productId);
            productTitle.textContent = product.title;
            productDescription.textContent = product.description;
            modal.style.display = "block";
        });
    });

    // Close the modal when the "X" is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // Close the modal if clicked outside the modal content
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
