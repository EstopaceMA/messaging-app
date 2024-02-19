import SendbirdApp from "@sendbird/uikit-react/App";
const APP_ID = "F7510382-6056-4E11-AB22-B6870B628241";
const USER_ID = "Mark";

const Chat = () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <SendbirdApp appId={APP_ID} userId={USER_ID} />
  </div>
);

export default Chat;
