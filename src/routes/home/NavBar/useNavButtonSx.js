import { useMemo } from "preact/hooks";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    fontWeight: !active && "regular"
  },
  active: {
    height: 3,
    width: 16,
    bgcolor: "text.primary",
    position: "absolute",
    bottom: 0,
    left: theme => `calc(50% - ${theme.spacing(1)})`,
    borderRadius: "1px"
  }
}), []);

export default useSx;