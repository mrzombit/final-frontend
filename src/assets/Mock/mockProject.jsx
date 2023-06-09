export default Project = {
    id: 1,
    name: "KoonK DreamHair",
    industry_ids: [
        1,
        2,
        4,
    ],
    description: "This business is about ABC. We aim to raise up Thailand GDP 1%",
    logo_url: "https://img.freepik.com/premium-vector/barber-shop-icon-logo-vector-icon-template_598213-1562.jpg?w=2000",
    created_date: new Date(),
    modified_date: new Date(),
    sales_trends: [
        {
            year: 1,
            trend: 0.4,
            description: "",
        },
        {
            year: 2,
            trend: 0.5,
            description: "",
        },
        {
            year: 3,
            trend: 0.6,
            description: "",
        },
        {
            year: 4,
            trend: 0.7,
            description: "",
        },
    ],
    business_goals: [
        {
            business_goal_id: 1,
            goal: {
                val: 0.5,
            }
        },
        {
            businessGoalId: 2,
            goal: {
                val: 2.6,
            }
        },
    ],
    model_config: {
        projection_period: 4,
        start_date: new Date(),
        currency_id: 1,
        working_hours: 9,
        income_tax_rate: 0.15,
        discounting_rate: 0.08,
    },
    revenue: {
        service_tables: [
            {
                name: "ค่าบริการ",
                description: "",
                color: "#FFFFFF",
                text_color: "",
                services: [
                    {
                        name: "บริการทำสีผมหญิง",
                        unit: 2,
                        unit_name: "ที่นั่ง",
                        serve_per_unit: 10,
                        revenue_per_serve: 1500,
                        cost_per_serve: 0.6,
                        price_increase: 0.02,
                        price_increase_period_id: 1,
                        const_increase: 0.02,
                        const_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends:
                            [
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                            ],
                    },
                    {
                        name: "บริการทำสีผมชาย",
                        unit: 2,
                        unit_name: "ที่นั่ง",
                        serve_per_unit: 10,
                        revenue_per_serve: 1500,
                        cost_per_serve: 0.6,
                        price_increase: 0.02,
                        price_increase_period_id: 1,
                        const_increase: 0.02,
                        const_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends:
                            [
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                            ],
                    },
                    {
                        name: "บริการตัดผมชาย",
                        unit: 3,
                        unit_name: "ที่นั่ง",
                        serve_per_unit: 20,
                        revenue_per_serve: 600,
                        cost_per_serve: 0.6,
                        price_increase: 0.02,
                        price_increase_period_id: 1,
                        const_increase: 0.02,
                        const_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends:
                            [
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                            ],
                    },
                    {
                        name: "บริการทำผมหญิง",
                        unit: 3,
                        unit_name: "ที่นั่ง",
                        serve_per_unit: 15,
                        revenue_per_serve: 600,
                        cost_per_serve: 0.6,
                        price_increase: 0.02,
                        price_increase_period_id: 1,
                        const_increase: 0.02,
                        const_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends:
                            [
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                                1, 1, 1, 1,
                            ],
                    },
                ]
            },
        ],
        product_tables: [
            {
                name: "สินค้าเสริมความงาม",
                description: "",
                color: "#FFFFFF",
                text_color: "",
                products: [
                    {
                        name: "มาส์กหน้า",
                        days_of_inventory: {
                            days: 0,
                            months: 48,
                        },
                        revenue_per_unit: 1000,
                        cost_per_unit: 0.7,
                        price_increase: 0.01,
                        price_increase_period_id: 1,
                        cost_increase: 0.01,
                        cost_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends: [
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                        ],
                    },
                    {
                        name: "มาส์กหน้า2",
                        days_of_inventory: {
                            days: 0,
                            months: 48,
                        },
                        revenue_per_unit: 1000,
                        cost_per_unit: 0.7,
                        price_increase: 0.01,
                        price_increase_period_id: 1,
                        cost_increase: 0.01,
                        cost_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends: [
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                        ],
                    },
                    {
                        name: "มาส์กหน้า3",
                        days_of_inventory: {
                            days: 0,
                            months: 48,
                        },
                        revenue_per_unit: 1000,
                        cost_per_unit: 0.7,
                        price_increase: 0.01,
                        price_increase_period_id: 1,
                        cost_increase: 0.01,
                        cost_increase_period_id: 1,
                        start_date: new Date(),
                        seasonal_trends: [
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                            1, 1, 1, 1,
                        ],
                    },
                ]
            },
        ],
    },
    expense: {
        investment_tables: [
            {
                name: "ร้านตัดผม",
                description: "",
                color: "#FFFFFF",
                text_color: "#000000",
                investments: [
                    {
                        name: "ค่าที่ดิน",
                        amount: 1000000,
                        account_id: 1,
                        is_initial: true,
                        start_date: new Date(),
                    },
                    {
                        name: "ค่าก่อสร้าง",
                        amount: 1000000,
                        account_id: 1,
                        is_initial: true,
                        start_date: new Date(),
                    },
                    {
                        name: "ค่าเฟอร์นิเจอร์",
                        amount: 75000,
                        account_id: 1,
                        is_initial: true,
                        start_date: new Date(),
                    },
                    {
                        name: "ค่าเครื่องมือช่าง",
                        amount: 70000,
                        account_id: 1,
                        is_initial: true,
                        start_date: new Date(),
                    },
                ],
            },
            {
                id: 2,
                name: "อื่นๆ",
                description: "",
                color: "#FFFFFF",
                text_color: "#000000",
                investments: [
                    {
                        name: "ซอฟแวร์บัญชี",
                        amount: 25000,
                        account_id: 2,
                        is_initial: true,
                        start_date: new Date(),
                    },
                    {
                        name: "ประกันสินค้า",
                        amount: 30000,
                        account_id: 2,
                        is_initial: true,
                        start_date: new Date(),
                    },
                    {
                        name: "ค่าโปรโมทร้าน",
                        amount: 200000,
                        account_id: 2,
                        is_initial: true,
                        start_date: new Date(),
                    },
                ],
            },
        ],
        fixed_cost_tables: [
            {
                name: "เงินเดือน",
                description: "",
                color: "#FFFFFF",
                text_color: "#000000",
                fixed_costs: [
                    {
                        name: "ผู้จัดการ",
                        amount: 30000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "พนักงานต้อนรับ",
                        amount: 30000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "ช่างตัดผมชาย",
                        amount: 30000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "ช่างตัดผมหญิง",
                        amount: 30000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                ]
            },
            {
                id: 2,
                name: "อื่นๆ",
                description: "",
                color: "#FFFFFF",
                text_color: "#000000",
                fixed_costs: [
                    {
                        name: "ค่าบริการเครือข่ายอินเตอร์เน็ต",
                        amount: 1200,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "ค่าลิขสิทธิ์แฟรนไชส์",
                        amount: 35000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "ค่าไฟฟ้า",
                        amount: 15000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                    {
                        name: "ค่าน้ำ",
                        amount: 2000,
                        period_id: 1,
                        number: [
                            {
                                one: 1,
                                two: 1,
                                three: 1,
                                four: 1,
                                five: 1,
                                six: 1,
                                seven: 1,
                                eight: 1,
                                nine: 2,
                                ten: 2,
                                eleven: 2,
                                twelve: 2,
                            },
                            {
                                one: 2,
                                two: 2,
                                three: 2,
                                four: 2,
                                five: 2,
                                six: 2,
                                seven: 2,
                                eight: 2,
                                nine: 3,
                                ten: 3,
                                eleven: 3,
                                twelve: 3,
                            },
                        ],
                        start_date: new Date(),
                        cost_increase: 0.02,
                        cost_increase_period_id: 1,
                    },
                ]
            },
        ],
    },
    miscellaneous: {
        equity_contribution: [
            {
                name: "Me",
                amount: 500000,
                date: new Date(),
            },
            {
                name: "My Wife",
                amount: 200000,
                date: new Date(),
            },
        ],
        equity_repayment: [
            {
                name: "My Wife",
                share: 0.2,
                repayments:
                {
                    period_id: 1,
                    start_date: new Date(),
                }
            },
        ],
        debt_issuance: [
            {
                name: "เงินกู้ธนาคาร",
                amount: 1000000,
                apr: 5,
                period_id: 1,
                payments: [
                    {
                        name: "Rainbow QuickCash",
                        date: new Date(),
                        amount: 500000,
                    },
                    {
                        name: "Rainbow QuickCash",
                        date: new Date(),
                        amount: 500000,
                    },
                ]
            }
        ]
    },
    ffc_reason: "เหตุผลในการลงทุนของฉัน คือ ...",
}