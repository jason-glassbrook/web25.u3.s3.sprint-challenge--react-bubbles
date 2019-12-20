import React, { Fragment } from 'react'

import Bubbles from './Bubbles'
import ColorList from './ColorList'

import { server } from 'routes'
import { authios } from 'tools/auth'

const BubblePage = () => {
  const [colorList, setColorList] = React.useState ([])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <Fragment>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </Fragment>
  )
}

export default BubblePage
