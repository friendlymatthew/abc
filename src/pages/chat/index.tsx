import Head from "next/head";
import AnnouncementBar from "~/utilities/announcement-bar/components/announcement-bar";
import Sidebar from "~/utilities/chat/components/sidebar/Sidebar";
import MessageView from "~/utilities/chat/components/message-view/MessageView";
import useRoomStateEffect from "~/utilities/chat/hooks/useRoomStateEffect";
export default function ChattingPage() {
  useRoomStateEffect();
  return (
    <>
      <Head>
        <title>abc</title>
        <meta name="description" content="OPEN SOURCE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <AnnouncementBar />
        <div className="flex w-full flex-grow justify-center md:w-11/12">
          <div className="hidden w-[20em] sm:block">
            <Sidebar />
          </div>
          <MessageView />
        </div>
      </main>
    </>
  );
}
