import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        green: {
            primary: "#27AE60",
            success: "#168821"
        },

        red: {
            secundary: "#EB5757",
            negative: "#E60000"
        },

        gray: {
            0: "#F5F5F5",
            100: "#E0E0E0",
            200: "#BDBDBD",
            300: "#828282",
            600: "#333333"
        },

        yellow: {
            warning: "#FFCD07"
        },

        blue: {
            information: "#155BCB"
        }
    },

    fonts: {
        heading: "Inter",
        body: "Inter"
    },

    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.375rem",
        "2xl": "1.625rem"
    },

    styles: {
        global: {
            bg: "white",
            color: "gray.600"
        }
    }
})