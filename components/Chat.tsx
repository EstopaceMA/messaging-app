import { SendBirdProvider } from "@sendbird/uikit-react";
import CustomizedApp from "./CustomizedApp";

const APP_ID = process.env.APP_ID as string;
const USER_ID = process.env.USER_ID as string;

const Chat = () => {
  return (
    <SendBirdProvider appId={APP_ID} userId={USER_ID}>
      <CustomizedApp />
    </SendBirdProvider>
  );
};

export default Chat;
