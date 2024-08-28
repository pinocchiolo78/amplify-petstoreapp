import './App.css';
import {  PetsIntro, PetsIntroCollection  } from './ui-components';
import {  NavBarHeader  } from './ui-components';
import {  Footer  } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader width={"100%"} 
        overrides={
          {"Add Pet": {
            style: {
              cursor: "pointer"
            },
            onClick: () => alert("Add Pet")
          }}
        }
      
      />
      <header className="App-header">
         <br />
         { /*<PetsIntro overrides={{ colortxt: {color:"blue"}}}/> */}
         { /*<PetsIntroCollection isPaginated itemsPerPage={3} /> */}
         <PetsIntroCollection
          overrideItems={({item, index}) => ({
            overrides: {
              "colortxt": {color:"green"},
              "Button/Profile": {onClick: ()=> alert(`"name: "  ${item.name}`) }
            }
          }) }
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
