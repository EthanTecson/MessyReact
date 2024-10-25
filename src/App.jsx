/**
 * Things Learned:
 * 1. Components
 * 2. Styles for components (modules, in-lines)
 * 3. Props
 * 4. Conditional Renders: control what gets rendered in application based on certain conditions
 *    - proptypes
 *    - default proptypes
 */

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Ethan" />
    </>
  );
}

export default App;
