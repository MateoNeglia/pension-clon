import './App.css';
import './styles/GlobalStyles.scss';
import './styles/utils/util-alignment.scss';
import './styles/utils/util-spacing.scss';
import './styles/utils/util-display.scss';
import './styles/utils/util-width-height.scss';
import RouterComponent from './routes/RouterComponent.js';
import './i18n.js'

function App() {
  return (        
      <RouterComponent />    
  );
}

export default App;
