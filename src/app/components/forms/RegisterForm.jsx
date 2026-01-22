"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/app/lib/validations/auth.schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // TODO: Call backend API
  };

  const inputClass =
    "mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none transition " +
    "border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 " +
    "dark:border-gray-700 dark:bg-zinc-900 dark:text-white";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-black dark:text-white">
          Name
        </label>
        <input {...register("name")} className={inputClass} />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-black dark:text-white">
          Email
        </label>
        <input type="email" {...register("email")} className={inputClass} />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-black dark:text-white">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className={inputClass}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}
