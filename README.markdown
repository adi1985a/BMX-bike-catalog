# 🚲💨 BMX Product Catalog 
_A static HTML, CSS, and JavaScript-based website showcasing a catalog of BMX bikes, featuring a hero section, product listings, and navigation._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Table of Contents

1. [Overview](#-overview)  
2. [Key Features](#-key-features)  
3. [Screenshots](#-screenshots)  
4. [Technical Stack & Requirements](#-technical-stack--requirements)  
5. [Local Setup & Viewing](#️-local-setup--viewing)  
6. [Website Usage & Navigation](#️-website-usage--navigation)  
7. [File Structure](#-file-structure)  
8. [Important Notes & Considerations](#-important-notes--considerations)  
9. [Contributing](#-contributing)  
10. [License](#-license)  
11. [Contact](#-contact)

---

## 📄 Overview

**BMX Product Catalog**, developed by Adrian Lesniak (Student ID: 154256), is a static website built using HTML, CSS, and JavaScript. It is designed to showcase a range of BMX bicycles. The site features an engaging hero section with a background image and introductory text, a dynamic product listing displaying BMX bikes with their images and prices, and a top navigation bar. All content is presented in English.

<p align="center">
  <img src="screenshots/1.gif" width="74%">
</p>

---

## ✨ Key Features

- 🌄 **Hero Section**:  
  - Prominently displays a large background image (`background-image.jpg`) with a semi-transparent overlay for text readability.  
  - Features a catchy title (e.g., "Rescuers on Two Wheels") and introductory text about BMX bikes.  

- 🚲 **Product Listing**:  
  - Showcases a dynamic list of BMX bikes.  
  - Each product entry includes:  
    - An image of the bike (e.g., `bmx1.jpg` to `bmx5.jpg`).  
    - The bike's name or model.  
    - Its price (e.g., "299.99 EUR").  

- 🧭 **Navigation Menu**:  
  - Provides links to different sections/pages:  
    - Home  
    - Products  
    - Add Product  
    - Edit Product  
    - Log In  

- 🦶 **Footer**:  
  - Includes author information: Adrian Lesniak, Student ID: 154256.  

- 📱 **Responsive Design**:  
  - Uses `styles.css` for styling, including responsive design rules (e.g., media queries).  
  - Includes the viewport meta tag for better compatibility on mobile devices.  

- ⚙️ **JavaScript Interactivity**:  
  - Dynamic product rendering and search functionality.  
  - Contact modal with form validation.  

---

## 🖼️ Screenshots

_Screenshots of: the website's hero section, the product listing, the navigation bar, and the footer as they appear in a web browser._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
  <img src="screenshots\7.jpg" width="300"/>
  <img src="screenshots\8.jpg" width="300"/>
  <img src="screenshots\9.jpg" width="300"/>
</p>

---

## 🛠️ Technical Stack & Requirements

### Core Technologies:
- **Structure**: HTML5  
- **Styling**: CSS3 (`styles.css`)  
- **Interactivity**: JavaScript (`main.js`)  

### Requirements:
- **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).  
- **Local Assets**: Ensure all specified CSS, JavaScript, and image files are present in the correct locations relative to `index.html`.  

---

## ⚙️ Local Setup & Viewing

1. **Clone or Download the Repository**:  
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
   *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder.)*

2. **Ensure Asset Placement**:  
   - Verify that `styles.css` and `main.js` are in the same directory as `index.html`.  
   - Ensure `background-image.jpg` and all `bmx*.jpg` product images are present and their paths in the HTML/CSS are correct.  

3. **Open in Browser or Host Locally**:  
   - **Directly in Browser**: Open `index.html` directly in your web browser.  
   - **Using a Simple HTTP Server**:  
     If you have Python installed, navigate to the project's root directory in your terminal and run:  
     ```bash
     python -m http.server 8000
     ```  
     Then, open your web browser and go to `http://localhost:8000`.  

---

## 💡 Website Usage & Navigation

1. **Interface**:  
   - **Header**: Displays the website title/logo and the main navigation links.  
   - **Hero Section**: Features a prominent background image with an overlay, the main title, and a brief description related to BMX bikes.  
   - **Product List**: Shows a grid or list of BMX bikes, each with its image and price.  
   - **Footer**: Contains author information.  

2. **Actions**:  
   - **View Products**: Scroll through the product list to see the available BMX bikes.  
   - **Navigation**: Click on the navigation links to explore different sections/pages.  

---

## 🗂️ File Structure

The project is expected to have the following basic file structure:

- `index.html`: The main HTML file containing the structure for the hero section, product list, navigation, and footer.  
- `styles.css`: The CSS file for styling all elements of the website.  
- `main.js`: The JavaScript file for any client-side interactivity.  
- `background-image.jpg`: The image used for the hero section background.  
- `bmx1.jpg`, `bmx2.jpg`, `bmx3.jpg`, `bmx4.jpg`, `bmx5.jpg`: Images for the individual BMX products.  

---

## 📝 Important Notes & Considerations

- **Dynamic Features**: The product list and search functionality are powered by JavaScript.  
- **Static Nature**: This is a static website. Features like adding, editing, or logging in would require a backend system.  

---

## 🤝 Contributing

Contributions to the **BMX Product Catalog** website are welcome!  

1. Fork the repository.  
2. Create a new branch for your feature (`git checkout -b feature/YourEnhancement`).  
3. Make your changes.  
4. Commit your changes (`git commit -m 'Feature: YourEnhancement'`).  
5. Push to the branch (`git push origin feature/YourEnhancement`).  
6. Open a Pull Request.  

---

## 📃 License

This project is licensed under the **MIT License**.  

---

## 📧 Contact

Project developed by **Adrian Lesniak**  
For questions or feedback, please open an issue on the GitHub repository or contact the repository owner/author.

---
🤘 _Showcasing BMX passion with a clean web catalog!_
