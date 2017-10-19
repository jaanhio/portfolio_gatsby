module.exports = {
  siteMetadata: {
    title: `jaanhio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}
