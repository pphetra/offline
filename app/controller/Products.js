Ext.define('Catalog.controller.Products', {
    extend: 'Ext.app.Controller',
    models: 'Catalog.model.Product',
    views: [
        'product.List',
        'product.Detail'
    ],
    stores: 'Catalog.store.Products',
    init: function() {
        this.control({
            '#productListView > dataview': {
                itemclick: this.onSelectProduct
            },
            '#q': {
                change: this.onSearchChange
            }
        })
        var self = this;
        this.detailWindow = new Catalog.view.product.Detail({
            closeAction: 'hide',
            headerPosition: 'bottom',
            modal: true,
            closable: true,
            listeners: {
                titlechange: function() {
                    console.log(arguments);
                },
                afterrender: function(view) {
                    console.log('render', view.el);
                    view.el.on('change', self.onSelectFeature, self);
                }
            }
        });

        console.log('Catalog.controller.Products init');
    },

    onSelectProduct: function(view, record, item, index, e, options) {
        this.currentRecord = record;
        this.detailWindow.setTitle(record.get('code'));
        this.detailWindow.query('panel')[0].update(record.data);
        this.detailWindow.show();
    },

    onDetailClick: function() {
        console.log(arguments);
    },

    onSelectFeature: function(event, dom) {
        var elm = Ext.fly(dom);
        var selects = elm.up('div.features-wrap').query('select');
        var features = []
        Ext.each(selects, function(item) {
            features.push({
                name: item.name,
                value: item.value
            })
        })
        var newPrice = this.currentRecord.calculatePrice(features);

        this.detailWindow.updatePrice(newPrice);
    },

    onSearchChange: function(field, newValue, oldVale) {
        var pStore = Ext.StoreManager.lookup('Catalog.store.Products');
        pStore.setSearchFilter(newValue);
    }
})