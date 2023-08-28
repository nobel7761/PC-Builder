## PC Builder Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Visit the application by clicking on this [link](www.google.com)

## Getting Started

First, install the dependencies:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

## About Application

- There is a PC Builder button(protected by nextAuth) and listbox in the navbar
- Clicking on PC Builder button will redirect user to login page where user can log in with connecting his/her github account.
- In the listbox there are 7 categories.
- Categories are: CPU, Monitor, RAM, Motherboard, Power Supply, Storage, Others. Clicking on each category will be redirect the use into corresponding route (SSG Implementation)
- Each category page has at least 6 product showing the product details.
- In the Home page(SSG Implementation), there is a banner under navbar build with swiperJS.
- Under the banner there is a featured products section which is showing 11 products randomly. Also each product card there is a Details button which will redirect the user into product details page and also, there is a Add To Builder button which will redirect user the PC Builder page
- Under the featured products section there is a featured categories section which is showing all the categories in individual card. Click on each card will redirect the user to their corresponding page.
- Uner the featured categories section there is a footer.
- The Home page is a SSG implemented.
- In PC builder page(SSR implemented) user can build his/her pc by clicking on "Choose" button. After selecting product from each category user will be able to click on "Build PC" button. Untill then this button will be disabled. Clicking on this button will show a toast which is built by React Hot Toast.
