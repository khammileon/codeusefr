import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Bienvenue" />
            <h2>Hey <span role="img" aria-label="Girl behind a MacBook Pro">👩🏻‍💻</span></h2>
            <h3>Je m'appelle {data.site.siteMetadata.author}, je te souhaite la bienvenue sur mon site.</h3>
            <p>N'hésite pas à me <Link to="/contact">contacter</Link>  si tu as une question.</p>
        </Layout>
    )
}

export default IndexPage