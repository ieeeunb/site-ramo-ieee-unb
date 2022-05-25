require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ramo IEEE UnB",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
					resolve: "gatsby-source-filesystem",
					options: {
							name: "images",
							path: "./src/assets/images/",
					},
					__key: "images",
    },
				{
					resolve: `gatsby-plugin-env-variables`,
					options: {
						allowList: ["GATSBY_APP_API_URL"]
					},
				},
  ],
};
