# 🔥Build a Stunning Fashion Studio Website with React JS [ Locomotive Scroll + GSAP + Framer Motion ]

![GitHub stars](https://img.shields.io/github/stars/codebucks27/wibe-studio?style=social&logo=ApacheSpark&label=Stars)&nbsp;&nbsp;
![GitHub forks](https://img.shields.io/github/forks/codebucks27/wibe-studio?style=social&logo=KashFlow&&label=Forks)&nbsp;&nbsp;
![Github Followers](https://img.shields.io/github/followers/codebucks27.svg?style=social&label=Follow)&nbsp;&nbsp;<br />

This repository contains the finished Fashion Studio website from the tutorial, with the 2026 tooling refresh described below. The final code and starter files are available in public repositories for free.

- [Final code (this repository)](https://github.com/codebucks27/wibe-studio)
- [Starter files for following the original tutorial](https://github.com/codebucks27/wibe-studio-starter-files)
- [Watch the YouTube tutorial](https://youtu.be/Ra1Fsa9YJCk)
- [Tutorial article and code links](https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap#code-links)
- [Live demo](https://wibe-studio.netlify.app/)

[![YouTube Video Views](https://img.shields.io/youtube/views/Ra1Fsa9YJCk?style=social)](https://youtu.be/Ra1Fsa9YJCk)<br />

## 🚀 2026 Refresh — What Changed

The original tutorial code (Create React App + React 17) has been modernized:

- **Build tool:** Migrated from `create-react-app` (`react-scripts`) to **Vite** for instant startup and fast HMR.
- **Package manager:** Switched to **bun**.
- **React:** `17.x` → `19.x` (uses the new `createRoot` API).
- **Routing:** `react-router-dom` `6.x` → `7.x`.
- **Animation:** `framer-motion` `6.x` → `12.x` (replaced removed `yoyo` with `repeat`/`repeatType`).
- **Styling:** `styled-components` `5.x` → `6.x` (custom DOM props converted to transient `$` props).
- **Fonts:** `@fontsource/*` `4.x` → `5.x`.
- Removed CRA-only files (`reportWebVitals`, `setupTests`, `manifest.json`, default logos, test boilerplate).

> Looking for the original tutorial code? Check out the pre-update commit: [`f256a87`](https://github.com/codebucks27/wibe-studio/commit/f256a8761be47c632f1f77ed4add04c10e91f0e6).

### Run Locally

Install Node.js 22.12+ and Bun 1.2.0 (the version recorded in `packageManager`). No API keys or environment variables are required.

```bash
git clone https://github.com/codebucks27/wibe-studio.git
cd wibe-studio
bun install --frozen-lockfile
bun run dev      # start dev server at http://localhost:3000
```

Keep `bun.lock` when installing so the checked-in dependency versions are used.

### Build and Preview

```bash
bun run build    # production build to ./build
bun run preview  # preview the production build at http://localhost:4173
```

Run the build before previewing it. For static hosting, use `bun run build` as the build command and `build` as the publish directory. Serve the contents of that directory at the site root. The app runs entirely in the browser.


### Images of The Fashion Studio Website:
![HOME](https://github.com/codebucks27/wibe-studio-starter-files/blob/main/Wibe-Home-Desktop.png)
![ABOUT](https://github.com/codebucks27/wibe-studio-starter-files/blob/main/Wibe-About-Desktop.png)
![HOME](https://github.com/codebucks27/wibe-studio-starter-files/blob/main/Wibe-Home-Moblie.png)
![ABOUT](https://github.com/codebucks27/wibe-studio-starter-files/blob/main/Wibe-About-Mobile.png)


### Code and Media Licensing

A code license has not yet been specified in this repository. Free public access does not itself grant permission to reuse or redistribute the code. Photos and video have separate terms; the creator credits below are not per-asset license records. Check the original asset pages and their terms before reusing the media.

### Resources Used in This Project

Fonts: https://fontsource.org/ <br />

### External Libraries used in this project: 

[styled-components](https://styled-components.com/docs/advanced) <br />
[GSAP](https://greensock.com/gsap/) <br />
[Framer-mMtion](https://www.framer.com/motion/) <br />
[React-Locomotive-Scroll](https://www.npmjs.com/package/react-locomotive-scroll) <br />
[Locomotive-Scroll](https://www.npmjs.com/package/locomotive-scroll) <br />

### All The Resources Used in This Website Are from👇:

Walking Girl Video:<br />
Video by cottonbro from Pexels [https://www.pexels.com/@cottonbro]<br />

Images:<br />

Ring: Photo by Arif Syuhada from Pexels<br />
https://www.pexels.com/@arifsyd15<br />

Rings: Photo by cottonbro from Pexels<br />
https://www.pexels.com/@cottonbro<br />

Earings: Photo by say straight from Pexels<br />
https://www.pexels.com/@say-straight-1400349<br />

White Tee:Photo by cottonbro from Pexels<br />
https://www.pexels.com/@cottonbro<br />

black t-shirt girl: Photo by Lena Hsvl from Pexels<br />
https://www.pexels.com/@lenaneva<br />

Red girl: Photo by Yaroslava Borz from Pexels<br />
https://www.pexels.com/@yaroslava-borz-126286496<br />

Ethnic Wear: Photo by Artem Beliaikin from Pexels<br />
https://www.pexels.com/@belart84<br />

Suit: Photo by Chloe from Pexels<br />
https://www.pexels.com/@chloekalaartist<br />

cap male: Photo by cottonbro from Pexels<br />
https://www.pexels.com/@cottonbro<br />

Watches: Photo by Mister Mister from Pexels<br />
https://www.pexels.com/@bemistermister<br />

Denim: Photo by Denis Zagorodniuc from Pexels<br />
https://www.pexels.com/@imdennyz<br />

Jacket: Photo by Simon Robben from Pexels<br />
https://www.pexels.com/@simon-robben-55958<br />

Yellow T-shirt:Photo by RAUL REYNOSO from Pexels<br />
https://www.pexels.com/@raulkingr<br />

Yellow Dress: Photo by Godisable Jacob from Pexels<br />
https://www.pexels.com/@godisable-jacob-226636<br />



### Famous Quotes Used:
"Fashion is the armour to survive the reality of everyday life."<br />
-- bill cunningham

"One is never over-dressed or under-dressed with a Little Black Dress." —Karl Lagerfeld<br />

