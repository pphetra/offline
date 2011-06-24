Ext.define('Catalog.controller.Categories', {
    extend: 'Ext.app.Controller',
    models: 'Catalog.model.Category',
    views: [
        'category.List',
        'product.List',
        'category.Menu'
    ],
    stores: 'Catalog.store.Categories',

    init: function() {
        console.log('Catalog.controller.Categories init');
        this.control({
            'categorylist > dataview': {
                itemclick: this.onSelectCategory
            },

            'categorymenu': {
                categorySelect: function(categoryId) {
                    var pStore = Ext.StoreManager.lookup('Catalog.store.Products');
                    pStore.setCategoryFilter(categoryId);
                }
            }
        });
    },

    onSelectCategory: function(view, record, item, index, e, options) {
        var pStore = Ext.StoreManager.lookup('Catalog.store.Products');
        var cid = record.get('id');
        pStore.setCategoryFilter(cid);
    }
})