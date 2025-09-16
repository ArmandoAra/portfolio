import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "es" | "pt" | "";

interface LanguageState {
    lang: Language;
}

const initialState: LanguageState = { lang: "" };

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<Language>) {
            state.lang = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;