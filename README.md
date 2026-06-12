# Car Showroom

A polished static website for a luxury car showroom built with HTML, CSS, and JavaScript.

## Overview

This project includes a multi-page showroom website with:
- Home page with featured cars and testimonials
- About page
- Cars inventory page
- Blog page
- Contact page with embedded map and contact form
- Image assets stored in the `images/` folder

## Files

- `index.html` — Home landing page
- `about.html` — About showroom page
- `cars.html` — Cars inventory and details page
- `blog.html` — Blog listing page
- `contact.html` — Contact page with map and form
- `style.css` — Global styling for the site
- `config.js` — Website configuration and data for cars, testimonials, and branding
- `form-handler.php` — Backend endpoint for contact form submissions
- `images/` — Folder containing image assets used by the website

## Usage

To preview the website locally:

```bash
cd /workspaces/Car_Showroom
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## GitHub Pages

This repository is ready to publish via GitHub Pages using the `main` branch root (`/`).

If enabled, the site will be available at:

`https://sayyamgugale.github.io/Car_Showroom/`

## Notes

- Update `config.js` to change branding, hero text, car data, testimonials, and contact details.
- Keep the `images/` folder and the asset paths in HTML consistent when adding or replacing images.

## License

No license specified.