import Document, { Html, Head, Main, NextScript } from 'next/document';

const font = 'Poppins'
const fontWeights = '300;400;500;600;700;800;900'

class CustomDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link href={`https://fonts.googleapis.com/css2?family=${font}:wght@${fontWeights}&display=swap`} rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;