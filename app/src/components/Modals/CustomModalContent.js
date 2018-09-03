import React from 'react'

class CustomModalContent extends React.Component {
  render() {
    return (
      <div className="modal-content">
          {this.props.children}      
      </div>
    )
  }
}

export default CustomModalContent