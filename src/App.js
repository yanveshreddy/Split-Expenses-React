import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import DashBoard from "./components/dashboard/DashBoard.js";
import Home from "./components/landingpage/Home.js";
import CreateGroup from "./components/group/CreateGroup.js";
import UserContext from './UserContext'
import GroupDash from "./components/group/GroupDash.js";
const App = () => {
 
  const [user] = React.useState({ userName: 'Anvesh Reddy',user_Id:'5df90c4fc8e7ad1124e0b59c' });

  return (
<UserContext.Provider value={user}>
 
 
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/creategroup">
         
         <CreateGroup />

        </Route>
        <Route exact path="/:groupId/groupdashboard">
          <GroupDash />
        </Route>
      </Switch>
    </Router>

    </UserContext.Provider>

  );
};

export default App;
