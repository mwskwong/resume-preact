import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  navButtonContainer: {
    display: {
      xs: "none",
      md: "flex"
    }
  },
  spacer: {
    flex: 1
  },
  menuButton: {
    display: {
      xs: "inline-flex",
      md: "none"
    }
  },
  navList: {
    px: 1
  }
}), []);

export default useSx;