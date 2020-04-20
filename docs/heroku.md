# Heroku

First download and install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli).

Login to heroku using cli.
```bash
#login to heroku
heroku login
```

In the project root, run the following command to create
heroku app and add heroku git refs.
```bash
# create heroku project
heroku create app-name
```

Set Environment variables for the app.
```bash
# config environment variables
heroku config:set CLIENT_ID=clientid.apps.googleusercontent.com
heroku config:set CLIENT_SECRET=client_secret
heroku config:set REDIRECT_URL=https://appname.herokuapp.com/auth/callback
heroku config:set SESSION_SECRET=session_secret
heroku config:set HOST=0.0.0.0
```

Set default stack as container, otherwise heroku-16/18 is used
as base image.  
For more info head to [heroku docs](https://devcenter.heroku.com/articles/stack).
```bash
# set default stack as container
heroku stack:set container
```

Finally push the code to heroku git. This will trigger a build
in heroku, and after build is completed, the app is deployed.
```bash
# push the code to heroku to trigger a build
git push heroku master
```

To open the deployed webapp, goto [heroku dashboard](https://dashboard.heroku.com/).
Or run following command
```bash
# this opens the deployed app in browser
heroku open
```
