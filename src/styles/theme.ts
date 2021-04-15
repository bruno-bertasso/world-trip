import { extendTheme, Theme } from '@chakra-ui/react';



export const theme = extendTheme({
    components: {
        divider: {
            sizes: {
                xl: {
                    h: "56px",
                    fontSize: "lg",
                    px: "32px",
                }
            }
        }
    },
    colors: {
        brand: {
            background: "#1d1d1d",
            highlight: "#FFBA08",
            highlight50: "#FFBA08",
            black: "#000000",
            white: "#ffffff",
        },
        dark: {
            heading: "#47585B",
            text: "#47585B",
            info: "#999999",
            info50: "#999999"
        },
        light: {
            heading: "#f5f8fa",
            text: "#f5f8fa",
            info: "#dadada",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                fg: 'gray.50'
            },
        },
    }
});