import React, { PureComponent } from 'react'
import "./style.css"

class Container extends PureComponent {
  render() {
    const {children, flex} = this.props;
    return (
      <div className={`main__container ${flex ? "main__container--flex" : ""}`}>{children}</div>
    )
  }
}

export default Container;