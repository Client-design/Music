import React from 'react';
// Import the global styles you created. The CSS variables must be imported 
// before or within the global styles file for them to be available everywhere.
import '../styles/variables.css'; 
import '../styles/global.css'; 


/**
 * MyApp is the component used to initialize pages.
 * @param {React.Component} Component - The active page component being rendered (e.g., index.js).
 * @param {object} pageProps - The initial props passed to the page.
 */
function MyApp({ Component, pageProps }) {
  
  // Here you can add global wrappers like:
  // - SEO/Metadata providers
  // - Context Providers (e.g., Auth, Theme)
  // - Persistent Layout elements (e.g., a global audio player, if needed)

  return (
    // Render the currently requested page component with its props
    <Component {...pageProps} />
  );
}

export default MyApp;
