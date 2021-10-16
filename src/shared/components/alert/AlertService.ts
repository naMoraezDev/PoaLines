import { Subject } from "rxjs";

export type AlertTypes =
  | "warning"
  | "success"
  | "loading"
  | "error"
  | "info"
  | undefined;

interface IAlert {
  message: string;
  type: AlertTypes;
  onClose?: () => void;
}

const alertSubject = new Subject<IAlert>();

export const AlertService = alertSubject.asObservable();

export const alert: (
  message: string,
  type: AlertTypes,
  onClose?: () => void
) => void = (message, type, onClose) => {
  alertSubject.next({
    message,
    onClose,
    type,
  });
};
