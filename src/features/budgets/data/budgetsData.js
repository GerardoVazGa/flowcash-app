export const budgetsMock = [
    {
        id: "1",
        description: "Streaming, videojuegos, cine y salidas",
        category: "Entretenimiento",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 2000,
        spent: 1870,
        currency: "MXN",

        walletId: "wallet-1",
        walletName: "Cuenta Principal",

        notifications: {
            enabled: true,
            thresholds: [50, 75, 90],
        },

        archived: false,

        createdAt: "2026-05-01T10:00:00Z",
        updatedAt: "2026-05-10T14:30:00Z",
    },

    {
        id: "2",
        description: "Compras semanales y despensa",
        category: "Alimentación",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 4500,
        spent: 3120,
        currency: "MXN",

        walletId: "wallet-1",
        walletName: "Cuenta Principal",

        notifications: {
            enabled: true,
            thresholds: [70, 90],
        },

        archived: false,

        createdAt: "2026-05-01T09:00:00Z",
        updatedAt: "2026-05-11T18:40:00Z",
    },

    {
        id: "3",
        description: "Carga de combustible semanal",
        category: "Transporte",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 2500,
        spent: 2600,
        currency: "MXN",

        walletId: "wallet-2",
        walletName: "Tarjeta Débito",

        notifications: {
            enabled: true,
            thresholds: [80, 100],
        },

        archived: false,

        createdAt: "2026-05-02T11:00:00Z",
        updatedAt: "2026-05-12T08:00:00Z",
    },

    {
        id: "4",
        description: "Pago de internet, plan móvil y servicios",
        category: "Servicios",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 1200,
        spent: 850,
        currency: "MXN",

        walletId: "wallet-2",
        walletName: "Tarjeta Débito",

        notifications: {
            enabled: false,
            thresholds: [],
        },

        archived: false,

        createdAt: "2026-05-03T15:00:00Z",
        updatedAt: "2026-05-07T10:30:00Z",
    },

    {
        id: "5",
        description: "Medicamentos y consultas generales",
        category: "Salud",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 1800,
        spent: 400,
        currency: "MXN",

        walletId: "wallet-1",
        walletName: "Cuenta Principal",

        notifications: {
            enabled: true,
            thresholds: [75, 90],
        },

        archived: false,

        createdAt: "2026-05-04T12:00:00Z",
        updatedAt: "2026-05-05T14:20:00Z",
    },

    {
        id: "6",
        description: "Control de ingresos por proyectos",
        category: "Ventas",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 10000,
        spent: 7200,
        currency: "MXN",

        walletId: "wallet-3",
        walletName: "Cuenta Freelance",

        notifications: {
            enabled: true,
            thresholds: [60, 80, 95],
        },

        archived: false,

        createdAt: "2026-05-01T07:00:00Z",
        updatedAt: "2026-05-11T21:10:00Z",
    },

    {
        id: "7",
        description: "Movimientos entre cuentas personales",
        category: "Transferencia",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 15000,
        spent: 6400,
        currency: "MXN",

        walletId: "wallet-4",
        walletName: "Ahorros",

        notifications: {
            enabled: false,
            thresholds: [],
        },

        archived: false,

        createdAt: "2026-05-02T09:30:00Z",
        updatedAt: "2026-05-10T16:00:00Z",
    },

    {
        id: "8",
        description: "Software, cursos y herramientas laborales",
        category: "Trabajo",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 3500,
        spent: 2800,
        currency: "MXN",

        walletId: "wallet-3",
        walletName: "Cuenta Freelance",

        notifications: {
            enabled: true,
            thresholds: [70, 85, 100],
        },

        archived: false,

        createdAt: "2026-05-05T11:30:00Z",
        updatedAt: "2026-05-12T12:10:00Z",
    },

    {
        id: "9",
        description: "Café diario y snacks",
        category: "Alimentación",

        period: {
            type: "WEEKLY",
            startDate: "2026-05-11",
            endDate: "2026-05-17",
        },

        limit: 600,
        spent: 540,
        currency: "MXN",

        walletId: "wallet-1",
        walletName: "Cuenta Principal",

        notifications: {
            enabled: true,
            thresholds: [50, 80, 100],
        },

        archived: false,

        createdAt: "2026-05-11T08:00:00Z",
        updatedAt: "2026-05-12T09:00:00Z",
    },

    {
        id: "10",
        description: "Netflix, Spotify y plataformas digitales",
        category: "Entretenimiento",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 900,
        spent: 920,
        currency: "MXN",

        walletId: "wallet-2",
        walletName: "Tarjeta Débito",

        notifications: {
            enabled: true,
            thresholds: [75, 90, 100],
        },

        archived: false,

        createdAt: "2026-05-01T13:00:00Z",
        updatedAt: "2026-05-11T23:00:00Z",
    },

    {
        id: "11",
        description: "Membresía, suplementos y accesorios",
        category: "Salud",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 2200,
        spent: 1350,
        currency: "MXN",

        walletId: "wallet-1",
        walletName: "Cuenta Principal",

        notifications: {
            enabled: true,
            thresholds: [70, 90],
        },

        archived: false,

        createdAt: "2026-05-03T18:00:00Z",
        updatedAt: "2026-05-09T17:00:00Z",
    },

    {
        id: "12",
        description: "Transporte privado y viajes rápidos",
        category: "Transporte",

        period: {
            type: "MONTHLY",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
        },

        limit: 1800,
        spent: 980,
        currency: "MXN",

        walletId: "wallet-2",
        walletName: "Tarjeta Débito",

        notifications: {
            enabled: true,
            thresholds: [60, 80, 100],
        },

        archived: true,

        createdAt: "2026-05-01T16:00:00Z",
        updatedAt: "2026-05-08T15:30:00Z",
    },
];