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
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-1">
          <a
            href="https://github.com/xyz-hq/abc"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-center font-semibold italic text-white hover:underline">
              github.com/xyz-hq/abc
            </p>
          </a>
        </div>
        <div className="flex w-full flex-grow justify-center">
          <Sidebar />
          <MessageView />
        </div>
      </main>
    </>
  );
}
