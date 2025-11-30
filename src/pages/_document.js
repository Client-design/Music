import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      // Set the document language
      <Html lang="en">
        <Head>
          {/* This is where you would link to external resources like Google Fonts
            or inject critical meta tags for SEO that must be server-rendered.

            We are NOT including the Font Awesome CDN here because we switched
            to React Icons, which is the modern approach.
            
            Example of linking a font (replace with your desired font):
            <link 
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" 
              rel="stylesheet" 
            /> 
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
