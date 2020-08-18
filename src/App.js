import React from "react";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Map} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/user/:userID" component={UserCard} />
            <Redirect to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;