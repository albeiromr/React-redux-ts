//estos tipos son muy importantes para no tener errores si estas usando typescript, 
//si no usas typescript no son necesarios y se pueden usar el useDispatch y useSelector
// que trae react-redux por defecto..............
// leer https://react-redux.js.org/using-react-redux/usage-with-typescript

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;