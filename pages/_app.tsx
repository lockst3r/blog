import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    display: block
  }
`;
const MyApp: React.FC = ({ Component, pageProps }: any) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
