import { Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

import Email from "components/icons/Email";
import Location from "components/icons/Location";
import Mobile from "components/icons/Mobile";
import PersonalInfoItem from "./PersonalInfoItem";
import { getContact } from "api";
import useSx from "./usePersonalInfoSx";

const contactTemplate = {
  phone: {
    Icon: Mobile,
    title: "Call Me On",
    skeletonWidth: 121
  },
  email: {
    Icon: Email,
    title: "Email Me At",
    skeletonWidth: 215
  },
  address: {
    Icon: Location,
    title: "Find Me At",
    skeletonWidth: 179
  }
};

const PersonalInfo = () => {
  const sx = useSx();
  const [contact, setContact] = useState({});

  useEffect(() => getContact().then(contact => setContact(contact)), []);

  return (
    <Stack spacing={3} sx={sx.root}>
      {Object.entries(contactTemplate).map(([key, { Icon, title, skeletonWidth }]) => (
        <PersonalInfoItem
          key={key}
          Icon={Icon}
          title={title}
          value={contact[key] || <Skeleton width={skeletonWidth} />}
        />
      ))}
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;