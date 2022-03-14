import { MainWrapper } from './components/Wrappers/MainWrapper';
import { Top } from './components/Top/Top';
import { Logo } from './components/Logo/Logo';
import { Travel } from './components/Travel/Travel';

import './styles/Clear.css';
import './styles/Core.css';
import { TravelContextProvider } from './components/Contexts/TravelContex';
import { BottomWrapper } from './components/Wrappers/BottomWrapper';
import { AddDestination } from './components/Buttons/AddDestination';

function App() {
  return (
    <div className="App">
      <TravelContextProvider>
        <MainWrapper>
          <Top>
            <Logo />
          </Top>

          <Travel> </Travel>
        </MainWrapper>
 
      </TravelContextProvider>
    </div>
  );
}

export default App;
