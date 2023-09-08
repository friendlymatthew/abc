import Head from "next/head";
import MessageView from "~/utilities/chat/components/MessageView";
import Sidebar from "~/utilities/chat/components/Sidebar";

export default function ChattingPage() {
  return (
    <>
      <Head>
        <title>abc</title>
        <meta name="description" content="OPEN SOURCE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col justify-center">
        <div></div>
        <div className="flex flex-grow w-full justify-center">
          <Sidebar />
          <MessageView />
        </div>
      </main>
    </>
  );
}
