 import './App.css';

function App() {
  const title ='Welcome to new blog';//sring
  const likes=50;//int
  const person ={name: 'purab',age:30} //object 
  const link = 'https://google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes} Times </p>
        <p>Person {person.name}</p>
        <p>{2222}</p>
        <a href={link}>google site</a>
      </div>
    </div>
  );
}

export default App;
