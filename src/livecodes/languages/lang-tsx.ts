import { LanguageSpecs } from '../models';
import { parserPlugins } from './prettier';

export const tsx: LanguageSpecs = {
  name: 'tsx',
  title: 'TSX',
  info: `
  <h3>TSX</h3>
  <div>
    TypeScript in JSX. TSX is compiled to JavaScript in LiveCodes using the TypeScript Compiler.<br />
    By default it uses <code>React.createElement</code>
  </div>
  <ul>
    <li><a href="https://reactjs.org/" target="_blank" rel="noopener">React official website</a></li>
    <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener">React documentation</a></li>
    <li><a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener">JSX in React documentation</a></li>
    <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener">Typescript documentation</a></li>
  </ul>
  `,
  parser: {
    name: 'babel-ts',
    pluginUrls: [parserPlugins.babel, parserPlugins.html],
  },
  compiler: 'typescript',
  extensions: ['tsx'],
  editor: 'script',
  editorLanguage: 'typescript',
};