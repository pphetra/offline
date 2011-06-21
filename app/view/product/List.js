Ext.define('Catalog.view.product.List', {
    extend: 'Ext.Panel',
    alias: 'widget.productlist',

    initComponent: function() {
        this.items = Ext.create('Ext.view.View', {
            tpl: [
                '<tpl for=".">',
                    '<div class="product-wrap" id="{id}">',
                        '<div class="product-thumb"><img src="{imagePath}"></img></div>',
                        '<div class="product-name">{name}</div>',
                    '</div>',
                '</tpl>'
            ],
            store: 'Catalog.store.Products',
            emptyText: 'No product to display',
            trackOver: true,
            overItemCls: 'x-item-over',
            itemSelector: 'div.product-wrap',
            disableSelection: true
        })


        this.callParent(arguments);
    }
})