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
                "variation": {"ตัววง": "ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1": "dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน": "พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2": "หินสีเหลือง"},
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
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน": "พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2": "หินสีเหลือง"},
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
        price: 120.00,
        imagePath: '/images/r003.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง": "เงิน"},
                "price":-15,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"Amethyst"},
                "price":15,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"Dimond"},
                "price":50,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"Sapphire"},    
                "price":22,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 1":"dimond"},
                "price":25,
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
                name: 'หัวแหวน'  ,
                values: [
                    {
                        value: 'ruby',
                        'default': true
                    },
                    {
                        value: 'Amethyst'
                    },
                    {
                        value: 'Dimond'
                    },
                    {
                        value: 'Sapphire'
                    }
                ]
            },
            {
                name: 'ประดับ 1',
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
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 100,
        code: 'a001',
        name: 'amulet 001',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/a001.jpeg',
        categoryId: 2,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
    },

    {
        id: 5,
        code: 'r005',
        name: 'ring 005',
        description: 'long text here',
        price: 72.00,
        imagePath: '/images/r005.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1": "dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 6,
        code: 'r006',
        name: 'ring 006',
        description: 'long text here',
        price: 120.00,
        imagePath: '/images/r006.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1":"dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 7,
        code: 'r007',
        name: 'ring 001',
        description: 'long text here',
        price: 10.00,
        imagePath: '/images/r007.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1":"dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 8,
        code: 'r008',
        name: 'ring 008',
        description: 'long text here',
        price: 252.00,
        imagePath: '/images/r008.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":10,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1":"dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
                        value: 'ruby'
                    },
                    {
                        value: 'dimond',
                        'default': true
                    }
                ]
            },
            {
                name: 'เรือนประดับ 2',
                values: [
                    {
                        value: 'dimond',
                        'default': true
                    },
                    {
                        value: 'ruby'
                    }
                ]
            },
            {
                name: 'รอบวง',
                values: [
                    {
                        value: 'dimond',
                        'default': true
                    },
                    {
                        value: 'Amethyst'
                    }
                ]
            }

        ]
    },

    {
        id: 9,
        code: 'r009',
        name: 'ring 009',
        description: 'long text here',
        price: 30.00,
        imagePath: '/images/r009.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1":"dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 10,
        code: 'r010',
        name: 'ring 001',
        description: 'long text here',
        price: 52.00,
        imagePath: '/images/r010.jpeg',
        categoryId: 1,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"เรือนประดับ 1":"dimond"},
                "price":7,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
        id: 101,
        code: 'a002',
        name: 'amulet 002',
        description: 'long text here',
        price: 70.00,
        imagePath: '/images/a002.jpeg',
        categoryId: 2,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
    },

    {
        id: 102,
        code: 'a003',
        name: 'amulet 003',
        description: 'long text here',
        price: 52.00,
        imagePath: '/images/a003.jpeg',
        categoryId: 2,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
    },

    {
        id: 103,
        code: 'a004',
        name: 'amulet 004',
        description: 'long text here',
        price: 85.00,
        imagePath: '/images/a004.png',
        categoryId: 2,
        variations: [
            {
                "variation": {"ตัววง":"ทอง"},
                "price":20,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"ทับทิม"},
                "price":5,
                "type":"Adjust"
            },{
                "variation": {"หัวแหวน":"พลอย"},
                "price":-5,
                "type":"Adjust"
            },{
                "variation": {"ประดับ 2":"หินสีเหลือง"},
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
    },

]
