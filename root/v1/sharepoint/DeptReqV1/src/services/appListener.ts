import {
    Logger,
    ConsoleListener,
    FunctionListener,
    ILogEntry,
    ILogListener,
    LogLevel
  } from "@pnp/logging";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  
// debugger;
  export default class AppListener implements ILogListener {
    
    public async setAppLogger() {
      Logger.activeLogLevel = LogLevel.Info;
      // Logger.subscribe(new ConsoleListener());
      Logger.subscribe(this.functionlistener);
      // Logger.subscribe(this);
    }

   public log(entry: ILogEntry): void {

    }


     functionlistener = new FunctionListener((entry: ILogEntry) => {
      
         if (entry.level == LogLevel.Info && (entry.message === "\"Raised a new request\"")){
          toast.success("New Request has been raised!", {
            toastId: "success",
            });
        }
        else if(entry.level == LogLevel.Info && (entry.message === "\"Ticket dispatched\"") ){
          toast.success("Ticket dispatched", {
            toastId: "success",
            });
        }
        else if(entry.level == LogLevel.Info && (entry.message === "\"Ticket assigned\"") ){
          toast.success("Ticket assigned", {
            toastId: "success",
            });
        }
        else if(entry.level == LogLevel.Info && (entry.message === "\"Please wait, ticket is being assigned\"") ){
          toast.success("Please wait, ticket is being assigned", {
            toastId: "success",
            });
        }
        else{
          console.log('Message from FunctionListener%c' + entry.message, "color:blue;");
        }
      });

  }