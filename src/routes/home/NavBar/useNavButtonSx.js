import { useMemo } from "preact/hooks";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    fontWeight: !active && "regular",
    color: active && "primary.main"
  },
  active: {
    height: 3,
    width: 16,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: theme => `calc(50% - ${theme.spacing(1)})`,
    borderRadius: "1px"
  }
}), [active]);

export default useSx;