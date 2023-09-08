import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>abc</title>
        <meta name="description" content="OPEN SOURCE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-900 text-[30em] font-semibold text-white">
        <p>XYZ</p>
      </div>
    </>
  );
}
