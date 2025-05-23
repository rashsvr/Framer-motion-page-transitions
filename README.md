# Creative Page Transitions with Next.js and Framer Motion

This project demonstrates how to implement stunning, Awwwards-inspired page transitions in a Next.js application using Framer Motion's `AnimatePresence` hook. It features three unique page transitions: **Curve**, **Stairs**, and **Perspective (Inner)**, inspired by award-winning portfolios.

## Demo Videos

See the transitions in action! Check out the demo videos located in the `demo/` directory:

- `Curve.webm`: Showcases the smooth Curve transition.
- `Stairs.webm`: Demonstrates the elegant Stairs transition.
- `Inner.webm`: Highlights the dynamic Perspective transition.

You can find these videos at `demo/Curve.webm`, `demo/Stairs.webm`, and `demo/Inner.webm`.

## Inspired By

This project draws inspiration from the following Awwwards-winning portfolios:

- [Denis Snellenberg's Portfolio](https://dennissnellenberg.com/)
- [Alex Tkachev's Portfolio](https://alextkachev.com/services)
- [K72 Agency Portfolio](https://k72.ca/agence)

## Project Structure

The project is organized as follows:

```
src/
├── components/
│   └── Layout/
│       ├── Curve/
│       │   ├── anim.js
│       │   ├── index.jsx
│       │   └── styles.scss
│       ├── Inner/
│       │   ├── anim.js
│       │   ├── index.jsx
│       │   └── styles.scss
│       └── Stairs/
│           ├── anim.js
│           ├── index.jsx
│           └── styles.scss
├── pages/
│   ├── about.js
│   ├── contact.js
│   ├── index.js
│   ├── _app.js
│   └── _document.js
└── styles/
    ├── globals.css
    └── styles.scss
```

- **components/Layout/**: Contains the transition components (`Curve`, `Inner`, `Stairs`), each with its own animation logic (`anim.js`), JSX structure (`index.jsx`), and styles (`styles.scss`).
- **pages/**: Includes the main pages (`index.js`, `about.js`, `contact.js`) where transitions are applied, along with Next.js configuration files (`_app.js`, `_document.js`).
- **styles/**: Global CSS and SCSS files for styling the application.
- **demo/**: Contains demo videos showcasing each transition.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Create a new Next.js project** (if not already set up):

   ```bash
   npx create-next-app@latest
   ```

   Configuration options used for this project:
   - Project name: `page-transitions`
   - TypeScript: No
   - ESLint: No
   - Tailwind CSS: Yes
   - `src/` directory: Yes
   - App Router: Yes
   - Turbopack: Yes
   - Import alias: `@/*` (default)

2. **Clone or set up the project**:
   If you have the project files, ensure the directory structure matches the one above. Otherwise, follow the tutorial code to implement the transitions.

3. **Install dependencies**:
   Navigate to the project directory and run:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Install Framer Motion**:
   If not already installed, add Framer Motion to your project:

   ```bash
   npm install framer-motion
   # or
   yarn add framer-motion
   # or
   pnpm add framer-motion
   # or
   bun add framer-motion
   ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Changing Page Transitions

To switch between the **Curve**, **Stairs**, or **Inner (Perspective)** transitions, modify the wrapper component in the page files (`pages/index.js`, `pages/about.js`, `pages/contact.js`). By default, the **Curve** transition is applied.

### Example: Modifying the `about.js` Page

To change the transition type, update the import and wrapper component in `pages/about.js` (or any other page file). Below is an example of how to switch between transitions:

```jsx
import Curve from '@/components/Layout/Curve'; // Default transition
// import Inner from '@/components/Layout/Inner'; // Uncomment for Perspective transition
// import Stairs from '@/components/Layout/Stairs'; // Uncomment for Stairs transition
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Curve backgroundColor="#BCF366"> {/* Replace with Inner or Stairs to change transition */}
        <h1>About</h1>
        <div className="body">
          You can change the page transition by wrapping the content with Curve, Inner, or Stairs components.
        </div>
      </Curve>
    </>
  );
}
```

### Steps to Change Transitions

1. Open the desired page file (`index.js`, `about.js`, or `contact.js`) in the `pages/` directory.
2. Update the import statement to use one of the following:
   - `import Curve from '@/components/Layout/Curve';`
   - `import Inner from '@/components/Layout/Inner';`
   - `import Stairs from '@/components/Layout/Stairs';`
3. Replace the wrapper component (e.g., `<Curve>`, `<Inner>`, or `<Stairs>`) around the page content.
4. Save the file and refresh the browser to see the new transition.

### Notes

- Ensure only one transition component is imported and used per page to avoid conflicts.
- The `backgroundColor` prop (e.g., `#BCF366`) can be customized to match your design.
- The transitions rely on Framer Motion's `AnimatePresence` for smooth animations, which is configured in `_app.js`.

## Troubleshooting

- **Transitions not working?** Ensure `AnimatePresence` is correctly set up in `pages/_app.js` and that Framer Motion is installed.
- **Styles not applying?** Verify that the SCSS files in `components/Layout/[Transition]/styles.scss` and `styles/globals.css` are correctly imported.
- **Errors in the console?** Check for missing dependencies or syntax errors in the `anim.js` or `index.jsx` files.

## Contributing

Feel free to fork this repository, experiment with new transitions, or improve the existing ones. Pull requests are welcome!

## License

This project is licensed under the MIT License.