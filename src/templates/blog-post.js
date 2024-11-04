import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"

export default function BlogPage({ data }) {
  const {
    title,
    createdAt,
    image,
    contentMarkdown: { contentMarkdown },
  } = data.contentfulBlogPage

  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {title}
          </Heading>
          <Space size={4} />
          <Text center>{createdAt}</Text>
          <Space size={4} />
          {image && (
            <GatsbyImage
              alt={image.alt}
              image={image.gatsbyImageData}
            />
          )}
          <Space size={5} />
          <div
            className={styles.blogPage}
            dangerouslySetInnerHTML={{ __html: contentMarkdown }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { excerpt } = data.contentfulBlogPage
  return <SEOHead {...data} description={excerpt} />
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPage(slug: { eq: $slug }) {
      id
      title
      slug
      createdAt(formatString: "YYYY年MM月DD日")
      image {
        alt
        gatsbyImageData
      }
      contentMarkdown{
        contentMarkdown
      }
    }
  }
`
