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
      // let logDt = this.formatConsoleDate(new Date());
      // if (entry.level == LogLevel.Error)
      //   console.error('%c' + logDt + ' ==> ' + entry.message, "color:red;");
      // else if (entry.level == LogLevel.Warning)
      //   console.warn('%c' + logDt + ' ==> ' + entry.message, "color:orange;");
      // else if (entry.level == LogLevel.Info)
      //   console.info('%c' + logDt + ' ==> ' + entry.message, "color:green;");
      // else
      //   console.log('%c' + logDt + ' ==> ' + entry.message, "color:blue;");
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
        else{
          console.log('Message from FunctionListener%c' + entry.message, "color:blue;");
        }
      });

    private formatConsoleDate (date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let milliseconds = date.getMilliseconds();

      return '[' + 
             year + '-' + 
             ((month < 10) ? '0' + month: month) +
             '-' +
             ((day < 10) ? '0' + day: day) +
             'T' +
             ((hour < 10) ? '0' + hour: hour) +
             ':' +
             ((minutes < 10) ? '0' + minutes: minutes) +
             ':' +
             ((seconds < 10) ? '0' + seconds: seconds) +
             '.' +
             ('00' + milliseconds).slice(-3) +
             ']';
    }
  }