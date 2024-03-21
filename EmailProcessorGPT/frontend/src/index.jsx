import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './index.css';
import 'tailwindcss/tailwind.css';

const container = document.getElementById('root'); // Identifying the root container where the app will be mounted
const root = createRoot(container); // Creating a root.

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
