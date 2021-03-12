# BugTracks Application

This is a portfolio application used to showcase my skill in React and Redux.

BugTracks allows users to create an account, create projects, and create tickets for managing
their project tasks.

The deployed application can be found at the following URL, [https://bugtracks.azurewebsites.net/](https://bugtracks.azurewebsites.net/).

The application has been deployed to Azure and setup to use CI/CD with Azure Pipelines.

The GitHub for the API can be found at the following [link](https://github.com/stevenGarciaDev/BugTrackerAPI) which was developed using C#, ASP.NET Core 3.1, Entity Framework Core, and SQL Server.

## Description of App Features

The features implemented accomplish the goals of making the Minimum Viable Product of a Bug Tracking app.

![Landing Page](./docs/landingPage_bugTracks.png "Landing Page")

You can sign in as a demo user so that you can quickly navigate the site and view its features.

Once you are successfully authenticated with a JSON Web Token, you have the pages for viewing projects,
creating a new project, viewing tickets, or creating a new ticket.

![Create a Project](./docs/createProject_bugTracks.png "Create Project Page")

You are also able to view a project's details as well as view and update a ticket's details.

![Edit a Ticket](./docs/editTicket_bugTracks.png "Edit a Ticket")

## Skills Learned

The skills I demonstrate in this project include the following.

- Utilize Redux as single source of truth to reduce prop drilling
- Implement styled components for organized and reusable CSS styles
- Develop asynchronous JavaScript to make request to a Web API
- Created controlled components for login, register, create ticket, and create project pages
- Implement action creators, actions, reducers, and selectors for interacting with Redux Store
- Use React Router to implement a Single Page Application
- Deploy to Azure and setup CI/CD with Azure Pipelines through the Classic Editor

## Structure of Code

For the pages, I organized the corresponding React Components to be in the pages directory. Here is my implementation for the Create Ticket page component. [Here](https://github.com/stevenGarciaDev/BugTrackerUI/blob/master/src/pages/create-ticket/create-ticket.js)

For components that are to be used as a child within a parent page component, I organized them to be in the components directory.
Here is an example of a component I implemented. [Here](https://github.com/stevenGarciaDev/BugTrackerUI/blob/master/src/components/add-project-member-input/add-project-member-input.js)

The asynchronous service calls have been organized to be in the services directory as to decouple it from the component logic.
Here is an example for the project services file. [Here](https://github.com/stevenGarciaDev/BugTrackerUI/blob/master/src/services/projectService.js)

Styled components have also been put into their own file
and imported into the component that uses it. Here is an example of the styled components for the login page. [Here](https://github.com/stevenGarciaDev/BugTrackerUI/blob/master/src/pages/login/login.styles.js)

The redux store can be found within the store directory and you can see my implementation for the User slice of the Redux store. [Here](https://github.com/stevenGarciaDev/BugTrackerUI/tree/master/src/store/user)

<hr >

Thank you for checking out my project.

Steven Garcia

- Website: [https://stevengarcia.netlify.app/](https://stevengarcia.netlify.app/)
- LinkedIn: [https://www.linkedin.com/in/stevengarciadev/](https://www.linkedin.com/in/stevengarciadev/)
