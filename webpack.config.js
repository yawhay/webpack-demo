import url from 'url';
import path from 'path';

export default {
  entry: './index.js',
  output: {
    path: `${url.fileURLToPath(path.dirname(import.meta.url))}/dist`,
    filename: 'bundle.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',

}