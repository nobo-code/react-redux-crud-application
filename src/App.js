import react from 'react';

// function App() {
//   return (
//    <>
//     <label htmlFor="bar">bar</label>
//     <input type="text" onChange={() => {console.log("I am clicked!")}} />;
//    </>
//   )
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
