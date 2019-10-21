import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="À propos" />
                <h1>À propos</h1>
                <p><span role="img" aria-label="Waving sign">👋</span> Bienvenue ! Je m'appelle Sara, certains me connaissent sous le nom de khammileon sur les réseaux. </p>
                <p><span role="img" aria-label="Pin">📌</span> En 2018, j'ai décidé de quitter mon CDI pour devenir développeuse web. <em>Certains appellent ça le crise du quart de vie, non ? </em></p>
                <p><span role="img" aria-label="Girl behind computer">👩🏻‍💻</span> Après 5 mois de reconversion intensive avec la formation O'clock, j'ai pris mon envol et me suis lancée dans le freelancing </p>
                <p><span role="img" aria-label="E-mail">📩</span> Si vous souhaitez me contacter, c'est par <Link to="/contact">ici</Link> !</p>
            </Layout>
        </div>
    )
}

export default AboutPage
