import Container from "./сomponents/Container/Container";
import Date from "./сomponents/Date/Date";
import Head from "./сomponents/Head/Head";
import Filter from "./сomponents/Filter/Filter";
import ActionForm from "./сomponents/ActionForm/ActionForm";
import TodoList from "./сomponents/TodoList/TodoList";


function App() {
  return (
    <div className="App">
      <Container>
        <Date/>
        <Head/>
          <Filter/>
          <ActionForm/>
          <TodoList/>
      </Container>
    </div>
  );
}

export default App;
