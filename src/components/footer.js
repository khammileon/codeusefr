import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
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
        <footer className={footerStyles.footer}>
            <p className={footerStyles.copyright}>Crée par <a target="_blank" rel="noopener noreferrer" className={footerStyles.copyrightLink}href="http://www.malt.fr/profile/saracammi">{data.site.siteMetadata.author}</a> © { (new Date()).getFullYear() }</p>
        </footer>
    )
}

export default Footer