# **Docker Production Template**

## [Next.js](https://nextjs.org/), [Tailwindcss](https://tailwindcss.com/), & [Typescript](https://www.typescriptlang.org/)

This template is for deploying to docker-hub. The Docker files are meant for production and npm for development

### Start server and go to [localhost:3000](http://localhost:3000)

```bash
#Create .env file at root for dockerfile
touch .env
#Create .env.local for next.js
cd packages/landingpage
touch .env.local
#Install all dependencies locally
npm install
#You can either deploy the docker container now or just use npm to start development of site
#NPM
cd packages/landingpage
npm run dev

#Go to root folder and Docker will start in production mode
docker-compose up
#If running a docker-compose after the first do
docker-compose up --build
```
