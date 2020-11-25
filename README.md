# MVC Based Backend
This project repository is an assignment created for an Internship. It is a backend project for managing Hotel Information built using CRUDE commands.

#Routes

get('/') - (Index Route) Display all the hotels available in the database

get('/hotel/new') - Get request to go on the Form page for adding new hotel to database

post('/hotel/new') - Post request to Add the hotel to the database

get('/hotel/:id') - Show the details of the the specific hotel

get('/edit/:id') - Get request to go on the edit form page for editing the hotel details 

post('/edit/:id') - Post request to fetch and edit the hotel information from the database

post('/delete/:id') - Delete request to remove the selected hotel from the database

# Tech/framework used

Node.js
MongoDB
Express.js
EJS for Templating



