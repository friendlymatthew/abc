import Head from "next/head";
import UserForm from "~/utilities/sign-up/components/UserForm";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <div className="w-[30em] border-black p-4">
          <UserForm />
        </div>
      </main>
    </>
  );
}