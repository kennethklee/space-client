space-client
============

Top down multiplayer space game client.

DEFAULT PORT: 4000

requirements
------------
* Node 0.10.x

NOTE: Bower is needed for developers.

developer setup
---------------

### quick start
1. git clone https://github.com/kennethklee/space-client
2. `npm install`
3. `bower install`
4. `npm start`

### releasing
NOTE: you need to have repo access.

1. `gulp` to build
2. `npm version patch` to create a new release tag
3. `git push && git push --tags` to push to git

### deploying to heroku

1. contact me for heroku ssh keys
2. configure the ssh keys in your ssh config file
3. `git remote add heroku git@heroku.com:space-client.git`
4. `git push heroku`