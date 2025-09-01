import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return <div>
        <link rel="icon" href="/images/favicon.png" type="image/jpeg" />
        <title>Ronald Zavaleta - UPCH</title>
        <Component {...pageProps} />;
    </div>

}
