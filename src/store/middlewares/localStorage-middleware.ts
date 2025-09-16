import type { Middleware, MiddlewareAPI, Dispatch } from '@reduxjs/toolkit'

interface ResponseProps {
    language: string;
}

export const localStorageMiddleware: Middleware =
    (state: MiddlewareAPI<Dispatch, ResponseProps>) => (next) => (action) => {

        const result = next(action)

        const language = state.getState().language
        localStorage.setItem("language", JSON.stringify(language))

        return result
    }