import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
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

`

const Name = styled.input`
  margin: 0 1em 1em 0;
  width: 100%;
  display:inline;

  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 48%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 48%;
  }
`



const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  min-width:200px;
  font-weight:900;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`


const Modal = styled.div`
  background: white;
  min-width:300px;
  padding-top:25px;
`

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...this.state }),
      })
      .then(this.handleSuccess(event))
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = (event) => {
    event.target.reset();
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
      >

        <div style={{minWidth:'300px', paddingTop:'25px'}}>
        <h4>Please fill in your details to download the media kit</h4>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
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
          type="textarea" name="message" placeholder="Message"  onChange={this.handleInputChange}>
          </textarea>
        <Submit name="submit" type="submit" value="SUBMIT" />
        </div>
        {this.state.showModal &&
        <Modal>
          <p>
            Thank you, please click <a target="new_window" href="https://www.dropbox.com/s/rf8vt02nj3dbm4g/orange-app-media-kit.pdf?dl=0"><strong style={{color:'#f6861f'}}>HERE</strong></a> to download the media kit
          </p>
        </Modal>
        }
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
