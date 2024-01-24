import type { Template } from '../../models';

export const reactStarter: Template = {
  name: 'react',
  title: 'React Starter',
  thumbnail: 'assets/templates/react.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: '',
  },
  style: {
    language: 'css',
    content: `
.container,
.container button {
  text-align: center;
  font: 1em sans-serif;
}
.logo {
  width: 150px;
}
`.trimStart(),
  },
  script: {
    language: 'jsx',
    content: `
import { useState } from "react";

function Greeting(props) {
  return (
    <>
      <h1>Hello, {props.name}!</h1>
      <img className="logo" alt="logo" src="{{ __livecodes_baseUrl__ }}assets/templates/react.svg" />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Greeting name="React" />
      <Counter />
    </div>
  );
}

export default App;
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};
