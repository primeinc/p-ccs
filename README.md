# P-CCS K-12 Art Show Information Site

This project is a React application built with Vite that provides information about the annual Plymouth-Canton Community Schools (P-CCS) K-12 Art Show.

## Features

*   Displays event details, timeline, key contacts, participation information, judging process, and more, based on research about the P-CCS K-12 Art Show.
*   Built with React and Vite.
*   Styled with Tailwind CSS.

## Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/primeinc/p-ccs.git
    cd p-ccs
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173` (or the next available port).

## Building for Production

To create a production build:
```bash
pnpm run build
```
The build artifacts will be located in the `dist/` directory.

## Deployment to GitHub Pages

This site is configured for deployment to GitHub Pages.

*   **Live Site:** [https://primeinc.github.io/p-ccs/](https://primeinc.github.io/p-ccs/)
*   **Deployment Branch:** `gh-pages`

The deployment process involves:
1.  Running `pnpm run deploy`.
2.  This script builds the project (via `predeploy`) and uses the `gh-pages` package to push the `dist` folder contents to the `gh-pages` branch.
3.  GitHub Pages is configured in the repository settings to serve from the root of the `gh-pages` branch.

Key configuration files for deployment:
*   `package.json` (see `homepage`, `predeploy`, `deploy` scripts)
*   `vite.config.js` (see `base` setting)

## Additional Tools

The repository also includes Python tools for directory operations:
*   See [PCCS_TOOLS_README.md](PCCS_TOOLS_README.md) for information about the directory scraper and analysis tools.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
