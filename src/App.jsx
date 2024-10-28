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
 *      useChange() - Triggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changesTriggers a function every time the value of the input changes 
 */

import List from "./List.jsx";
import Button from "./Button.jsx";
import MyComponent from "./MyComponent.jsx";
import MyComponent2 from "./MyComponent2.jsx";

function App() {
  return (<>
    <MyComponent2/>
  </>)
}

export default App;
