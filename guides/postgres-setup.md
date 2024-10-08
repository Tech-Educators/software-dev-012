1. Create a project folder with MKDIR (name it whatever you want)
   `mkdir project`
2. cd into the project folder
3. inside the project make do `mkdir server`
4. cd into the server folder
5. inside the server folder, run `npm init -y`
6. still inside the server folder, run `touch .env .gitignore server.js`
7. still insdide the server folder, run `npm install cors express dotenv pg`
8. cd back out to the main `project` folder
9. run `npm create vite@latest`
10. call the project `client`
11. cd into the `client` folder
12. run `npm install`
13. cd back out to the main `project` folder
14. run `code .`

15. do basic express setup
16. import pg from "pg"
17. go to supabase, and get the connection string from the homepage.
18. go to your .env file, and add in this -
    `DATABASE_CONNECTION=postgresql://postgres.vstcfvucyrtgpqxmwomi:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres`
19. replace the part in squarebrackets with your database password
20. `DATABASE_CONNECTION=postgresql://postgres.vstcfvucyrtgpqxmwomi:thisismypassword@aws-0-eu-west-2.pooler.supabase.com:6543/postgres`
21. We need some way to connect/talk to our database.

```js
const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION,
});
```

22. now you can use the db object inside your express endpoints to talk to /maniuplate your database. Anything you can do in the 'query editor' on supabase, you can do here.

for example :

```js
app.get("/games", async function (request, response) {
  // we can use the 'DB' object to query/talk to mypost database.
  const result = await db.query(`SELECT * FROM games`);
  const games = result.rows;
  response.json(games);
});
```
