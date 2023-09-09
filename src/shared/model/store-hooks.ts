import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = () => useDispatch<App.AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<App.RootState> = useSelector;
