Backend:
- Download and import the boxinator-backend files into an IDE of your choice.
- Open MySQL Workbench and create a new schema named "boxinatordb" or any other name of your choice.
- In application.properties found at "boxinator-backend/src/main/resources", change the spring.datasource.url,
  spring.datasource.username and spring.datasource.password to match your environment settings.
- Run the BoxinatorBackendApplication.java file found at "boxinator-backend/src/main/java/com/boxinator/boxinatorbackend"
  using the IDE.
  
 Frontend:
 - Make sure npm and Node.js are installed.
 - Download the boxinator-frontend files.
 - Open a command-line interpreter such as cmd and change the directory to where the boxinator-frontend files are located.
 - Run the following commands:
    - npm install
    - npm start
- Open a browser of your choice and visit http://localhost:8080
 
- Make sure that the backend is running before running the frontend
