import { useState } from "react";

import SBConversation from "@sendbird/uikit-react/GroupChannel";
import SBChannelList from "@sendbird/uikit-react/GroupChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";

export default function CustomizedApp() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");

  return (
    <div style={{ height: "100%" }}>
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <SBChannelList
            selectedChannelUrl={currentChannelUrl}
            onChannelCreated={(channel) => {
              setCurrentChannelUrl(channel.url);
            }}
            onChannelSelect={(channel) => {
              setCurrentChannelUrl(channel?.url as string);
            }}
            onUserProfileUpdated={(user) => {}}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation channelUrl={currentChannelUrl} />
        </div>
      </div>
    </div>
  );
}
