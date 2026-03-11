// App component - main entry point for the application, renders the heading and bowler table
import './App.css'
import BowlerTable from './components/BowlerTable'
import Heading from './components/Heading'

function App() {
  return (
    <>
      <Heading />
      <BowlerTable />
    </>
  )
}

export default App
