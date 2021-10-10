import * as nav from "constants/nav";

import { useEffect, useState } from "preact/hooks";

import debounce from "lodash/debounce";

const useActiveSectionId = () => {
  const [activeSectionId, setActiveSectionId] = useState(nav.HOME.id);

  const isScrollToBottom = () => window.innerHeight + window.scrollY >= document.body.offsetHeight;

  const isSectionActive = section => section
    && section.offsetTop < document.documentElement.scrollTop
    + document.documentElement.clientHeight / 8;

  useEffect(() => {
    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = debounce(() => {
      if (isScrollToBottom()) {
        setTimeout(() => setActiveSectionId(sectionIds[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (isSectionActive(section)) {
            setTimeout(() => setActiveSectionId(sectionId));
            break;
          }
        }
      }
    }, 166);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;