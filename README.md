# read-more-less

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/read-more-less.svg)](https://www.npmjs.com/package/read-more-less) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save read-more-less
```

## Usage

```jsx
import React, { Component } from 'react'

import ReadMoreLess from 'read-more-less'
import 'read-more-less/dist/index.css'

const initialText =
    <div>
      'Any Text Here'
    </div>
    ;
  const moreText =
    <div>
     'Any Text Here with more Text'
    </div>
    ;

class ReadMoreLess extends Component {
  render() {
    return 
    <ReadMoreLess
      initialText={initialText}
      moreText={moreText}
    />
  }
}
```

## License

MIT © [dhruvildave22](https://github.com/dhruvildave22)
# read-more-less
