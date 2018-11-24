import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import cupcake from '../images/cupcake-clipart-cupcake14.png'
const NotFound = () => (
  <Fragment>
    <Header size="huge" inverted color="red">
      404 Page Not Found
    </Header>
    <Image src={cupcake} />
  </Fragment>
)

export default NotFound
