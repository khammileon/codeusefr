import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
    return (
        <div>
            <Head title="Contact"/>
            <Layout>
            <h1>Contact</h1>
            <p>Je suis relativement active sur Twitter, mon username est <em>évidemment</em> <a href="http://www.twitter.com/khammileon" target="_blank" rel="noopener noreferrer">@khammileon</a></p>
            <p>Vous pouvez me ping via ce formulaire si vous avez des suggestions, des questions, ou bien tout simplement pour faire coucou ! <span role="img" aria-label="Waving sign">👋</span></p>
            </Layout>
        </div>
    )
}

export default ContactPage
