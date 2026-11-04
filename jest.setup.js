const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
