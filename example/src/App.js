import React from 'react'

import ReadMoreLess from 'read-more-less'
import 'read-more-less/dist/index.css'

const App = () => {
  const initialText =
    <div>
      <h4>Create React Library Example of read more and read less functionality</h4>
      <p>It is a react lbrary for read more read less functionality here you can get easier way to get read more read less by using multiple html tags</p>
    </div>
    ;
  const moreText =
    <div>
      <h4>Create React Library Example of read more and read less functionality</h4>
      <p>It is a react lbrary for read more read less functionality here you can get easier way to get read more read less by using multiple html tags</p>
      <h1>Thank You</h1>
    </div>
    ;
  return <ReadMoreLess
    initialText={initialText}
    moreText={moreText}
  />
}

export default App
