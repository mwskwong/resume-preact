import { Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

import Email from "components/icons/Email";
import Location from "components/icons/Location";
import Mobile from "components/icons/Mobile";
import PersonalInfoItem from "./PersonalInfoItem";
import { getContact } from "api";
import useSx from "./usePersonalInfoSx";

const PersonalInfo = () => {
  const sx = useSx();
  const [contact, setContact] = useState({});

  useEffect(() => getContact().then(contact => setContact(contact)));

  return (
    <Stack spacing={3} sx={sx.root}>
      <PersonalInfoItem
        Icon={Mobile}
        title="Call Me On"
        value={contact.phone || <Skeleton width={121} />}
      />
      <PersonalInfoItem
        Icon={Email}
        title="Email Me At"
        value={contact.email || <Skeleton width={215} />}
      />
      <PersonalInfoItem
        Icon={Location}
        title="FInd Me At"
        value={contact.address || <Skeleton width={179} />}
      />
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;