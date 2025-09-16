import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './language/langSlice'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localStorage-middleware'

const loadLanguageState = () => {
    try {
        const state = localStorage.getItem("language");
        if (state) return JSON.parse(state);
    } catch {
        console.log("Error loading language from localStorage");
    }
    return undefined;
};


export const store = configureStore({
    reducer: {
        // Aquí puedes agregar tus reducers que son los encargados de manejar el estado de tu aplicación
        language: languageReducer,
    },
    preloadedState: {
        language: loadLanguageState(),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

store.subscribe(() => {

    try {
        const langState = store.getState().language;
        localStorage.setItem("language", JSON.stringify(langState));
    } catch {
        console.log("Error saving language to localStorage");
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();