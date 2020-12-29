module.exports = {
  plugins: [
    'gatsby-theme-blog',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Roboto:wght@300", "Open Sans"],
        display: "swap",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Moshe Feuchtwanger`,
    author: `Moshe Feuchtwanger`,
    description: ``,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/moshfeu`,
      },
      {
        name: `github`,
        url: `https://github.com/moshfeu`,
      },
    ],
  },
}
