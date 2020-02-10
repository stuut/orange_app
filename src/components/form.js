import React from 'react';
import Modal from 'react-responsive-modal';
import ContactForm from './ContactForm';
import styled from 'styled-components'

const Download = styled.div`
background-color:#f6861f !important;
color:#ffffff;
display:block;
font-family: 'Nunito Sans', sans-serif!important;
font-weight: 900!important;
font-size:20px!important;
padding:10px 25px;
margin:10px auto!important;
max-width:300px;
text-align:center;
cursor:pointer;
`


export default class Form extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Download onClick={this.onOpenModal}>DOWNLOAD MEDIA KIT</Download>
        <Modal open={open} onClose={this.onCloseModal} center>
          <ContactForm/>
        </Modal>
      </div>
    );
  }
}
