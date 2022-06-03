# posthtml-crossorigin <img align="right" height="100" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![Actions Status][action]][action-url]
[![NPM][npm]][npm-url]
[![Coverage][cover]][cover-badge]
[![XO code style][style]][style-url]

Clone this repo and explain what your plugin do and why thousands of people need it ;)

Before:
``` html
<html>
  <body>
    <p class="wow">OMG</p>
  </body>
</html>
```

After:
``` html
<svg xmlns="http://www.w3.org/2000/svg">
  <text class="wow" id="wow_id" fill="#4A83B4" fill-rule="evenodd" font-family="Verdana">
    OMG
  </text>
</svg>
```

## Install

Describe how big guys can install your plugin.

```bash
npm i posthtml-crossorigin
```

## Usage

Describe how people can use this plugin. Include info about build systems if it's
necessary.

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlCrossorigin = require('posthtml-crossorigin');

posthtml()
    .use(posthtmlCrossorigin({ /* options */ }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

## Options

You write a function `value` that computed the `crossorigin` attribute for each node in the HTML tree. See the example below.

### Feature

Before:
``` html
<html>
  <body>
    <p>OMG</p>
    <script src="asdf.js"></script>
    <script src="https://mycdn.com/asdf.js"></script>
  </body>
</html>
```

Add option:
``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlCrossorigin = require('posthtml-crossorigin');

posthtml()
    .use(posthtmlCrossorigin({ 
      value: (src, current_crossorigin_value, node) => {
        // Compute a new crossorigin value here, and return it.
        
        if(src.includes("https://mycdn.com")) {
          return "anonymous"
        } else {
          // If you do not want to change the attribute, return current_crossorigin_value
          return current_crossorigin_value
        }
      }
    }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

After:
``` html
<html>
  <body>
    <p class="wow">OMG</p>
    <script src="asdf.js"></script>
    <script src="https://mycdn.com/asdf.js" crossorigin="anonymous"></script>
  </body>
</html>
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

[action]: https://github.com/JuliaPluto/posthtml-crossorigin/workflows/Actions%20Status/badge.svg
[action-url]: https://github.com/JuliaPluto/posthtml-crossorigin/actions?query=workflow%3A%22CI+tests%22

[npm]: https://img.shields.io/npm/v/posthtml-crossorigin.svg
[npm-url]: https://npmjs.com/package/posthtml-crossorigin

[style]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[style-url]: https://github.com/xojs/xo

[cover]: https://coveralls.io/repos/JuliaPluto/posthtml-crossorigin/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/JuliaPluto/posthtml-crossorigin?branch=master
