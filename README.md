
To run, you just have MongoDB installed and running, and NodeJS installed.

* Start MongoDB
* Clone the repo
* `npm install` to install API dependencies and `npm start` to start the API
* Open a new terminal and navigate to the `client` directory, `npm install` to setup the Angular dependencies, and `npm start` to start the local development server
* Open http://localhost:4200 to see the application




To run in production:

(client) 
npm run ng build --env=prod

http-server ./dist -p 80 -P http://0.0.0.0:3000/ -t0

sudo http-server ./dist -p 443 -P http://0.0.0.0:3000/ -t0 -S



sudo forever start -c /usr/bin/http-server ./dist -p 443 -P http://0.0.0.0:3000/ -t0 -S

forever start -c "npm start" ./
