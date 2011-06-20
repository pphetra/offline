Ext.define('Catalog.store.Categories', {
    extend: 'Ext.data.Store',
    model: 'Catalog.model.Category',
    // this not work because chrome return status == 0 instead of 200
    // autoLoad: true,
    // proxy: {
    //     type: 'ajax',
    //     url: 'data/category.json',
    //     reader: {
    //         type: 'json',
    //         root: 'categories'
    //     }
    // }
    data: {
        categories: [
            {id: 1,
             name: 'cat1', 
             categories: [
                {id: 2, name: 'cat1.1'},
                {id: 3, name: 'cat1.2'}
             ]},
            {id: 4, name: 'cat2'},
            {id: 5, name: 'cat3'}
        ]
    }  
})