import {createTheme} from '@mui/material/styles';
import font from '@fontsource/montserrat';


const theme = createTheme({
    palette: {
        mode: 'light', primary: {
            main: '#7a5af8',
            900: '#201452',
            800: '#37257b',
            700: '#4d37a5',
            600: '#6448ce',
            500: '#7a5af8',
            400: '#957bf9',
            300: '#af9cfb',
            200: '#cabdfc',
            100: '#e4defe',
            50: '#f2effe',
        }, secondary: {
            main: '#2e90fa',
            900: '#091d32',
            800: '#123a64',
            700: '#1c5696',
            600: '#2573c8',
            500: '#2e90fa',
            400: '#58a6fb',
            300: '#82bcfc',
            200: '#abd3fd',
            100: '#d5e9fe',
            50: '#eaf4ff',
        }, tertiary: {
            main: '#ee46bc',
            900: '#380f2c',
            800: '#661d50',
            700: '#932a74',
            600: '#c13898',
            500: '#ee46bc',
            400: '#f16bc9',
            300: '#f590d7',
            200: '#f8b5e4',
            100: '#fcdaf2',
            50: '#fdedf8',
        }, success: {
            main: '#0f9918',
            900: '#031f05',
            800: '#063d0a',
            700: '#095c0e',
            600: '#0c7a13',
            500: '#0f9918',
            400: '#3fad46',
            300: '#6fc274',
            200: '#9fd6a3',
            100: '#cfebd1',
            50: '#e7f5e8',
        }, warning: {
            main: '#ff8800',
            900: '#331b00',
            800: '#663600',
            700: '#995200',
            600: '#cc6d00',
            500: '#ff8800',
            400: '#ffa033',
            300: '#ffb866',
            200: '#ffcf99',
            100: '#ffe7cc',
            50: '#fff3e6',
        }, error: {
            main: '#e54545',
            900: '#2e0e0e',
            800: '#5c1c1c',
            700: '#892929',
            600: '#b73737',
            500: '#e54545',
            400: '#ea6a6a',
            300: '#ef8f8f',
            200: '#f5b5b5',
            100: '#fadada',
            50: '#fcecec',
        }, gray: {
            main: '#282828',
            900: '#080808',
            800: '#101010',
            700: '#181818',
            600: '#202020',
            500: '#282828',
            400: '#464646',
            300: '#636363',
            200: '#818181',
            100: '#9e9e9e',
            50: '#dfdfdf',
            0: '#ffffff',
            overlay: '#080808',
        },
    },
    typography: {
        "display": {
            "01": {
                "fontSize": '160px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 900,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -3.2,
                "lineHeight": '192px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "02": {
                "fontSize": '72px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 900,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -1.296,
                "lineHeight": '80px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            },
        },
        "heading": {
            "01": {
                "fontSize": '56px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.84,
                "lineHeight": '60px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "02": {
                "fontSize": '48px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.72,
                "lineHeight": '56px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "03": {
                "fontSize": '40px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.6,
                "lineHeight": '48px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "04": {
                "fontSize": '36px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.54,
                "lineHeight": '44px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "05": {
                "fontSize": '32px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.48,
                "lineHeight": '40px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "06": {
                "fontSize": '24px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 600,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.288,
                "lineHeight": '32px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            },
        },
        "subheading": {
            "01": {
                "fontSize": '24px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.288,
                "lineHeight": '32px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "02": {
                "fontSize": '20px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.3,
                "lineHeight": '28px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "03": {
                "fontSize": '16px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.192,
                "lineHeight": '24px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            }, "04": {
                "fontSize": '14px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": -0.14,
                "lineHeight": '20px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "none"
            },
        },
        "button": {
            "regular": {
                "fontSize": '17px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": 0,
                "lineHeight": '20.4px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "capitalize"
            }, "small": {
                "fontSize": '14px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 500,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": 0,
                "lineHeight": '16.8px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "capitalize"
            },
        }, "caption": {
            "01": {
                "fontSize": '16px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 400,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": 0.16,
                "lineHeight": '16px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "uppercase"
            }, "02": {
                "fontSize": '14px',
                "textDecoration": "none",
                "fontFamily": "Poppins",
                "fontWeight": 400,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": 0.14,
                "lineHeight": '14px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "uppercase"
            }, "03": {
                "fontSize": '12px',
                "textDecoration": "none",
                "fontFamily": "Montserrat",
                "fontWeight": 400,
                "fontStyle": "normal",
                "fontStretch": "normal",
                "letterSpacing": 0.12,
                "lineHeight": '12px',
                "paragraphIndent": 0,
                "paragraphSpacing": 0,
                "textTransform": "uppercase"
            },
        }, "body": {
            "xxl": {
                "300": {

                    "fontSize": '24px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '32px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                }, "400": {

                    "fontSize": '24px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '32px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },
            }, "xtra large": {
                "300": {
                    "fontSize": '20px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '28px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },

                "400": {

                    "fontSize": '20px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '28px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },
            }, "large": {
                "300": {

                    "fontSize": '18px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '26px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },

                "400": {

                    "fontSize": '18px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '26px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },

            }, "regular": {
                "300": {
                    "fontSize": '16px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '24px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                }, "400": {
                    "fontSize": '16px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '24px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                },

            }, "smalls": {
                "300": {
                    "fontSize": '14px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '20px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 1,
                    "textTransform": "none"
                }, "400": {

                    "fontSize": '14px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '20px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 1,
                    "textTransform": "none"
                }
            }, "tiny": {
                "300": {
                    "fontSize": '12px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 300,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '16px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                }, "400": {
                    "fontSize": '12px',
                    "textDecoration": "none",
                    "fontFamily": "Montserrat",
                    "fontWeight": 400,
                    "fontStyle": "normal",
                    "fontStretch": "normal",
                    "letterSpacing": 0,
                    "lineHeight": '16px',
                    "paragraphIndent": 0,
                    "paragraphSpacing": 0,
                    "textTransform": "none"
                }
            }
        }
    }, shape: {
        borderRadius: {
            xs: 0, sm: 2, md: 4, lg: 8, xl: 16, xxl: 24, xxxl: 32,
        },
    }, overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': font,
            },
        },
    },
});

export default theme;
