To run the project, follow the steps:

1> Go to the path CodeChallenge/ (not inside Backend or Frontend folders)

2> Run code in terminal

```bash
npm install
```

3> Go to the path CodeChallenge/Backend and execute in terminal

```bash
cd Backend
npm run server
```

4> Go to the path CodeChallenge/Frontend and execute in terminal

```bash
cd Frontend
npm run dev
```

App requires internet connection in order to use library icons

NOTES: > In the backend was used sqllite database (in memory) in order to increase time development,
         and express framework.

       > The design was according the image provided in the url of the requirements 
         (https://www.tutorialrepublic.com/snippets/designs/crud-data-table-for-database-with-modal-form.png)

       > For styling the UI was used css and sass without styling library, in maquetation was used 
         CSS Flexbox

       > For manage the global state was used Context API with useContext Hook.

       > During the development of the application was used many hooks like useState, useEffect, useContext
      
       > The backend allow any origin request, in order to avoid issues during the test (ERRORS CORS), then
         any request is allowed from any site, if you want to restrict the requests and specify only one origin go to Backend/app.js and replace the line 9 with this content //app.use(cors({ origin: 'http://localhost:5173' }));


Emanuel Avellón López | Cuba | Aug, 2024
Thanks 👨🏻‍💻!


CONTACT:
emanuel.avellon@gmail.com
www.linkedin.com/in/emanuel-avellon