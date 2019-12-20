/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import './layout.scss';
import { googleFont } from '../../utils/typography';

export interface LayoutPropsType {
  children: Object;
}

const Layout = (props: LayoutPropsType) => {
  const { children } = props;
  const [isTop, setIsTop] = useState(true);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const setTop = () => {
      if (window.pageYOffset < window.innerHeight) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    document.addEventListener('scroll', setTop);
    return () => document.removeEventListener('scroll', setTop);
  }, []);

  return (
    <>
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${googleFont}`}
          rel="stylesheet"
        />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="content">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} JunhoBaik, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>

      <div
        id="top"
        style={{
          opacity: isTop ? '0' : '1',
          pointerEvents: isTop ? 'none' : 'all',
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Fa icon={faAngleDoubleUp} />
      </div>
    </>
  );
};

export default Layout;