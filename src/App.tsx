import "./App.css";
import { CardComponent } from "./components/card";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="py-24 px-8">
        <CardComponent />
      </main>
    </>
  );
}

export default App;
