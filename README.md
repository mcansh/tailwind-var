# @mcansh/tailwind-var

easily expose your tailwind config colors as CSS Custom Properties

```js
const { addVariablesForColors } = require("@mcansh/tailwind-var");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... your tailwind config
  plugins: [addVariablesForColors()],
};
```
