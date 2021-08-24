import React from 'react';

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0
        }
    }
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
        
      }
    
      handlePriceChange = (e) => {
          this.setState({price: e.target.value})
         
      }
    

    render() {

        return(
            <>
                <h1>Add</h1>
                <input type='text' onChange={this.handleNameChange}></input>
                <input type='range' min={1} max={10} onChange={this.handlePriceChange}></input><span>{this.state.price}</span>
                <button onClick={() => {this.props.addItem(this.state.name, this.state.price)}}>Envoyer</button>
            </>
        )
    };
};

export default Add;