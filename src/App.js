import logo from './assets/img/logo-01.svg';
import './App.css';
import Roll from './Roll.js'

function App() {
  return (
    <div className="App">
      <div className="navcontainer"> 

      <div className="logo">
        <img className="logo-thumbnail" src={logo} alt="Logo icon"/>
      </div>

      <div className="nav">
        <div className="pages">
          <p className="nav-items">PRODUCTS</p>
          <p className="nav-items">CART</p>
        </div>

        <div>
          <hr/>
        </div>
        
        <div className="phrase">
          <p>
              Our hand-made cinnamon rolls
          </p>
        </div>
      </div>

    </div>


    <div className="gallery">
        <div className="item-row">
             <Roll
                imageURL="/original-cinnamon-roll.jpg"
                itemName="Original cinnamon roll"
                itemPrice="$ 2.49" 
             />
             <Roll
                imageURL="/apple-cinnamon-roll.jpg"
                itemName="Apple cinnamon roll"
                itemPrice="$ 3.49" 
             />
             <Roll
                imageURL="/raisin-cinnamon-roll.jpg"
                itemName="Raisin cinnamon roll"
                itemPrice="$ 2.99" 
             />
          </div>
        <div className="item-row">
             <Roll
                imageURL="/walnut-cinnamon-roll.jpg"
                itemName="Walnut cinnamon roll"
                itemPrice="$ 3.49" 
             />
             <Roll
                imageURL="/double-chocolate-cinnamon-roll.jpg"
                itemName="DoubleChocolate cinnamon roll"
                itemPrice="$ 3.99" 
             />
             <Roll
                imageURL="/strawberry-cinnamon-roll.jpg"
                itemName="Strawberry cinnamon roll"
                itemPrice="$ 3.99" 
             />
          </div>
    </div>

    </div>
  );
}

export default App;
