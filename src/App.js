import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'add',
      items: [],
      productName: "",
      price: 1
    }
  }
  selectTab = (e) => {    
    this.setState({ activeTab: e.target.innerText })
  }
addItem = (name, price) => { 
   
  this.setState({items: [...this.state.items,{ name : name, price : price }]})  
  
}
  
  render() {
    console.log(this.state.items)
    return (

      <>
        <Button isSelected={this.state.activeTab === 'add' }  onClick={this.selectTab}>
          add
        </Button>
        <Button isSelected={this.state.activeTab === 'list' }  onClick={this.selectTab}>
          list
        </Button>
        <Button isSelected={this.state.activeTab === 'pay' }  onClick={this.selectTab}>
         pay
        </Button>        
        {this.state.activeTab === 'add' && <Add addItem={this.addItem} />}
        {this.state.activeTab === 'list' && <List items={this.state.items} />}
        {this.state.activeTab === 'pay' && <Pay />}

        

      </>

    );

  }
};

export default App;