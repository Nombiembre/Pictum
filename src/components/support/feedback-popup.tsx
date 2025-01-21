import { useStore } from "@nanostores/react";
import { $popupState } from "~/utils/stores";
import { useTranslations } from "~/i18n/utils";
import type { languages } from "~/i18n/ui";

interface Props {
  lang: keyof typeof languages;
}

const FeedbackPopup: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const popupState = useStore($popupState);
  const { expanded, succes } = popupState;

  const colors = {
    succes: "bg-green-400",
    error: "bg-red-400",
    succesHover: "hover:bg-green-500",
    errorHover: "hover:bg-red-500",
  };

  const text = {
    succesOne: t("form.succesOne"),
    succesTwo: t("form.succesTwo"),
    errorOne: t("form.errorOne"),
    errorTwo: t("form.errorTwo"),
  };

  const closePopup = () => {
    $popupState.set({
      expanded: false,
      succes: null,
    });
  };

  return (
    expanded && (
      <dialog
        className="absolute inset-0 bg-transparent md:px-0 px-4"
        id="feedback-popup"
        open
      >
        <div className="max-w-sm animate-wiggle rounded-lg bg-white p-12 text-center border border-default">
          <div
            className={`mx-auto -mt-14 mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
              succes ? colors.succes : colors.error
            }`}
          >
            {succes ? (
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg
                className="h-11 w-11"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle cx="12" cy="17" r="1" fill="#000000"></circle>{" "}
                  <path
                    d="M12 10L12 14"
                    stroke="#000000"
                    stroke-width="2.232"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"
                    stroke="#000000"
                    stroke-width="2.232"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>

          <span className="mb-3 block font-semibold text-xl ">
            {succes ? text.succesOne : text.errorOne}
          </span>
          <span className="mb-4 block leading-5 text-gray-600">
            {succes ? text.succesTwo : text.errorTwo}
          </span>
          <button
            onClick={closePopup}
            className={`w-full rounded-md px-4 py-2 font-medium text-white transition-colors ${
              succes
                ? `${colors.succes} ${colors.succesHover}`
                : `${colors.error} ${colors.errorHover}`
            }`}
          >
            Ok
          </button>
        </div>
      </dialog>
    )
  );
};

export default FeedbackPopup;
