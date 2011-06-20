Ext.define('Catalog.view.category.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.categorylist',
    title: 'Categories',
    store: 'Catalog.store.Categories',
    initComponent: function() {
        this.columns = [
            {header: 'name', dataIndex: 'name'}
        ];

        this.callParent(arguments);
    }
})