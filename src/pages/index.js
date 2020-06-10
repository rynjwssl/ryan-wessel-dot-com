import React from 'react';
import PropTypes from 'prop-types';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import { postListPropTypes } from '../propTypes';

const Index = ({
  title,
  headline,
  description,
  github,
  linkedin,
  twitter,
  posts,
}) => {
  return (
    <Layout
      pathname="/"
      title={title}
      headline={headline}
      description={description}
      github={github}
      linkedin={linkedin}
      twitter={twitter}
    >
      <section>
        <BlogList posts={posts} />
      </section>
    </Layout>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  posts: postListPropTypes,
};

export default Index;

export async function getStaticProps() {
  const {
    title,
    headline,
    description,
    github,
    linkedin,
    twitter,
  } = await import('../data/config.json');
  // Get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const postsData = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });

    return postsData.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title,
      headline,
      description,
      github,
      linkedin,
      twitter,
    },
  };
}
