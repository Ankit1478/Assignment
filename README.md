<h2>As for the privacy, the API keys and google auth ID and secret ID are kept not visible to the public</h2>
<br/>

<h2>Clear instructions for setting up and running the application.</h2>
<br/>
So, these are the steps to setup and run this web application:<br/>
<br/>
<h4>Setup<br/></h4>
Put your:
         GOOGLE_CLIENT_ID,<br/>
         GOOGLE_CLIENT_SECRET,<br/>
         GOOGLE_CALLBACK_URL,<br/>
         FRILL_API_KEY,<br/>
         MONGO_URI,<br/>
         SESSION_SECRET,<br/>
         PORT  in .env <br/>
in the backend<br/>
<br/>
<h4>Steps to run:</h4><br/>
In the terminal<br/>
1. cd frontend<br/>
2. npm i<br/>
3. npm start(will start the development server on the port 3000(default)<br/>
In another terminal<br/>
4. cd backend<br/>
5. install necessary libraries or packages like Axios, cors, express, express-session, passport, passport-google-oauth20 and nodemon in the command line<br/>
6. check for the scripts in the package.json file<br/>
7. run the command: npm run dev (will start the backend server using nodemon on the port 5000(default)<br/>

<h2>Demonstration</h2>
<br/>
1. On the application homepage, you will see a Google login button. <br/>
2. Click the Google login button to initiate the OAuth authentication flow.<br/>
3. A Google login window will appear. Sign in with your Google credentials.<br/>
4. Upon successful login, you will be redirected back to the application, and your authentication token will be stored.<br/>
5. After logging in, the feedback form will be displayed.<br/>
6. Select a feedback category from the dropdown menu (e.g., Product Features, Product Pricing, Product Usability).<br/>
7. Enter a rating (e.g., 4 out of 5).<br/>
8. Provide any comments you have about the product.<br/>
9. Click the submit button to send your feedback.<br/>
10. Upon submission, the feedback data (category, rating, and comments) will be sent to the backend server.<br/>
11. The backend server will store the feedback in your local database (MongoDB).<br/>
12. Simultaneously, the feedback will be sent to Frill.co via their API for further management and visualization.<br/>
13. You can view aggregated feedback for each category by navigating to the appropriate endpoint.<br/>
14. The frontend can be enhanced to display this aggregated feedback in a user-friendly manner, such as charts or lists.<br/>
15. Ensure that the feedback you submitted is also reflected on Frill.co.<br/>
16. Log in to your Frill.co account and navigate to the feedback section to verify the feedback data.<br/>
17. Check for the feedback categories, ratings, and comments that match what was submitted through your platform.<br/>
# TensorGo-Assigment
# project
