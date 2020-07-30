module.exports = {
  siteMetadata: {
    title: `Stanley C. Ahalt`,
    description: `Dr. Stan Ahalt is the Director of the Renaissance Computing Institute (RENCI) at UNC-Chapel Hill. As Director, he leads a team of research scientists, software and network engineers, data science specialists, and visualization experts who work closely with faculty research teams at UNC, Duke, and NC State as well as with partners across the country.`,
    website: `https://mbwatson.github.io/stan`,
    author: `Matt Watson`,
    menuItems: [
      { text: 'Home', path: '/' },
      { text: 'Biography', path: '/biography' },
      { text: 'Offices & Service', path: '/service' },
      { text: 'Publications', path: '/publications' },
      { text: 'Presentations', path: '/presentations' },
      { text: 'Honors & Awards', path: '/honors' },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Site`)
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stanley C. Ahalt`,
        short_name: `stan-ahalt`,
        start_url: `/`,
        background_color: `#00abc7`,
        theme_color: `#00abc7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/stan",
}
