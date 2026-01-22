import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      <main className="w-full max-w-md rounded-lg bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-4 text-center text-2xl font-semibold text-black dark:text-white">
          Welcome
        </h1>

        <p className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Create an account to get started or sign in if you already have one.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/auth/register"
            className="flex h-12 items-center justify-center rounded-md bg-blue-600 text-white transition hover:bg-blue-700"
          >
            Register
          </Link>

          <Link
            href="/auth/login"
            className="flex h-12 items-center justify-center rounded-md border border-gray-300 text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-zinc-800"
          >
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
