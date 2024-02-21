import { useEffect, useState } from "react";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import type { GroupChannel } from "@sendbird/chat/groupChannel";
import type { User as SBUser } from "@sendbird/chat";

import SBConversation from "@sendbird/uikit-react/GroupChannel";
import SBChannelList from "@sendbird/uikit-react/GroupChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";
import { Channel, User } from "@prisma/client";

export default function CustomizedApp() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");
  const {
    stores: {
      userStore: {
        user: { userId, nickname, profileUrl, isActive },
      },
    },
  } = useSendbirdStateContext();

  useEffect(() => {
    if (!userId) return;
    const user_model = {
      user_id: userId,
      nick_name: nickname,
      profile_url: profileUrl,
      is_deleted: !isActive,
    };
    insert_or_update_user(user_model);
  }, [userId]);

  const insert_or_update_user = async (user: Partial<User>) => {
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const insert_channel = async (channel: GroupChannel) => {
    const channel_model: Omit<
      Channel,
      "id" | "created_at" | "is_deleted" | "total_messages"
    > = {
      channel_url: channel.url,
      created_by: channel.creator?.userId as string,
      chatmate_id: channel.members[1].userId,
    };

    try {
      await fetch("/api/channel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(channel_model),
      });
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const onUserProfileUpdated = (user: SBUser) => {
    const user_model = {
      user_id: user.userId,
      nick_name: user.nickname,
      profile_url: user.plainProfileUrl,
      is_deleted: false,
    };
    insert_or_update_user(user_model);
  };

  const onChannelCreated = (channel: GroupChannel) => {
    setCurrentChannelUrl(channel.url);
    insert_channel(channel);
  };

  const onChannelSelect = (channel: GroupChannel) => {
    setCurrentChannelUrl(channel?.url as string);
    console.log("onChannelSelect: ", channel);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="sendbird-app__wrap">
        <div className="sendbird-app__channellist-wrap">
          <SBChannelList
            selectedChannelUrl={currentChannelUrl}
            onChannelCreated={onChannelCreated}
            onChannelSelect={onChannelSelect}
            onUserProfileUpdated={onUserProfileUpdated}
          />
        </div>
        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onUserProfileMessage={(channel) => {
              console.log("onUserProfileMessage:", channel);
            }}
          />
        </div>
      </div>
    </div>
  );
}
