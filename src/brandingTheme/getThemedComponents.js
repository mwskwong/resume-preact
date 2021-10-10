import { alpha } from "@mui/system";

const getThemedComponents = theme => ({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.background.default, .72),
          backdropFilter: "blur(20px)",
          boxShadow: `inset 0px -1px 1px ${theme.palette.grey[100]}`
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.background.default
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto"
          }
        },
        section: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: "48px"
          },
          [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
            scrollMarginTop: "64px"
          },
          scrollMarginTop: "56px",
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10)
        },
        ".Typewriter__cursor": {
          // fontWeight: theme.typography.h2.fontWeight
        }
      }
    },
    // MuiFab: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8
    //     }
    //   }
    // },
    MuiIconButton: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    // MuiSvgIcon: {
    //   defaultProps: {
    //     htmlColor: mode === "dark" ? "#fff" : undefined
    //   }
    // },
    MuiTimeline: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiTimelineItem: {
      styleOverrides: {
        positionRight: {
          "&.MuiTimelineItem-missingOppositeContent": {
            "&::before": {
              display: "none"
            }
          },
          "& > .MuiTimelineContent-positionRight": {
            paddingRight: 0
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: "72px"
          },
          [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
            scrollMarginTop: "88px"
          },
          scrollMarginTop: "80px"
        }
      }
    }
  }
});

export default getThemedComponents;