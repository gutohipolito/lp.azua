/**
 * UTM & Ad Parameter Persistence Script
 * Capture marketing parameters from the URL and append them to all outbound links
 * to ensure tracking continuity from Ad -> LP -> Shopify/Conversion.
 */

export const preserveUTMs = () => {
    // List of parameters to preserve
    const paramsToKeep = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'utm_matchtype', // Google Ads custom
        'gclid',  // Google Ads
        'fbclid', // Facebook Ads
        'ttclid', // TikTok Ads
        'epik',   // Pinterest
    ];

    // Get current URL search params
    const currentParams = new URLSearchParams(window.location.search);
    const paramsToAppend = [];

    // Filter only the relevant parameters
    currentParams.forEach((value, key) => {
        if (paramsToKeep.includes(key)) {
            paramsToAppend.push(`${key}=${encodeURIComponent(value)}`);
        }
    });

    // Add identifier that traffic passed through this LP
    // This allows you to differentiate "Direct to Shopify" vs "Ad -> LP -> Shopify"
    paramsToAppend.push('ref=lp_azua');


    // Link Builder
    const queryString = paramsToAppend.join('&');

    /**
     * Function to update links
     * Can be re-run if content is loaded dynamically
     */
    const updateLinks = () => {
        const links = document.querySelectorAll('a[href]');

        links.forEach(link => {
            try {
                const url = new URL(link.href);

                // Optional: Only target specific domains if needed (e.g., your shopify store)
                // For this LP, we generally want to pass to all outbound conversion links
                // if (url.hostname.includes('azua.com.br')) { ... }

                // Check if it already has params
                const separator = link.href.includes('?') ? '&' : '?';

                // Avoid duplicating if already present (simple check)
                if (!link.href.includes(paramsToAppend[0])) {
                    link.href = `${link.href}${separator}${queryString}`;
                }
            } catch (e) {
                // Ignore invalid URLs
            }
        });
    };

    // Run immediately
    updateLinks();

    // specific hack for "late" renders or react hydration if needed, 
    // though for simple LPs effect usually runs after mount.
    // We can expose it or run it on a small delay/observer if necessary.
    setTimeout(updateLinks, 1000);
};
