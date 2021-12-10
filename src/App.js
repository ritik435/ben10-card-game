import react from 'react';
import './App.css';
import { CardList } from './components/card-list.components';

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    return (
      <div className="App">
        {
          <CardList monsters={this.state.monsters}>

          </CardList>
        }

      </div>
    );
  }
}

export default App;
