# core-data

## CSS
Depending on whether your application using Tailwind CSS, we'll configure the CSS in one of two ways:

### WITHOUT Tailwind CSS
Import both exported `styles.css` and `tailwind.css` into your application.

```javascript
// index.js

import '@performant-software/core-data/styles.css';
import '@performant-software/core-data/tailwind.css';
```

### WITH Tailwind CSS

Import **ONLY** the `styles.css` import your application.

```javascript
// index.js

import '@performant-software/core-data/styles.css';
```

Include the `core-data` Tailwind config as a `present`, and update the `content` section to source classes from the `core-data` package.

```javascript
// tailwind.config.js

import coreDataConfig from '@performant-software/core-data/tailwind.config';

export default {
  presets: [
    coreDataConfig
  ],
  content: [
    '../../node_modules/@performant-software/core-data/**/*.{js,jsx,ts,tsx}'
  ]
};
```