# BMX Katalog Produktów

## Overview
BMX Katalog Produktów is an HTML-based catalog website for BMX bikes. It features a hero section, product list with images and prices, and navigation for products, adding/editing products, and login. Styled with `styles.css`, includes `main.js`, and uses Polish text.

## Features
- **Hero Section**: Displays a background image with an overlay, title ("Ratownicy na dwóch kółkach"), and introductory text.
- **Product List**: Shows five BMX bikes with images (`bmx1.jpg` to `bmx5.jpg`) and prices ($249.99–$349.99).
- **Navigation**: Links to Products, Add Product, Edit Product, and Login pages (placeholders).
- **Footer**: Includes author name and index number (Adrian Lesniak, 154256).
- **Responsive Design**: Uses `styles.css` and viewport meta tag for mobile compatibility.
- **Scripting**: Includes `main.js` for potential interactivity (not specified).

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Local assets:
  - `styles.css`: Stylesheet for layout and design
  - `main.js`: JavaScript for interactivity
  - `background-image.jpg`: Hero section background
  - `bmx1.jpg`, `bmx2.jpg`, `bmx3.jpg`, `bmx4.jpg`, `bmx5.jpg`: Product images

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `styles.css`: In the root directory.
   - `main.js`: In the root directory.
   - `background-image.jpg`: Hero section background image.
   - `bmx1.jpg` to `bmx5.jpg`: BMX bike images.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the catalog.
2. **Interface**:
   - **Header**: Shows title and navigation links (Products, Add Product, Edit Product, Login).
   - **Hero Section**: Displays background image, title, and BMX description.
   - **Product List**: View five BMX bikes with images and prices.
   - **Footer**: Shows author info (Adrian Lesniak, 154256).
3. **Actions**:
   - Click navigation links to access other pages (placeholders: `products.html`, etc.).
   - View static product list; no interactive features unless defined in `main.js`.

## File Structure
- `index.html`: Main page with hero, product list, and navigation.
- `styles.css`: Custom styles for layout and design.
- `main.js`: JavaScript for potential interactivity.
- `background-image.jpg`: Hero section background.
- `bmx1.jpg` to `bmx5.jpg`: Product images.
- `README.md`: This file, providing project documentation.

## Notes
- The page uses Polish (`lang="pl"`) for content (e.g., "Katalog produktów").
- Navigation links (`products.html`, etc.) are placeholders; create corresponding pages or update URLs.
- Images (`background-image.jpg`, `bmx1.jpg`, etc.) must exist to avoid broken links.
- The `main.js` file is included but its functionality is unspecified; ensure it’s implemented.
- No backend; product list is static. Add a backend (e.g., PHP) for dynamic features like adding/editing products.
- Assumes `styles.css` exists (not provided); ensure proper styling.
- The inline `background-image` style may need adjustment if the image path changes.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.