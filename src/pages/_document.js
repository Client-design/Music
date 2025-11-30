import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      // Set the document language
      <Html lang="en">
        <Head>
          {/* This is where you would link to external resources like Google Fonts
            or inject critical meta tags for SEO that must be server-rendered.
          */}
          <meta name="description" content="Hozaak Music & Arts Festival - The biggest music festival in Barak Valley." />
        </Head>
        
        <body>
          {/* Main renders the entire React application */}
          <Main />
          {/* NextScript handles Next.js scripts and bundles */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
