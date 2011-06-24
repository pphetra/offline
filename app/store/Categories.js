/**
แนวทางการ load data
Ext.define('User', { extend: 'Ext.data.Model', 
    fields: [
        'name'
    ]
})

store = Ext.create('Ext.data.Store', {model: 'User'})

store.loadData([{name: 'pok'}])
**/

Ext.define('Catalog.store.Categories', {
    extend: 'Ext.data.Store',
    model: 'Catalog.model.Category',
    data: catData
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
    // data: {
    //     categories: [
    //         {id: 0, name: 'ALL'},
    //         {id: 1, name: 'แหวนประดับ', imagePath: '/images/cat_ring.png'}, 
    //         {id: 2, name: 'สร้อยคอ', imagePath: '/images/cat_amulet.png'},
    //         {id: 3, name: 'กำไลข้อมือ', imagePath: '/images/cat_3.png'}
    //     ]
    // }  
})