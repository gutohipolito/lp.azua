/**
 * Analytics Utility
 * Handles event tracking for GTM, GA4, and Facebook Pixel.
 */

export const trackInitiateCheckout = () => {
    // 1. Push to GTM DataLayer (Standard)
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'initiate_checkout',
            ecommerce: {
                currency: 'BRL',
                value: 0 // Value is unknown at this step, or could be average ticket
            }
        });
    }

    // 2. Direct Facebook Pixel Call (Safety Net)
    // Checks if 'fbq' is defined (loaded by GTM or script)
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout');
    }

    // console.log('Checkout Initiated'); // Debug
};
