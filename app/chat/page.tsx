"use client";

import { useSession, signOut } from "next-auth/react";

export default function Chat() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">YourClaude</h1>
        <div className="flex items-center gap-4">
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt=""
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="text-sm text-gray-600">{session?.user?.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome, {session?.user?.name?.split(" ")[0]}
          </h2>
          <p className="text-gray-500">
            Your Claude is ready. Chat coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
