import "./styles/theme.css";
import "./styles/global.css";
import "./app.css";
import { MyText } from "./components/Mytext";
export default function App() {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}
export default function App() {
  return (
    //E-REACT fragment
    <> 
    <MyText />
    <MyText />
    <MyText />
    </>
  );
}