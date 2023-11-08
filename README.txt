I'm trying to work on this project since a long time.

I don't have much time because I am working in a restaurant until I find a company. 

I want to try working in mobile first.
___________________________________________________________________________________

-Routes (WIP)

-Login page:
    .logo (react icon, will be updated)
    .Email input
    .Password input
    .Microsoft connexion button
    .'Inscription' button (Link to register page)

-Home page:
    .Fairly App header (title, no actions on mobile / navBar on desktop)
    .Sessions list
    .Plus button (popover Add session link / Join a session link)
    .Bottom NavBar for mobile, footer with infos like RGPD etc... in desktop.

-Register page? (low priority)

_________________________________________________________________________________
TO DO:

Login:
    -Remove card
    -Add Microsoft connexion

Watch this: https://www.youtube.com/watch?v=uhc4Fj2vvu0&ab_channel=Grafikart.fr again

Authentication
Login page will be the a first destination of the app?
-Compare the input infos with database and open Home page if their is a matching user.

Start these views:
    -Settings (WIP)
    -Balance
    -EditOperation
    -ErrorPage
    -JoinSession
    -Register

Add static navigation
    -Look for the right way to navigate with React router dom

Add animations
    -Popover on plus button of Home -> Add Session Or Join a session

Make it responsive, add media queries for desktop

_________________________________________________________________________________
05/11/2023
I want to make the connexion with the back-end. 
I need to understand de back-end and the database first to make sure we understood each other and my pages match for now.
_________________________________________________________________________________
07/11/2023
The API call works with axios. It's ok for development mode. It appears that we would have to make a proxy for deployment.
________________________________________________________________________________
08/11/2023
SessionList and sessionRow components which allows to map the API response object for Home view.

-