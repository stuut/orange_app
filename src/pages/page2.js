import React from "react"
import ContactForm from '../components/ContactForm';
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'


const Page2 = (props) => {

return(
  <Layout location={props.location}>
  <ContactForm/>
  </Layout>

)

}

export default Page2
