## Feroot Starter BE

We know home assignment can be daunting and consume a lot of time, therefore we provide you with an optional starter, so you can focus on actual task instead of infrastructure.

Before adopting it we recommend checking the code to make sure it works for you.

Features:
- TypeScript support by [`esbuild`](https://esbuild.github.io/)
- Prettier for code formatting
- Debugging enabled by default on port `9229`
- Server auto-restart on file change
- Docker Compose with MongoDB container and the app
- Sample working endpoint reading from the DB
- Migration with sample data in the DB

Want to use PostgreSQL, Nest.js or Fastify? No problem at all. Feel free to change this starter the way you like after cloning it, or use another starter from the internet. Remember it is supposed to save time for YOU.

## Getting started

Before you begin, make sure you have docker installed as well as Node.js 18.

To start the services run
```bash
docker compose up
```
Then, execute migrations to insert sample user to your DB:
```sh
npx migrate-mongo up
```
Now if you navigate to `http://127.0.0.1:3000/user/me` you should see a JSON object describing a sample user.

## Useful commands
```bash
docker compose up    # start all the services
npm run start        # start the app locally (without docker)
npm run format       # format all the code by prettier
npm run lint:ts      # check typescript for errors
npx migrate-mongo up # run all unapplied database migrations
```

### Using JavaScript

Even though the template is using TS, it's perfectly fine to use JavaScript in your submission. Change the extensions from `*.ts` to `*.js` and `import`'s to `require`' and the rest should work. You can even use both if that works for you