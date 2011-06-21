Ext.Loader.setConfig({
    enabled:true
});

/** app.js **/
Ext.application({
    name: 'Catalog',
    appFolder: 'app',
    controllers: ['Categories', 'Products'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    height: 36,
                    bodyStyle: "padding: 5px;",
                    items: [
                        {
                            xtype: 'triggerfield',
                            id: 'q',
                            width: 200,
                            triggerCls: 'x-form-search-trigger'
                        }
                    ]
                },
                {
                    xtype: 'categorylist',
                    id: 'categoryView',
                    region: 'west',
                    width: 130
                },
                {
                    xtype: 'productlist',
                    region: 'center',
                    id: 'productListView'
                }
            ]
        });

        var cStore = Ext.StoreManager.lookup('Catalog.store.Categories');
        var pStore = Ext.StoreManager.lookup('Catalog.store.Products');
        cStore.loadData(catData);
        pStore.loadData(proData);
    }
});

