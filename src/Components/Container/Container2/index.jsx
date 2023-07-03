import React, { PureComponent } from 'react'
import "./style.css"

class Container extends PureComponent {
  render() {
    const {children} = this.props;
    return (
      <div className='main__container'>{children}</div>
    )
  }
}

export default Container;