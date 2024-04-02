# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Solution URL: [david-tejada/fem-ip-address-tracker](https://github.com/david-tejada/fem-ip-address-tracker)
- Live Site URL: [Frontend Mentor | IP Address Tracker](https://dt-fem-ip-address-tracker.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Netlify Functions](https://www.netlify.com/platform/core/functions/)
- [LeafletJS](https://leafletjs.com/)
- [IP Geolocation API by IPify](https://geo.ipify.org/)

### What I learned

For this challenge I wanted to learn how to secure an API key. In the readme of the challenge it's suggested to simply not provide card details to avoid getting charges. I wanted to go the extra mile and learn how this would be done in a real project were exposing your API key is not an option.

My first idea was to use local `.env` files and avoid committing this to source control. The problem with this approach is that the API keys are still exposed in the front end. Anybody can look in the network tab of the developer tools where the API key is visible in plain text.

My next idea and what I ended up doing was using Netlify functions. Netlify functions allow you to run small snippets of code in the backend without the need to set up a server. This is the reason they are also known as "serverless functions". Netlify functions, along with the Netlify CLI and Netlify environment variables have allowed me to completely hide my API keys or even have the need to store them locally.

### Useful resources

- [How To Hide API Keys Using Netlify - YouTube](https://www.youtube.com/watch?v=m2Dr4L_Ab14)

## Author

- Website - [David Tejada](https://davidtejada.dev/)
- Frontend Mentor - [@david-tejada](https://www.frontendmentor.io/profile/david-tejada)
