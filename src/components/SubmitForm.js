import React from 'react'
import styled from 'styled-components'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding:10px;
  input,
  textarea {
    font-family: 'Nunito Sans', sans-serif;
    font-size: inherit;
    border: none;
    outline: none;
    background: #f2f2f2;
    color: ${props => props.theme.colors.secondary};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
  content: '';
  background: black;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  transition: 0.2s all;
  opacity: ${props => (props.overlay ? '.8' : '0')};
  visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
}

`

const Name = styled.input`
  margin: 0 2% 1em 0;
  width: 100%;
  display:inline;

  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  margin: 0 1em 1em 0;
  width: 100%;
  display:block;
  min-height:200px;

`

const File = styled.input`
  margin: 0 0 1em 0;
  width: 100%;

`



const Submit = styled.input`
  display:block;
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  min-width:200px;
  font-weight:900;
  margin-bottom:50px;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`


const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 102;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`



function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
  e.preventDefault();
  const form = e.target;

  fetch("/", {
    method: "POST",
    body: encode({
      "form-name": form.getAttribute("name"),
      ...this.state
    })
  })
    .then(this.handleSuccess(e))
    .catch(error => alert(error));
};



  handleSuccess = (e) => {
    e.target.reset();
    this.setState({
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="file-upload"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >

        <div style={{minWidth:'300px', paddingTop:'25px'}}>
        <h4 style={{fontSize:'30px', fontWeight:'900'}}>SUBMISSIONS</h4>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={this.handleChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          required
        />
        <textarea
          style={{
          padding: '10px',
          width: '100%',
          fontSize: '1rem',
          outline: '0',
          minHeight: '250px',
          resize: 'vertical',
          boxShadow: 'none',
          marginBottom: '20px',
        }}
          type="textarea" name="message" placeholder="Message"  onChange={this.handleChange}>
          </textarea>
        <File
          type="file"
          name="attachment"
          multiple
          onChange={this.handleAttachment}
        />

        <Submit name="submit" type="submit" value="SUBMIT" />

        </div>
        {this.state.showModal &&
        <Modal visible={this.state.showModal}>
          <p style={{
            fontWeight: '600',
            fontSize: '21px',
            marginBottom: '0px',
            }}>
            Thank you for your submission
          </p>
        </Modal>
        }
      </Form>


    )
  }
}



export default SubmitForm
