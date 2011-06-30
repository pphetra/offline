Ext.define('Catalog.view.product.Detail', {
    extend: 'Ext.Window',
    alias: 'widget.productdetail',
    layout: 'fit',
    width: 760,
    height: 460,

    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<div class="productDetail-wrap">',
                '<div class="image-wrap">',
                    '<img src="{imagePath}"></img>',
                '</div>',
                '<div class="right-side">',
                    '<div class="content">',
                        '<div class="name">{name}</div>',
                    '</div>',
                    '<div class="features-wrap">',
                    '<tpl for="features">',
                        '<div class="feature-box">',
                            '<span class="feature-name">{name} :</span>',
                            '<span class="feature-items">',
                                '<select name="{name}">',
                                    '<tpl for="values">',
                                        '<option <tpl if="this.isDefaultFeature(values)">selected</tpl>>{value}</option>',
                                    '</tpl>',
                                '</select>',
                            '</span>',
                        '</div>',
                    '</tpl>',
                    '</div>',
                    '<div class="price-wrap">Price : <span class="price">${price}</span></div>',
                '</div>',
            '</div>',
            {
                isDefaultFeature: function(values) {
                    return values['default'] == true
                }
            }
        )
        this.items = {
            tpl: this.tpl
        };
        this.callParent(arguments);
    },

    updatePrice: function(newPrice) {
        var elm = this.el.down('span.price');
        elm.update('$' + newPrice);
        elm.highlight('#ff8c00',  { attr: 'color', duration: 2000 });
    }
})