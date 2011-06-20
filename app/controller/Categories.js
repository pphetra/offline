Ext.define('Catalog.controller.Categories', {
    extend: 'Ext.app.Controller',
    models: 'Catalog.model.Category',
    views: [
        'category.List'
    ],
    stores: 'Catalog.store.Categories',
    init: function() {
        console.log('Catalog.controller.Categories init');
        this.control({
            'viewport > categorylist': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function() {
        console.log('renderer');
    }
})