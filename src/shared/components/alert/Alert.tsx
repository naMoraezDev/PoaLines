import React, { useCallback, useEffect, useState } from "react";

import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";

import { AlertService, AlertTypes } from "./AlertService";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface IAlertComponentState {
  isOpen: boolean;
  message: string;
  type: AlertTypes;
  onClose?: () => void;
}

export const AlertComponent: React.FC = () => {
  const [alert, setAlert] = useState<IAlertComponentState>({
    type: undefined,
    isOpen: false,
    message: "",
  });

  useEffect(() => {
    const subscription = AlertService.subscribe((msg: any) =>
      setAlert({
        message: msg.message,
        type: msg.type,
        isOpen: true,
        onClose: msg.onClose,
      })
    );
    return () => {
      subscription.unsubscribe();
      setAlert({ message: "", type: undefined, isOpen: false });
    };
  }, []);

  const handleOnCloseAlert = useCallback(() => {
    setAlert({
      ...alert,
      isOpen: false,
    });
    alert.onClose && alert.onClose();
  }, [setAlert, alert]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (alert.isOpen && alert.type !== "loading") {
      timer = setTimeout(handleOnCloseAlert, 6000);
      return () => clearTimeout(timer);
    }
  }, [alert, handleOnCloseAlert]);

  return (
    <Snackbar
      open={alert.isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Container>
        <Alert
          onClose={handleOnCloseAlert}
          action={alert.type !== "loading" ? null : <></>}
          severity={alert.type !== "loading" ? alert.type : "info"}
          icon={
            alert.type !== "loading" ? undefined : (
              <CircularProgress color="inherit" size={20} />
            )
          }
        >
          {alert.message}
        </Alert>
      </Container>
    </Snackbar>
  );
};
