import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

const BlogPages = ({ data }) => {
  const blogPages = data.allContentfulBlogPage.edges;
  return (
    <Layout>
      <SEOHead title="Blog Page" />
      <h1>{"Here's a list of all posts!"}</h1>
      <div className="posts">
        {blogPages.map(({ node: blog }) => (
          <div key={blog.id}>
            <Link to={`/blog/${blog.slug}`}>
            {blog.image && (
              <GatsbyImage
                alt={blog.image.alt}
                image={blog.image.gatsbyImageData}
              />
            )}
            {blog.title}
            </Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default BlogPages;
export const query = graphql`
  query MyQuery {
    allContentfulBlogPage(filter: {node_locale: {eq: "ja-JP"}}) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "YYYY年MM月DD日")
          image {
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`