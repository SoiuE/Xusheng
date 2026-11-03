# Huzhou Xusheng Technology Co., Ltd.

An English-language, responsive storefront for US customers. **Double-click `index.html` to open the website directly in a browser.** The direct-open version uses HTML, CSS, and JavaScript. React/TypeScript source files are also included for future development.

## Company information

- **Company:** Huzhou Xusheng Technology Co., Ltd.
- **Contact:** Chen Linan
- **Email:** [Xusheng12312@163.com](mailto:Xusheng12312@163.com)
- **Phone:** [+86 133 2579 3327](tel:+8613325793327)
- **Address:** No. 389-413, Taihu Road, West District, Ganghu Garden, Fenghuang Street, Huzhou City, Zhejiang Province

## Features

- English home page, company story, product catalog, and contact details
- Product cards with descriptions, category, price, and links
- Shopping bag with quantity controls and browser `localStorage` persistence
- Basic demo sign-in/sign-up UI
- Responsive mobile and desktop layout
- Replaceable product image files

## Run locally

For a quick preview, open `index.html` directly. No installation or server is required.

For React/TypeScript development, install Node.js, then run:

```bash
npm install
npm run dev
```

Build the static site with `npm run build`. Vite writes the deployable files to `dist/`.

## Replace product photos

The direct-open site uses local sample apparel photos in `images/`. It works without an internet connection. Replace any photo with your own file and update its path in the `products` array in `store.js`. The hero photo path is in `index.html`.

Sample photos illustrate clothing categories; they are **not photos of Xusheng inventory**. Product names, prices, descriptions, fabric details, and availability must be confirmed before presenting them as real goods. The images were downloaded from Pexels under its [free-use license](https://www.pexels.com/license/). Photo source pages, in product order:

- [Beige Knit Cardigan](https://www.pexels.com/photo/back-view-of-person-wearing-beige-knitted-cardigan-9311992/)
- [Classic Denim Jacket](https://www.pexels.com/photo/man-wearing-denim-jacket-17896486/)
- [Everyday White Tee](https://www.pexels.com/photo/a-basic-white-t-shirt-18186106/)
- [Relaxed Denim Jeans](https://www.pexels.com/photo/woman-in-blue-denim-bottom-12846310/)
- [Soft Beige Sweater](https://www.pexels.com/photo/young-woman-wearing-soft-sweater-in-studio-6995886/)
- [Modern White Shirt](https://www.pexels.com/photo/woman-buttoning-her-shirt-7648167/)
- [City Black Coat](https://www.pexels.com/photo/winter-portrait-of-woman-in-black-coat-30877823/)
- [Easy Denim Layer](https://www.pexels.com/photo/a-handsome-man-wearing-a-denim-jacket-over-a-white-shirt-9789623/)
- [Everyday White Sneakers](https://www.pexels.com/photo/a-person-in-white-sneaker-shoes-walking-on-the-street-12739982/)
- [White Casual Sneakers](https://www.pexels.com/photo/a-person-wearing-white-shoes-and-white-socks-7880267/)
- [Colorful Crew Socks](https://www.pexels.com/photo/two-people-wearing-socks-8187640/)
- [White Puffer Jacket](https://www.pexels.com/photo/a-woman-in-white-puffer-jacket-10177515/)
- [Relaxed Street Hoodie](https://www.pexels.com/photo/street-style-portrait-of-man-in-hooded-sweatshirt-34582212/)
- [Beige Knit Sweater](https://www.pexels.com/photo/a-woman-wearing-a-knitted-sweater-11446761/)
- [Winter City Coat](https://www.pexels.com/photo/a-woman-in-puffer-jacket-walking-on-the-street-while-wearing-headphones-10522360/)
- [Classic Lace-Up Boots](https://www.pexels.com/photo/brown-leather-lace-up-boots-4748409/)

The older React source in `src/App.tsx` still contains the original demo catalog and is separate from the direct-open site. If a local image is missing, the direct-open site shows a colored placeholder.

## Deploy from Git

Push this folder to GitHub and publish the project root as a static site on GitHub Pages, Vercel, or Netlify. The direct-open site needs no build command. Commit the `images/` directory with the site.

## Important client-side limits

The cart and demo account state live in the visitor's browser and do not sync across devices. The sign-in form is not secure authentication; it stores an email locally and does not validate credentials. Checkout is a presentation-only button: this site does not process payments, create orders, or send form submissions. Connect a hosted commerce provider to accept real orders and payments.
