Ext.define('Catalog.view.category.List', {
    extend: 'Ext.Panel',
    alias: 'widget.categorylist',
    title: 'Categories',
    initComponent: function() {
        this.items = Ext.create('Ext.view.View', {
            tpl: [
                '<tpl for=".">',
                    '<div class="category-wrap" id="{id}">',
                        '<div class="category-thumb"><img src="{imagePath}"></img></div>',
                        '<div class="category-name">{name}</div>',
                    '</div>',
                '</tpl>'
            ],
            store: 'Catalog.store.Categories',
            emptyText: 'No Category to display',
            trackOver: true,
            overItemCls: 'x-item-over',
            itemSelector: 'div.category-wrap'
        })

        this.callParent(arguments);
    }
})