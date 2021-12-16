import "./App.css";
import Header from "./Header";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Myprofile from "./component/Myprofile";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Login />
        <Signup />
        <Myprofile />
      </div>
    </>
  );
}

export default App;
