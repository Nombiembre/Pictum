import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "~/i18n/utils";
import { languages } from "~/i18n/ui";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { $popupState } from "~/utils/stores";
import { useStore } from "@nanostores/react";

interface Props {
  lang: keyof typeof languages;
}

const FormSupport: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  const popupState = useStore($popupState);

  const schema = z.object({
    name: z.string().min(3, {
      message: t("support.name.error"),
    }),
    email: z.string().email({
      message: t("support.email.error"),
    }),
    message: z.string().min(10, {
      message: t("support.message.error"),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });

  type formFields = z.infer<typeof schema>;

  const classes =
    "w-full rounded-lg border-none bg-offset px-4 py-3 text-default outline-none focus-visible:outline-2 focus-visible:outline-secondary -outline-offset-2 ";

  const sendEmail: SubmitHandler<formFields> = async (data) => {

    const send = await fetch("/api/sendEmail.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (send.ok) {
      $popupState.set({
        expanded: true,
        succes: true,
      });
    } else {
      $popupState.set({
        expanded: true,
        succes: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <div className="flex flex-col gap-2 md:flex-row ">
        <input
          className={`${classes} ${errors.name && "outline-red-400 focus-visible:outline-red-400"}`}
          placeholder={t("support.name")}
          {...register("name")}
        />
        {errors.name && (
          <p className="my-0 text-red-400 text-xs md:hidden">
            {errors.name.message}
          </p>
        )}
        <input
          className={`${classes} ${errors.email && "outline-red-400 focus-visible:outline-red-400"}`}
          placeholder={t("support.email")}
          {...register("email")}
        />
      </div>
      <div className="py-2">
        {errors.name && (
          <p className="my-0 hidden text-red-400 text-xs md:block">
            {errors.name.message}
          </p>
        )}
        {errors.email && (
          <p className="my-0 text-red-400 text-xs">{errors.email.message}</p>
        )}
      </div>
      <textarea
        className={`${classes} ${errors.message && "outline-red-400 focus-visible:outline-red-400"}`}
        rows={4}
        placeholder={t("support.message")}
        {...register("message")}
      ></textarea>
      {errors.message && (
        <p className="my-2 text-red-400 text-xs">{errors.message.message}</p>
      )}
      <button
        type="submit"
        className="mt-2 w-full rounded-lg bg-black py-3 text-center text-white"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-7 w-7 animate-spin fill-white text-transparent"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          t("support.submit")
        )}
      </button>
    </form>
  );
};

export default FormSupport;
