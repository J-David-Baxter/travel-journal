import Nav from './components/Nav';
import Card from './components/Card';
import './App.css';
import data from './data';

function App() {
  return (
    <div className='App'>
      <Nav />
      {data.map((item, i) => (
        <Card key={i} {...item}/>
      ))}
    </div>
  );
}

export default App;
