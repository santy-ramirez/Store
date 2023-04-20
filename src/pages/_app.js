import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.css";
import Botum from "@/components/Botum";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Botum />
      <Component {...pageProps} />;
    </Provider>
  );
}
