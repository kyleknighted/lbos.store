# Lil Bit of Something Country Store Website

A modern, responsive website for Lil Bit of Something, a country store that sells hot food, alcohol, tobacco, and camping supplies.

## Features

- Responsive design that works on all devices
- Beautiful, rustic aesthetic that fits the country store theme
- Smooth scrolling navigation
- Product categories with visual cards
- Contact information section
- About Us section
- Back to top button for easy navigation

## Technologies Used

- HTML5
- CSS3 (with CSS variables for easy theming)
- JavaScript (vanilla, no frameworks)
- Google Fonts (Montserrat and Playfair Display)
- Font Awesome icons

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository or download the files
2. Open the `index.html` file in your web browser

## Project Structure

```
lil-bit-of-something/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Customization

### Changing Colors

The website uses CSS variables for colors, making it easy to customize the theme. To change the color scheme, edit the following variables in the `styles.css` file:

```css
:root {
    --primary-color: #8B4513; /* Saddle Brown */
    --secondary-color: #D2B48C; /* Tan */
    --accent-color: #556B2F; /* Dark Olive Green */
    --light-color: #F5F5DC; /* Beige */
    --dark-color: #3E2723; /* Dark Brown */
    --text-color: #333;
    --light-text: #fff;
}
```

### Adding Products

To add more products to a category, copy and paste the existing product card structure in the HTML file:

```html
<div class="product-card">
    <div class="product-image"></div>
    <h4>Product Name</h4>
    <p>Product description</p>
</div>
```

### Changing Images

The website uses placeholder images from Unsplash. To change the images, update the URLs in the `script.js` file under the `imageUrls` object.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
