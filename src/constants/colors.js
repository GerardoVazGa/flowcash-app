export const COLORS = {
    light: {
        primary: '#004B44',
        primaryContainer: '#0A6F66',
        secondary: '#005DB2',
        tertiary: '#2E7D32',

        surface: '#FEFEFE',
        surfaceLow: '#F5F5F5',
        surfaceHigh: '#E8E8E8',
        surfaceHighest: '#E0E0E0',

        text: '#1C1C1C',
        textVariant: '#6B7280',

        error: '#BA1A1A',
        outline: 'rgba(0,0,0,0.15)',

        chipBackground: 'rgba(255,255,255,0.10)',
        chipBackgroundStrong: 'rgba(255,255,255,0.16)',
        onPrimary: '#ffffff',
        onPrimaryMuted: 'rgba(201, 39, 39, 0.7)',

        income: '#16A34A',
        incomeSoft: '#DCFCE7',
        incomeContainer: '#86EFAC',
        incomeStrong: '#166534',

        warning: '#FACC15',              // amarillo base
        warningSoft: '#FEF9C3',          // fondo suave
        warningContainer: '#FDE68A',     // intermedio
        warningStrong: '#854D0E',        // texto fuerte

        orange: '#F97316',               // naranja base
        orangeSoft: '#FFEDD5',           // fondo suave
        orangeContainer: '#FDBA74',      // intermedio
        orangeStrong: '#9A3412',         // texto fuerte

        expenses: '#DC2626',              // rojo principal (más moderno que error)
        expensesSoft: '#FEE2E2',          // fondo suave
        expensesContainer: '#FCA5A5',     // intermedio
        expensesStrong: '#991B1B',        // texto fuerte
    },

    dark: {
        primary: '#66dd8b',
        primaryContainer: '#006e36',
        secondary: '#4DA3FF',
        tertiary: '#66BB6A',

        surface: '#0f1412',
        surfaceLow: '#181d1a',
        surfaceHigh: '#272d29',
        surfaceHighest: '#313633',

        text: '#dfe4e0',
        textVariant: '#bec9c1',

        error: '#ffb4ab',
        outline: 'rgba(63,73,67,0.15)',

        chipBackground: 'rgba(255,255,255,0.08)',
        chipBackgroundStrong: 'rgba(255,255,255,0.14)',
        onPrimary: '#ffffff',
        onPrimaryMuted: 'rgba(255,255,255,0.75)',

        income: '#4ADE80',
        incomeSoft: 'rgba(74,222,128,0.12)',
        incomeContainer: 'rgba(74,222,128,0.20)',
        incomeStrong: '#BBF7D0',

        warning: '#FDE047',
        warningSoft: 'rgba(253,224,71,0.12)',
        warningContainer: 'rgba(253,224,71,0.20)',
        warningStrong: '#FEF08A',

        orange: '#FB923C',
        orangeSoft: 'rgba(251,146,60,0.12)',
        orangeContainer: 'rgba(251,146,60,0.20)',
        orangeStrong: '#FED7AA',

        expenses: '#FF6B6B',
        expensesSoft: 'rgba(255,107,107,0.12)',
        expensesContainer: 'rgba(255,107,107,0.20)',
        expensesStrong: '#FFB4B4',
    },
};

export const GRADIENTS = {
    // Used for primary buttons and high-level summaries
    light: {
        primary: {
            colors: ['#48c1b5', '#006B5F'], // primary to primary-container at 135deg
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 }, // 135 degrees
            locations: [0, 1],
        },
    },

    // Dark Theme: "Jeweled luster" gradient
    // Provides high-gloss finish for primary actions
    dark: {
        primary: {
            colors: ['#66dd8b', '#006e36'], // primary to primary-container at 135deg
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 }, // 135 degrees
            locations: [0, 1],
        },
    },
};