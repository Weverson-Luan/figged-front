import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// routes
import AppRoutes from "./routes/routes";

// redux
import store from "./redux/store";

// styles
import GlobalStyle from "./global/styles/global";
import theme from "./global/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
