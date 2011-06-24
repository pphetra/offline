Ext.define('Catalog.store.Products', {
    extend: 'Ext.data.Store',
    model: 'Catalog.model.Product',

    filterValue: {
        q: null,
        categoryId: 0
    },

    setSearchFilter: function(value) {
        if (value == '') {
            this.filterValue.q = null;
        } else {
            this.filterValue.q = value;
        }
        this.applyFilters();
    },
    setCategoryFilter: function(categoryId) {
        if (categoryId == 'all') {
            this.filterValue.categoryId = 0;            
        } else {
            this.filterValue.categoryId = categoryId;
        }
        this.applyFilters();
    },

    applyFilters: function() {
        this.suspendEvents();
        this.clearFilter();
        this.resumeEvents();
        this.clearFilter(true);
        var filterValue = this.filterValue;
        this.filterBy(function(record) {
            var code = record.get('code');
            var name = record.get('name');
            var categoryId = record.get('categoryId');
            if (filterValue.categoryId != 0 && filterValue.categoryId != categoryId) {
                return false;
            }

            if (filterValue.q) {
                if (code.indexOf(filterValue.q) >= 0) {
                    return true;
                }
                if (name.indexOf(filterValue.q) >= 0) {
                    return true;
                }       
                return false;         
            } 
            return true;

        });
        this.sort('code', 'ASC');
    },

    data: proData
/*
    data: {
        products: [
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
                id: 10,
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
    }
    */
})