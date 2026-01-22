import RegisterForm from "@/app/components/forms/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      <main className="w-full max-w-md rounded-lg bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-4 text-center text-2xl font-semibold text-black dark:text-white">
          Create an Account
        </h1>

        <p className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Fill the form below to register a new account.
        </p>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </p>
      </main>
    </div>
  );
}
