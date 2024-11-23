import ThemeProvider from "./contexts/ThemeProvider";
import Card from "./TailWind/Card";


function App() {
  return (
    <>
    
     <ThemeProvider>
      <div>
        <Card/>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App;
