import 'react-native-gesture-handler';
import App from './src'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export default App