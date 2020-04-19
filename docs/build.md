# Build Setup

```bash
# copy and fill .env file
cp .env.example .env

# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Environment variables

Before you can run the app server, you need to set some variables.
You can either copy .env.example to .env `cp .env.example .env` and fill
the required fields. Or create a new .env and fill it with variables specified below.

**Google OAuth**

Goto [Google Developer Console](https://console.developers.google.com/apis/credentials)
and obtain `CLIENT_ID` and `CLIENT_SECRET`.  
Set `REDIRECT_URL` = `http://host/auth/callback`

**Session**

Set a key for passing to `session` middleware in `SESSION_SECRET`.

**Host & Port**

When using locally set `HOST` as `http://localhost` or `http://lvh.me`. Otherwise set your domain name.  
In case of `PORT`, set any number other than *well-known ports* when using locally. When deploying to heroku, you cannot use custom ports. Heroku sets `PORT` variable by itself.


```bash
# THESE ARE THE REQUIRED ENV VARS

# GOOGLE OAUTH
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URL=

# SESSION
SESSION_SECRET=

# HOSTNAME and PORT
HOST=
PORT=
```
[Prerequisites :arrow_left:](./prerequisites.md) |
[Home :house:](../README.md)
