import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress"; // https://www.npmjs.com/package/@badrap/bar-of-progress/v/0.1.1?activeTab=dependents
 
const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
