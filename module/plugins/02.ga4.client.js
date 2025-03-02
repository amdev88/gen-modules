export default defineNuxtPlugin((nuxtApp) => {
    let ga4script = document.createElement('script');
    ga4script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-8B1KX488FL');
    ga4script.setAttribute('type', 'text/javascript');
    ga4script.setAttribute('async', 'true');
    document.head.appendChild(ga4script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-8B1KX488FL');
})