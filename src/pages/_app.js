import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.css";
import Nabegation from "@/components/Nabegation";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nabegation />
      <Component {...pageProps} />;
    </Provider>
  );
}
