/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /* Informations à propos du site web */
  siteMetadata: {
    title: `Codeuse`,
    author: `Sara Cammi`,
    siteUrl: `https://www.codeuse.fr`,
    description: `Un blog sur le développement web, le freelancing et un peu d'UX & UI`,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s2ls1uijqvsz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `wDKic7xEeCOkkPpAWKo7QQ4jdXejKsShR2kUlBJAvvE`,
        downloadLocal: true
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images', 
    //           options: {
    //             maxWidth: 750,
    //             linkImagesToOriginal: false
    //           }
    //       }
    //     ]
    //   }
    // }
  ]
}
