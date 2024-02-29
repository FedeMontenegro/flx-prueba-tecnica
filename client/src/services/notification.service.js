import { notification } from "antd";

export const openNotificationWithIcon = (type, msg, description) => {
    notification[type]({
      message: msg,
      description: description,
    });
  };