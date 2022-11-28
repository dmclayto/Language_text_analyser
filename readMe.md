this Language evaluating application takes users text input to analyse the words and deliver back the information stating whether certain statements are subjective, rates thier confidence and states if they agree or not. 

throughout this project i have used webpack, an external API, loaders & plug-ins, service workers for offline use and of course HTML,SCSS and Javascript to build this program.

RUNNING APPLICATION:
open up a fresh terminal and run "NPM i" to install the package.json files. (it is important that you wait until the npm has finished installing before running anything, this can take a few minutes.)
1. RUN SERVER - open a new terminal and run "npm run start" to run server on its port.

2. BUILD SERVER - open another new terminal and run " npm run build" to build app in production. (if the build fails it is because you didnt let npm install packages completley.)

3. TESTING: when running tests make sure to kill all terminals and server.
    open a new terminal and run "npm run test".
    - testNameChecker file tests the text input functionality
    - testApp file tests the handleSubmit application js functionality
    - testExpress file tests if the express server is routing to GET

4. DEV MODE - open a new terminal and run "npm run dev" to open project in developer mode.