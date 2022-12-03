import plugin from "tailwindcss/plugin";
import { objectEntries, objectFromEntries } from "ts-extras";
// @ts-expect-error - no exposed types
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// This plugin adds each Tailwind color as a
// global CSS variable, e.g.
// var(--gray-200).
export function addVariablesForColors() {
  return plugin(({ addBase, theme }) => {
    let allColors: Record<string, string> = flattenColorPalette(
      theme("colors")
    );

    let newVars = objectFromEntries(
      objectEntries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({ ":root": newVars });
  });
}
