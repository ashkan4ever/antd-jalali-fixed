import dayjs from "dayjs";
import jalaliday from "jalali-plugin-dayjs";
import calendar from "dayjs/plugin/calendar";
import { default as faLocale } from "./locale";

dayjs.extend(calendar);
dayjs.extend(jalaliday);
dayjs.locale(faLocale, undefined, true)
dayjs["calendar"]?.("jalali");

export default dayjs;
