This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Logique

- Le projet est construit en utilisant Next.js

npx create-next-app@latest with-typescript
npm install
npm run dev

Création des composants pour faire le design et placement des éléments dans le projet.

npm install react-icons@4.11.0

for chart librairie : recharts.org : 

npm install recharts@2.9.0

MongoDB : 
npm install mongoose
for the user model : usernae + email + password + phone must be different


debounce : 
npm i use-debounce@9.0.4


cryp password : 
npm i bcrypt@5.1.1

Auth.js
npm i next-auth@5.0.0-beta.3

for generate code : openssl rand -base64 32

await signIn("credentials", { username, password }); est une erreur de mot de passe / login incorrect 


Deploy
npm run build

folder don't need
.next
.env
node_modules