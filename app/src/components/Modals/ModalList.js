import React from 'react'
import Modal from './Modal'
import {openModal, closeModal} from '../../actions/modalActions'
import ReactDOM from 'react-dom'
class MyPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class ModalList extends React.Component {
  render() {
    console.log(this.props.modals.modals)
    const modals = this.props.modals.modals.map((item,i) => <MyPortal key={i} ><Modal item={item} onClose={(item) => this.props.dispatch(closeModal(item))}/></MyPortal>)
    return (
      <div className="modals">
        {modals}
      </div>
    );
  }
}

export default ModalList