import Header from "./componets/header/Header";
import LanguageProvider from "./context/LanguageContent";

function App() {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}

export default App;
