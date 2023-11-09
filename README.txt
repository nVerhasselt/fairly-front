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

________________________________________________________________________________
05/11/2023
I want to make the connexion with the back-end. 
I need to understand de back-end and the database first to make sure we understood each other and my pages match for now.
________________________________________________________________________________
07/11/2023
The API call works with axios. It's ok for development mode. It appears that we would have to make a proxy for deployment.
________________________________________________________________________________
08/11/2023
-SessionList and sessionRow components which allows to map the API response object for Home view.
-click on a session open session/:id page
I used useNavigate because it seems to be more recent than useHistory (https://medium.com/@kgreve14/usehistory-usenavigate-5b383160adba)
________________________________________________________________
09/11/2023
I can get sessionId from the url thanks to useParams from react-router-dom.
I'll have to get userId.
The back-end is waiting a long and I think sessionId is a string. 
I have to check how to make it work.

to do:
-API call with userId and sessionId payload (see swagger)
-Components to map transactions
-Display name, payor, total amount, date -> onClick -> expands and display amount for each, edit button
________________________________________________________________________________

From Home page I can go on Session page after clicking on session div thanks to the sessionId added ad the and of the url. 
I want to make an API call with userId and sessionId payload.

What does the back-end expect? An object? variables in url? 
How to get sessionId? 
With localStorage? https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=The%20setItem()%20method%20allows,the%20value%20attached%20to%20it.
Or lastIndex? https://stackoverflow.com/questions/3730359/extract-url-fragment-using-jquery
What is the best use?