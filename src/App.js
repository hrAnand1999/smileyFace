import "./App.css";
import { arc, range } from "d3";
import { Face } from "./components/Face";


const width = 166;
const height = 166;

const array = range(50);

const App = () => 
  array.map(() => <Face
  width={width}
  height={height}
  centerX={width / 2}
  centerY={height / 2}
  strokeWidth={10}
  eyeOffSetX={30}
  eyeOffSetY={30}
  eyeRadius={10}
  mouthWidth={10}
  mouthRadius={40}
  arc={arc}
/>)


export default App;
