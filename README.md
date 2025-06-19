# React Portfolio Template

This project is a simple React portfolio based on [Payton Pierce's template](https://naimnazri.com/).

## Prerequisites

- **Node.js** v20 or newer
- **NPM** (Node Package Manager)
- A `.nvmrc` file is included to set Node 20 when using `nvm`.

## Getting Started

1. Install dependencies:
   ```bash
   # using npm
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Customizing Your Info

Edit `src/info/Info.js` to change your name, social links and colors:

- Update `firstName`, `lastName`, and other fields to match your details.
- Modify the `socials` array with your own links.
- Adjust the `colors` array to set the gradient and base colors across the site.

## Building and Deploying

A `Dockerfile` is included to build a production image:

```bash
# build the image
docker build -t portfolio-2024 .
# run it
docker run -p 8080:80 portfolio-2024
```

The repository also contains `.github/workflows/deploy.yml` which shows how this project can be deployed automatically to a VPS using GitHub Actions and Docker.

## License

This project is licensed under the [MIT License](LICENSE).
