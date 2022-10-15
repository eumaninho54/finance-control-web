import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from "react-redux";
import { store } from '..';

export const useAppSelector: TypedUseSelectorHook<typeof store.getState> = useSelector