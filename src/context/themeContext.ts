import React, { createContext } from "react";

export type TthemeState = "light" | "dark"

type TDefaultValue = {
    themeMode: TthemeState,
    setThemeMode: (state: TthemeState) => void
}

const defaultContextValue: TDefaultValue = {
    themeMode: "light",
    setThemeMode: (state: TthemeState) => {}
}
const themeContext = createContext(defaultContextValue)

export default themeContext