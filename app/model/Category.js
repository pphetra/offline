/**
how to use it

var data = {
    categories: [
        {id: 1, name: 'cat1', 
         categories: [
            {id: 2, name: 'cat1.1'},
            {id: 3, name: 'cat1.2'}
         ]},
        {id: 4, name: 'cat2'}
    ]
}

var store = new Ext.data.Store({ 
    model: 'Catalog.model.Category',
    data: data
})
**/

Ext.define('Catalog.model.Category', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'long'},
        {name: 'name', type: 'string'},
        {name: 'imagePath', type: 'string'}
    ],
    hasMany: [
        {model: 'Catalog.model.Category', name: 'categories'}
    ],
    belongsTo: {
        model: 'Catalog.model.Category',
        name: 'parent'
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'categories'
        }
    }
})
