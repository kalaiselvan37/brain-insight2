import { Toaster } from 'react-hot-toast';
import './App.css'
import Approuter from './Router/Approuter'

function App() {
  return(
    <>
      <Approuter/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )


}
export default App;