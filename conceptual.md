### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The purpose of Reacxt Router it is to provide a client-side navigatio n and routing within a single page application.

- What is a single page application?
 A single-page application is a web application or website that loads a single HTML page and dynamically updates its content as the user interacts with it.

- What are some differences between client side and server side routing?
  The difference is that in the client side is that the routing occurs in the browser, and when a user clicks or enter a link or enter a URL, the routing library handles the navigation and updates the view without making a request to the server. And server-side routing the routing occurs on the server. When a user requests a different URL, the server processes the request and returns the corresponding HTML page. Each navigation action typically results in a full page reload.

- What are two ways of handling redirects with React Router? When would you use each?
  Two ways of handling redirects with React Router is using  <!-- <Redirect> --> and then you specify the target route as a prop, and when this component is rendered, it triggers a redirect to the specified route. The other way it is to access the 'history' object provided by React Router your components and use its push method to programmatically redirect users to another route.

- What are two different ways to handle page-not-found user experiences using React Router?
  Two different ways to handle page-not-found user experiences using React Router it is to use a route with a wildcard or catch-all. Then what you'll do it is define a route with a wildcard (*) or catch-all parameter that matches any URL not covered by other routes. This route can render a "Page Not Found" component. The other way it is to use the <!-- <Switch> --> componet that wrap the routes and place the "Page Not Found" route at the end of the switch. When no other routes match, this route will be rendered.

- How do you grab URL parameters from within a component using React Router?
To access URL parameters within a component using React Router, you can use the useParams hook provided by the react-router-dom library. Import useParams and call it within your component to access the parameters defined in your route. 

- What is context in React? When would you use it?
Context in React is a feature that enables the sharing of data or state between components without the need for explicit prop passing. It is particularly useful when you have data that needs to be accessible to multiple components at various levels within your component tree. Common scenarios for using context include managing user authentication, theme settings, language preferences, and global application state.

- Describe some differences between class-based components and function
  components in React.
  Several differences exist between class-based components and function components in React:

Syntax: Class components use ES6 class syntax, while function components use JavaScript functions.
State Management: Class components manage state using this.state and this.setState(), whereas function components use hooks like useState.
Lifecycle Methods: Class components have lifecycle methods (e.g., componentDidMount) that function components replace with the useEffect hook.
Readability and Simplicity: Function components are often considered more concise and easier to read, especially with the introduction of hooks in React 16.8.

- What are some of the problems that hooks were designed to solve?
Hooks were introduced in React to address several common problems and improve the development experience, including:

Complex State Logic: Hooks simplify state management in functional components, allowing them to handle complex stateful logic without the need to convert to class components.
Reusing Stateful Logic: Hooks promote the reuse of stateful logic (e.g., custom hooks) across multiple components, reducing code duplication.
Side Effects: Hooks, particularly useEffect, provide a more declarative and predictable way to manage side effects compared to lifecycle methods.
Encapsulation: Hooks encourage encapsulation of related logic within functional components, enhancing code organization and readability.
Simplifying Component Logic: Hooks make it easier to separate concerns in components, such as state management, effects, and context usage, leading to cleaner and more maintainable code.