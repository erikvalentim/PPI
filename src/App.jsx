import "./styles/theme.css";
import "./styles/global.css";
import "./app.css";
import { MyText } from "./components/Mytext";

export default function App() {
  const texts = [
    { title: "React Component 1", text: "Olá mundo" },
    { title: "React Component 2", text: "Olá mundo" },
    { title: "React Component 3", text: "Olá mundo" },
    { title: "React Component 4", text: "Olá mundo" },
    { title: "React Component 5", text: "Olá mundo" },
  ];

  return (
    //react fragment
    <>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
      {texts.map((text, index) => (
        <MyText key={index} title={`${text.title} ${index + 1}`}>
          {text.text}
        </MyText>
      ))}
    </>
  );
}
