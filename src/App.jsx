import Chixol from "./components/Chixol";

const App = () => {
  return (
    <>
      <div className="container">
        <h2>Chixol</h2>
        <div className="chixol-wrapper">
          <Chixol image="/1.png" title="Стеклянные" />
          <Chixol image="/2.png" title="Силиконовые" />
          <Chixol image="/3.png" title="Кожаные" />
        </div>
      </div>
    </>
  );
};

export default App;
