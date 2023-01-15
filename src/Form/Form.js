import React from 'react';
import { Helmet } from 'react-helmet-async';

const Form = () => {
    return (
        <div>
            <Helmet>
                <title>Form Page</title>
                <meta charSet='utf-8' />
                <meta name='description' content='Give all the descripton' />
                <meta name='keywords' content='give the all the keyword ' />
                <meta name='author' content='give the author name' />
                <meta name='viewport' content='width=device-width,initial-scale=1.0' />

                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1> this is Form Page</h1>
        </div>
    );
};

export default Form;