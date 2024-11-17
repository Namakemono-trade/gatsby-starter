import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import { blogLinkStyles } from '../styles.css'

const BlogPages = ({ data }) => {
  const blogPages = data.allContentfulBlogPage.edges;
  return (
    <Layout>
      <SEOHead title="Blog Page" />
      <div class="ui_container__ur0mb0">
        <h1>{"Here's a list of all posts!"}</h1>
        <div className="posts" style={{display:'flex', flexWrap:'wrap' }}>
          {blogPages.map(({ node: blog }) => (
            <div key={blog.id} style={{width:'33%' }}>
              <Link className={blogLinkStyles} to={`/blog/${blog.slug}`}>
              {blog.image && (
                <GatsbyImage
                  alt={blog.image.alt}
                  image={blog.image.gatsbyImageData}
                />
              )}
              <div class="blog-ttl" style={{ position: 'absolute', bottom: '0', wordBreak: 'break-all' }}>
                {blog.title}
                {blog.createdAtJP}
              </div>
              </Link>
            </div>
          ))}
          <span className="mgBtm__24" />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPages;
export const query = graphql`
  query MyQuery {
    allContentfulBlogPage(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          createdAtJP:createdAt(formatString: "YYYY年MM月DD日hh時mm分")
          createdAt
          image {
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`