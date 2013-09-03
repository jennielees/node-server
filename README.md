# node-server
## a super lightweight static file server

This came into existence because I was playing around with some frontend javascript development and running into issues with CDN hosted files that didn't open from file:/// URLs.

## Installing

Plop `server.js` in your development directory -- it is designed to serve the directory it's run from, though you can modify the code to change that very easily.

You may need to `npm install express` first.

## Viewing

Go to http://localhost:3333/ to view the static site. You can, of course, change the port and so forth.

## Disclaimer

This is clearly not intended for production use or anything remotely heavy-duty. I ended up copying it into a number of working directories for javascript projects in progress, and figured it was worth putting up on github. 
