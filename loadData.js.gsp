catData = [
    {id: 'all', name: 'ALL'},
<g:each var="cat" in="${catalog.categories}" status="i">
    <g:if test="${cat.parent}">
    {id: ${cat.id}, name: '${cat.name}'}, 
    </g:if>
</g:each>
]


proData = [
<g:each var="cat" in="${catalog.categories}">
    <g:if test="${cat.parent}">
        <g:each var="p" in="${cat.catProducts}">
            
    {
        id: ${p.id},
        code: '${p.productCode}',
        name: '${p.productName}',
        description: '${p.product.description}',
        price: ${p.price},
        imagePath: '/images/${p.product.fileName}',
        categoryId: ${cat.id},
        variations: ${p.varPrice},
        features: ${p.product.getFeatureRaw()}
    },
            
        </g:each>
    </g:if>
</g:each>
]
