# MM Dud reports

### Explanation

- This is a POC for alternative design of the heating system reporting website developed by infromation systems dept. in Ma'agan Michael
- The design closely resembles all the features offered by the current web service excluding the backend functionality.
- It was designed to ease on data transfer so it should be as light as the current design.
- The dark/light toggle was redesigend to meet the design standard and to keep the state as a cookie.

#### dud.html
This is the login page, designed to resemble and ease the login process.
#### dud_loggedin.html
This is the page that appears after logging in

## How to test the contents of this repo

### docker-compose
- Both Docker and docker-compose are required for this method.
- Run the following command in this repository's dir:
`docker-compose up-d`
- Open your favorite browser and change the address to either: 
 - http://localhost:8080/dud.html
 - http://localhost:8080/dud_loggedin.html

### Directly with the browser
- Make sure the html files are accompanied by the js and css file otherwise some feature may malfunction.
- Drag and drop the html files to your favorite browser.

Feel free to suggest all sorts of fixes and improvements to this concept.
