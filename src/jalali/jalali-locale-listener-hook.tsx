import React, { useContext } from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import jalaliday from "jalali-plugin-dayjs";
import calendar from "dayjs/plugin/calendar";
import { default as faLocale } from "./locale";

/**
 * Subscribes to the ConfigProvider locale changes and updates the dayjs calendar based on current locale.
 */
const useJalaliLocaleListener = () => {
  dayjs.extend(calendar);
  dayjs.extend(jalaliday);
  dayjs.locale(faLocale, undefined, true)

  const { locale } = useContext(ConfigProvider.ConfigContext);
  React.useEffect(() => {
    if (locale?.locale == "fa") {
      dayjs["calendar"]?.("jalali");
    } else {
      dayjs["calendar"]?.("gregory");
    }
  }, [locale]);
};

export default useJalaliLocaleListener;
