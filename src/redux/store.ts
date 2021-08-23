import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers"; 

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

//estos tipos son muy importantes para no tener errores si estas usando typescript, 
//si no usas typescript no son necesarios y se pueden usar el useDispatch y useSelector
// que trae react-redux por defecto..............
// leer https://react-redux.js.org/using-react-redux/usage-with-typescript

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;