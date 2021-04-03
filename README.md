# hackathon_back

**For endpoints testing use => [Deployed API](https://nea-server.herokuapp.com/)**: https://nea-server.herokuapp.com/

```npm run seed``` to seed database with CSV file.

```npm run dev``` to run in development.

**findAll and addList** are unprotected for both models(nea and user) thus you can check it without auth.<br>

If you want to test the rest of endpoints use:<br>
**username: carlos - password: 1234**
for login. This will return a token.

Or you can signup using the POST endpoint **/api/auth** this will return a token valid for 1 hour.<br>
Use that token in your **headers as x-auth-token** to access all the endpoints.

**Endpoints>>>** 

**Auth**<br>
**POST: /api/auth** to sign up<br>
**POST: /api/auth/login** to log in<br>
**GET: /api/auth/loggedUser** to check current logged user<br>

**NEAs**<br>
**POST: /api/nea** to add a list of neas (unprotected)<br>
**GET: /api/nea** to get all neas (unprotected)<br>
**GET: /api/nea/:id** to get specific nea<br>
**PUT: /api/nea/:id** to update one nea<br>
**DELETE: /api/nea/:id** to remove one nea<br>

**Users**<br>
**POST: /api/user** to add a list of users (unprotected)<br>
**GET: /api/user** to get all users (unprotected)<br>
**GET: /api/user/:id** to get one user<br>
**PUT: /api/user/:id** to update a user (must be the one that is logged in)<br>
**DELETE: /api/user/:id** to remove a user (must be the one that is logged in)<br>








