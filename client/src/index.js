import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from './application';
import store from './data/store';

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><Application /></Provider>);
