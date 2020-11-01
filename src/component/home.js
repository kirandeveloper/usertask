import React from 'react'; 
  
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: event.target.value}); 
        
        event.preventDefault();
        /*alert('Your favorite flavor is: ' + this.state.value);*/
    }
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}> 
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          {/*<input type="submit" value="Submit" />*/}
          <div className="pl10">{this.state.value}</div>
        </form>
        
      );
    }
  }
  
export default Home; 