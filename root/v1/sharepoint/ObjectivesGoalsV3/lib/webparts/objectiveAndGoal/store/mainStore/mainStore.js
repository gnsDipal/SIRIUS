import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducer/RootReducer";
export var store = createStore(RootReducer, applyMiddleware(thunk));
//# sourceMappingURL=mainStore.js.map