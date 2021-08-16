# Initiative

In the US alone over 400,000 people are in foster care and that number isn’t going down. Foster care isn’t just for children who have lost their parents. It includes children that have experienced abuse, neglect  and/or abandonment. Foster Care is essential to these people's well being and their acclimation into society. Foster care isn't  just about a roof over someone's head. It has to replace every aspect that a balanced upbringing would have provided.This situation is even more dire for those aging out of the foster care system. 20% of young adults aging out of foster care find themselves homeless and without support networks to help them navigate the everyday challenges of being out on their own.  They need assistance finding essential services from transportation to mental health services, emergency care to post secondary schooling and job placement.  Finding places that can help connect these young people to resources can be a full time job in itself, and it is not always obvious where to go for support.    

Initiative is a React app that will act as a portal for users to find programs they need and get them in touch with organizations related to these needs. The app will also aid an organization in finding people in need of services, along with being a direct connection for information and communication with these people.

1. Who are the target users of this application? 
People in need of foster care and/or services and the organizations that provide the services.

2. What can a user do with this application? 
An organization can list all the services rendered in one place with an easy interface, so anyone can browse these services and get connected to the right programs. This application will be a gateway for users while also acting in addition to the organization's categorical database  of young adults interested in  services that they currently offer.


## Installation 

1. In your console clone type `git clone git@github.com:Thomas88s/Front-End-Capstone.git`. 
2.  `cd` into the directory it creates
3. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
4. Run `json-server -p 8088 -w database.json` from the `api` directory.
5. `cd ..` back into the main directory.
6. Run `npm install` and wait for all dependencies to be installed.
7. Run `npm start` to verify that installation was successful.
8. Run `npm bootstrap install`  to install the bootstrap package.

## How Initiative works

1. After initial sign in, users are directed to the user side interface of the  Initiative application. This includes a user specific experience that is tailored to the user.
2. Users can view, select, and tag the programs they are interested in and will receive relevant information for the programs.
3. Users will be able to view and delete messages pertaining to them.
4. Users can save and delete upcoming events that have been posted by admin. User Deleted events are only deleted from the users profile and not the database. These events can then be viewed under their profile page and also in the events section. 
5. Users can save and delete programs that have been posted by admin. User Deleted programs are only deleted from the users profile and not the database. These programs can then be viewed under their profile page and also in the events section. 
6. A newsletter that will be displayed on the users page. This newsletter is posted by admin and can be seen by all users.
7. All data pertaining to specific users, added events and services, messages, user profile, volunteer info and donation info, is seen only by the specific user and admin.
8. Users can sign up to be a volunteer which will then got through an approval process completed by admin.
9. Users can use a form to make donations to the organization.
10. After initial sign in, admin directed to the admin side interface of the  Initiative application. This includes a admin specific experience that allows admin to interface with users. 
11. Admins are able to view users profiles for use, along with their related programs and messages. 
12. Admin and users will come in contact to one another through a message app.
13. Admin is able to add, edit, and delete services, events, messages, and news letters. This is done in the admin specific interface with admin specific nav links.
14. Admin can search a database of users to display that users specific subscribed services and message history, along with the users basic profile information.
15. Admin can search for for specific users to display their message history and the send a message to that user.
16. Admin can view all volunteer applications in the volunteer section. This contains all the relevant info user put into the sign up form. Admin then reviews the users volunteer form. If the user is accepted, Admin selects this option from the acceptance menu. Upon acceptance, the users acceptance status will change to accepted.
17. Admin has links that allow them to see the user displayed page for Home, Messages, and Services.





