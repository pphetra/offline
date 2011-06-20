Ext.Loader.setConfig({
    enabled:true
});

/** app.js **/
Ext.application({
    name: 'Catalog',
    appFolder: 'app',
    controllers: ['Categories'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'categorylist'
                }
            ]
        });
    }
});