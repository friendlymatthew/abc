import Head from "next/head";
import AnnouncementBar from "~/utilities/announcement-bar/components/announcement-bar";
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
        <AnnouncementBar />
        <div className="flex w-full flex-grow justify-center">
          <div className="hidden sm:block">
            <Sidebar />
          </div>
          <MessageView />
        </div>
      </main>
    </>
  );
}
