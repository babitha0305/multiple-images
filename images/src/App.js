import './App.css';
import ButtonAppBar from './appbar';
import Body from './body';
import TemporaryDrawer from './sidebar';

function App() {
  return (
    <div>
<div>
  <ButtonAppBar />
</div>
<div>
 <TemporaryDrawer /> 
</div>
<div>
  <Body />
  </div>
  
</div>

  );
}

export default App;
