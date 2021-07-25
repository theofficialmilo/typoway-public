import { createTheme } from '@material-ui/core/styles';

export const CustomMuiTheme = createTheme({
  overrides: {
    MuiCard: {
      root: {
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(4px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }
    },
    MuiCardHeader: {
      action: {
        marginTop: 0,
        marginRight: 0
      }
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: '16px'
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: '0',
        display: 'block'
      },
      body: {
        borderBottom: '0',
        display: 'block'
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          color: '#fff',
          backgroundColor: "#1989fa ",
          "&:hover": {
            backgroundColor: "#1989fa ",
          },
          "& > div > h6 ": {
            color: '#fff'
          },
          "& > div > p": {
            color: '#ccc'
          },
          "& > div > span": {
            color: '#737373'
          },
          "& > div > .MuiIconButton-label": {
            color: '#ccc'
          },
          "& ~ div > span > span": {
            color: '#fff'
          },
          "& ~ div > button": {
            color: '#fff',
            "&:hover": {
              color: "#ccc"
            }
          }
        }
      },
      container: {
        "&:hover": {
          borderLeft: '6px solid #1989fa',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '0',
        color: 'inherit'
      }
    },
    MuiListItemText: {
      root: {
        flex: 'initial',
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#f6f7f9'
        }
      }
    },
    MuiTooltip: {
      tooltipPlacementBottom: {
        margin: '0 !important'
      }
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        justifyContent: "center"
      }
    },
    MuiTypography: {
      colorTextPrimary: {
        color: '#181818'
      },
      colorTextSecondary: {
        color: "#737373"
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 0,
        top: '48px',
      }
    }
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1989fa',
      light: '#6db8ff',
      dark: '#005dc6'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#737373',
      light: '#a2a2a2',
      dark: '#383838'
    },
    white: {
      main: '#fff'
    }
  },
  typography: {
    subtitle2: {
      fontFamily: 'Playfair Display',
    },
    h6: {
      fontSize: "1.125rem"
    }
  }
})

export default CustomMuiTheme