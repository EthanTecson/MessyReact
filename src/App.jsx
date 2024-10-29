/**
 * Things Learned:
 * 1. Components
 * 2. Styles for components (modules, in-lines)
 * 3. Props
 * 4. Conditional Renders: control what gets rendered in application based on certain conditions
 *    - proptypes
 *    - default proptypes
 * 5. Rendering lists
 * 6. Click events
 *    - Can respond to clicks by passing a callback to the onClick
 * 7. React Hooks
 *    - Special function that allows functional components to use react
 *      features without writing class components 
 *      (useState, useEffect, useContext, useReducer, useCallback, and more)
 *      useState() - A React hook that allows the creation of a stateful variable 
 *                   AND a setter function to update its value in the Virtual DOM.
 *                    [name, setName]
 *      onChange() - Triggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changes 
 *      
 *      useEffect() - React Hook that tells React DO SOME CODE WHEN (pick one):
 *                      This component re-renders
 *                      This component mounts
 *                      The state of a value

 *      useEffect(function, [dependencies])

        1. useEffect(() => {})    // Runs after every re-render
        2. useEffect(() => {}, [])  // Runs only on mount
        3. useEffect(() => {}, [value]) // Runs on mount + when value changes

        // USES
        // #1 Event Listeners
        // #2 DOM Manipulation
        // #3 Subscriptions (real-time updates)
        // #4 Fetching Data from an API
        // #5 Clean up when a component unmounts
 */

import List from "./List.jsx";
import Button from "./Button.jsx";
import MyComponent from "./MyComponent.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import MyComponent3 from "./MyComponent3.jsx";
import MyComponent4 from "./MyComponent4.jsx";
import MyComponent5 from "./MyComponent5.jsx";
import MyComponent6 from "./MyComponent6.jsx";

function App() {
  return (<>
    <h1>hello</h1>
    <MyComponent5/>
    <MyComponent6/>
    </>)
}

export default App;
