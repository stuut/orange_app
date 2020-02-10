import React from "react"
import SubmitForm from '../components/SubmitForm';
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'


const Submit = (props) => {
  return(
    <Layout location={props.location}>
    <SubmitForm/>

    </Layout>

  )


}
export default Submit
