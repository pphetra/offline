/*
var data = {
    products: [
        {
            code: 'r001',
            name: 'ring 001',
            description: 'long text here',
            price: 10.00,
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
        }

    ]
}
*/
Ext.define('Catalog.model.Product', {
	extend: 'Ext.data.Model',
	fields: [
        {name: 'id', type: 'long'},
		{name: 'code', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'},
        {name: 'imageThumbPath', type: 'string'},
        {name: 'imagePath', type: 'string'},
        {name: 'categoryId', type: 'long'},
        'variations',
        'features'
	],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'products'
        }
    },

    calculatePrice: function(currentFeatures) {
        var basePrice = this.get('price');
        var vaMap = this.getVariationAdjustMap();
        Ext.each(currentFeatures, function(item) {
             var key = item.name + ':' + item.value;
             if (vaMap[key] !== undefined) {
                 basePrice += vaMap[key]
             }
        });
        return basePrice;
    },

    getVariationAdjustMap: function() {
        if (! this._vMap) {
            var map = this._vMap = {};
            Ext.each(this.get('variations'), function(item) {
                if (item.type == 'Adjust') { 
                    var key = item.variation.sort().join('@');
                    map[key] = item.price;
                }
            })
        }
        return this._vMap;
    }
})