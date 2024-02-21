import { useEffect, useState } from "react";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";

import SBConversation from "@sendbird/uikit-react/GroupChannel";
import SBChannelList from "@sendbird/uikit-react/GroupChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";

export default function CustomizedApp() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");
  const {
    stores: {
      userStore: {
        user: { userId, nickname, profileUrl, isActive },
      },
    },
  } = useSendbirdStateContext();
  const user_model = {
    user_id: userId,
    nick_name: nickname,
    profile_url: profileUrl,
    is_deleted: isActive,
  };

  useEffect(() => {
    if (!userId) return;
    const insert_or_update = async () => {
      try {
        await fetch("/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user_model),
        });
      } catch (error) {
        console.error("error: ", error);
      }
    };

    insert_or_update();
  }, [userId]);

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
