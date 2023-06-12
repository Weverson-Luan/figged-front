import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./global/styles/global";
import store from "./redux/store";

// styles
import theme from "./global/styles/theme";

const App1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
};

export default App1;
