import React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon"
          type="image/x-icon"
          href="/public/favicon.ico"
        />
    </Helmet>
    {children}
</React.Fragment>

export default Wrapper