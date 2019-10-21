import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1><span role="img" aria-label="404 Page">🔎</span> Erreur 404 - Page introuvable</h1>
            <p><Link to="/">Retourner sur la page d'accueil</Link></p>
        </Layout>
    )   
}

export default NotFound