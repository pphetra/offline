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
		this.menu = [
            {text: 'All', id:'all', handler: this.onSelect},
            {text: 'Ring', id:1, handler: this.onSelect},
            {text: 'Amulet', id:2, handler: this.onSelect},
            {text: 'Etc', id:3, handler: this.onSelect}
        ]
		this.callParent(arguments);
	}
})