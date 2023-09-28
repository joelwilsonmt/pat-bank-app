import {HashRouter, Route, Routes} from 'react-router-dom'
import {UserContext} from './providers/UserContext';
import NavBar from './components/Navbar/Navbar';
import './App.css'
import {Home, CreateAccount} from './components/pages'


const App = () => {
  return (
    <UserContext>
      <div className="header-section">
        <a className="nav-link" href="/">
          <img src="./images/mountainlogo.jpeg" className="bank-logo"></img>
        </a>
        <h1 className="bank-name">
          <a className="nav-link" href="/">
            Rocky Mountain Bank
          </a>
        </h1>
      </div>
      <div className="header-divider"></div>
<div className="container" style={{ padding: "40px" }}>
      <HashRouter>
        <NavBar />
      <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            {/* <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
            <Route path="/login/" component={Login} /> */}

        </Routes>
      </HashRouter>
      </div>
    </UserContext>
  );
}

export default App
