catData = [
    {id: 0, name: 'ALL'},
    {id: 1, name: 'แหวนประดับ', imagePath: '/images/cat_ring.png'}, 
    {id: 2, name: 'สร้อยคอ', imagePath: '/images/cat_amulet.png'},
    {id: 3, name: 'กำไลข้อมือ', imagePath: '/images/cat_3.png'}
]


proData = [
    {
        id: 1,
                code: 'r001',
        name: 'ring 001',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/r001.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": ["ตัววง:ทอง"],
                "price":20,
                "type":"Adjust"
            },{
                "variation": ["เรือนประดับ 1:dimond"],
                "price":7,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:พลอย"],
                "price":-5,
                "type":"Adjust"
            },{
                "variation": ["ประดับ 2:หินสีเหลือง"],
                "price":-10,
                "type":"Adjust"
            }
        ],
        features: [
            {
                name: 'ตัววง',
                values: [
                    {
                        value: 'ทอง'
                    },
                    {
                        value: 'เงิน',
                        'default': true
                    }
                ]
            },
            {
                name: 'เรือนประดับ 1',
                values: [
                    {
                        value: 'ruby',
                        'default': true
                    },
                    {
                        value: 'dimond'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        code: 'r002',
        name: 'ring 002',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/r002.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": ["ตัววง:ทอง"],
                "price":20,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:ทับทิม"],
                "price":5,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:พลอย"],
                "price":-5,
                "type":"Adjust"
            },{
                "variation": ["ประดับ 2:หินสีเหลือง"],
                "price":-10,
                "type":"Adjust"
            }
        ],
        features: [
            {
                name: 'ตัววง',
                values: [
                    {
                        value: 'ทอง',
                        'default': true
                    },
                    {
                        value: 'เงิน'
                    }
                ]
            },
            {
                name: 'เรือนประดับ 1',
                values: [
                    {
                        value: 'ruby',
                        'default': true
                    },
                    {
                        value: 'dimond'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        code: 'r003',
        name: 'ring 003',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/r003.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": ["ตัววง:ทอง"],
                "price":20,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:ทับทิม"],
                "price":5,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:พลอย"],
                "price":-5,
                "type":"Adjust"
            },{
                "variation": ["ประดับ 2:หินสีเหลือง"],
                "price":-10,
                "type":"Adjust"
            }
        ],
        features: [
            {
                name: 'ตัววง',
                values: [
                    {
                        value: 'ทอง',
                        'default': true
                    },
                    {
                        value: 'เงิน'
                    }
                ]
            },
            {
                name: 'เรือนประดับ 1',
                values: [
                    {
                        value: 'ruby',
                        'default': true
                    },
                    {
                        value: 'dimond'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        code: 'r004',
        name: 'ring 004',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/r004.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": ["ตัววง:ทอง"],
                "price":20,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:ทับทิม"],
                "price":5,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:พลอย"],
                "price":-5,
                "type":"Adjust"
            },{
                "variation": ["ประดับ 2:หินสีเหลือง"],
                "price":-10,
                "type":"Adjust"
            }
        ],
        features: [
            {
                name: 'ตัววง',
                values: [
                    {
                        value: 'ทอง',
                        'default': true
                    },
                    {
                        value: 'เงิน'
                    }
                ]
            },
            {
                name: 'เรือนประดับ 1',
                values: [
                    {
                        value: 'ruby',
                        'default': true
                    },
                    {
                        value: 'dimond'
                    }
                ]
            }
        ]
    },

    {
        id: 5,
        code: 'a001',
        name: 'amulet 001',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/a001.jpeg',
        categoryId: 2,
        variations: [
            {
                "variation": ["ตัววง:ทอง"],
                "price":20,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:ทับทิม"],
                "price":5,
                "type":"Adjust"
            },{
                "variation": ["หัวแหวน:พลอย"],
                "price":-5,
                "type":"Adjust"
            },{
                "variation": ["ประดับ 2:หินสีเหลือง"],
                "price":-10,
                "type":"Adjust"
            }
        ],
        features: [
            {
                name: 'ตัววง',
                values: [
                    {
                        value: 'ทอง',
                        'default': true
                    },
                    {
                        value: 'เงิน'
                    }
                ]
            },
            {
                name: 'เรือนประดับ 1',
                values: [
                    {
                        value: 'ruby'
                    },
                    {
                        value: 'dimond',
                        'default': true
                    }
                ]
            }
        ]
    }

]
