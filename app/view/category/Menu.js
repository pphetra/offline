Ext.define('Catalog.view.category.Menu', {
	extend: 'Ext.Button',
	alias: 'widget.categorymenu',

	text      : 'Category',
	arrowAlign: 'bottom',
	
	initComponent: function() {
		var me = this;
		this.addEvents(
			'categorySelect'
		);
		this.onSelect = function(comp, event) {
			console.log(comp.id, this);
			me.fireEvent('categorySelect', comp.id);
			
		}

        var menu = [];
        var self = this;
        Ext.each(catData, function(item) {
            menu.push({
                text: item.name,
                id: item.id,
                handler: self.onSelect
            })
        })
        this.menu = menu

		this.callParent(arguments);
	}
})