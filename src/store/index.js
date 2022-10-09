 import {createStore} from "redux";
import {rootReducer} from "./root-reducer";
// хранилище, второй парам-р для расширения в браузере
// передадим редюсер
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__()
)

export {store}




