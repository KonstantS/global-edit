import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import IRootReducer from '../../types/state/IRootReducer';

export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<IRootReducer> = useSelector
