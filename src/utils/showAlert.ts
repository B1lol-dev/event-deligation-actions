import {
  AlertError,
  AlertSuccess,
  AlertWarn,
} from "../components/Alerts/Alert";

type TShowAlert = "success" | "warn" | "error";

export const showAlert = (type: TShowAlert, text: string): void => {
  setTimeout(() => {
    const root = document.getElementById("app")!;

    switch (type) {
      case "success":
        root.insertAdjacentHTML("beforeend", AlertSuccess(text));
        return;
      case "warn":
        root.insertAdjacentHTML("beforeend", AlertWarn(text));
        return;
      case "error":
        root.insertAdjacentHTML("beforeend", AlertError(text));
        return;
      default:
        return;
    }
  }, 0);
};
