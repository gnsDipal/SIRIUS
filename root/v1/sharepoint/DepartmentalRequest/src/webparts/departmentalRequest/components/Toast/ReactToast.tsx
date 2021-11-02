import * as React from 'react';  
import { ToastProvider,useToasts } from 'react-toast-notifications';  
// import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// debugger;
 
 function App() {
 
//    const showToast = () => {
//      toast("New Request has been raised!")
//    };
 
   return (
     <div className="App">
       {/* <div>
           {
            toast.success("New Request has been raised!", {
            toastId: 'success1',
            })
            }
         <ToastContainer/>
       </div> */}
     </div>
   );
 }
 
 export default App;