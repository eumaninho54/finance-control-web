import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from "react-redux";
import { store } from '..';


export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
