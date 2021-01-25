module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-118358576-1"],
      },
    },
    {
      resolve: "gatsby-theme-blog",
      options: {
        mdxOtherwiseConfigured: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Roboto:wght@300", "Open Sans"],
        display: "swap",
      },
    },
    "gatsby-plugin-sitemap",
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: `https://moshfeu.github.io/`,
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
