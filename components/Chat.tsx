import {
  sendbirdSelectors,
  App as SendbirdApp,
  SendBirdProvider,
} from "@sendbird/uikit-react";
import {
  useGroupChannelListContext,
  GroupChannelListProvider,
} from "@sendbird/uikit-react/GroupChannelList/context";
import type { User } from "@sendbird/chat";
import CustomizedApp from "./CustomizedApp";

const APP_ID = "F7510382-6056-4E11-AB22-B6870B628241";
const USER_ID = "Mark";

const Chat = () => {
  return (
    <SendBirdProvider appId={APP_ID} userId={USER_ID}>
      <CustomizedApp />
    </SendBirdProvider>
  );
};

export default Chat;
