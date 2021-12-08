import { FunctionListener, ILogEntry, ILogListener } from "@pnp/logging";
import 'react-toastify/dist/ReactToastify.css';
export default class AppListener implements ILogListener {
    setAppLogger(): Promise<void>;
    log(entry: ILogEntry): void;
    functionlistener: FunctionListener;
}
//# sourceMappingURL=appListener.d.ts.map