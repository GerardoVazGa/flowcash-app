import { FontFamily } from "./fontFamily";

export const Typography = {
    // Display - Reserved for Total Net Worth or primary account balance
    display: {
        fontFamily: FontFamily.display,
        fontSize: 56,
        letterSpacing: -1
    },

    // Headlines - Monthly summaries
    headline: {
        fontFamily: FontFamily.displayBold,
        fontSize: 28, 
    },

    // Titles - Transaction titles, bold clear read
    title: {
        fontFamily: FontFamily.bodySemiBold,
        fontSize: 16,
    },

    // Body - Main copy, regular read
    body: {
        fontFamily: FontFamily.body,
        fontSize: 14,
    },

    // Labels - Secondary metadata (timestamps, currency codes)
    label: {
        fontFamily: FontFamily.bodySemiBold,
        fontSize: 12,
        letterSpacing: 2,
        textTransform: 'uppercase'
    },
}