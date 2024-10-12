import { useContext } from "react";
import { ActiveSectionContext } from "../context/active-section-context";
import { ThemeContext } from "../context/theme-context";

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContentProvider"
    );
  }

  return context;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("Usetheme must be used within a ThemeContextProvider");
  }

  return context;
};
