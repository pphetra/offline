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
                    height: 50,
                    border: false,
                    html: [
                        '<div class="header">',
                        '</div>'
                    ],
                    listeners: {
                        afterrender: function() {
                            var headerdom = Ext.query('div.header')[0];
                            var btn = new Ext.form.field.Trigger({
                                id: 'q',
                                width: 200,
                                triggerCls: 'x-form-search-trigger',
                                renderTo: headerdom
                            })

                            Ext.create(Catalog.view.category.Menu, {
                                
                                id: 'menu',
                                renderTo  : headerdom
                                
                                
                            });
                        }
                    }
                },
                {
                    xtype: 'categorylist',
                    id: 'categoryView',
                    region: 'west',
                    width: 150,
                    floating: true,
                    border: false
                },
                {
                    xtype: 'productlist',
                    region: 'center',
                    id: 'productListView',
                    border: false
                },
                {
                    region: 'south',
                    height: 40,
                    html: [
                        '<div class="footer">Copyright</div>'
                    ]
                }
            ]
        });

    }
});

