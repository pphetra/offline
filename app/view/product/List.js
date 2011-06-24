Ext.define('Catalog.view.product.List', {
    extend: 'Ext.Panel',
    alias: 'widget.productlist',
    style: {

    },
    bodyStyle: {
        
    },

    initComponent: function() {
        this.items = Ext.create('Ext.view.View', {
            tpl: [
                '<tpl for=".">',
                    '<div class="product-wrap">',
                        '<div class="thumb"><img src="{imagePath}"></img></div>',
                        '<strong>{name}</strong>',
                    '</div>',
                '</tpl>'
            ],
            store: 'Catalog.store.Products',
            emptyText: 'No product to display',
            overItemCls: 'product-hover',
            itemSelector: 'div.product-wrap',
            disableSelection: true,
            trackOver: true,
            autoScrol : true,
            id: 'products',
            plugins : [
                Ext.create('Ext.ux.DataView.Animated', {
                    duration  : 550,
                    idProperty: 'id'
                })
            ]
        })


        this.callParent(arguments);
    }
})