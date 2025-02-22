import './index.css';
import './App.css';

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

// Only uncomment the following lines if you need to use getInitialProps
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default App;
