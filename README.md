# widths

return class name based on window inner width

## ⚠️ Something that is 10 times better...

If you are using [Styled Components](https://www.npmjs.com/package/styled-components), please take a look at [Styled Break](https://www.npmjs.com/package/styled-break), which offer much more powerful and flexible utilities with elegant APIs.

## Installation

```bash
npm i widths
```

## Usage

```js
import widths from 'widths'

widths({ 576:"font-size-small", 768:"font-size-medium", 992:"font-size-big" },window.innerWidth)

// return font-size-small if inner width is less than 576px (not including 576)
// return font-size-medium if inner width is less than 786px (not including 786)
// return font-size-big if inner width is less than 992px (not including 992)
// if width is bigger than all the breakpoints, automatically choose the largest breakpoint class name, eg if inner width is 1200px, return font-size-big

```

## API

```js
widths({ point1:className1...[, pointN:classNameN ]}[,screenWidth])
```

**1. point:**  

breakpoint, must be integer. Return class name if window.innerWidth lower than `point` (not including `point`), lowest breakpoint has highest priority. If window.innerWidth is bigger than all breakpoints, then it automatically return the class of the biggest breakpoint.

**2. className:**

class name to return, use [clsx](https://www.npmjs.com/package/clsx) under the hood, it accepts anything [clsx](https://www.npmjs.com/package/clsx) accepts.

**3. screenWidth:**

source of the width, default is window.innerWidth
