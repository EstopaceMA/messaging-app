import Head from "next/head";
import dynamic from "next/dynamic";
import LoadingComponent from "../components/LoadingComponent";
import "@sendbird/uikit-react/dist/index.css";

const DynamicChatApp = dynamic(() => import("../components/Chat"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Messaging App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ height: "100vh", width: "100vw" }}>
          <DynamicChatApp />
        </div>
      </main>
    </>
  );
}
