import {
    REQUEST_SAVE_PRODUCT,
	REQUEST_SAVE_PRODUCT_SUCCESS,
} from '../../constants';

function receive(data) {
    return {
        type    : REQUEST_SAVE_PRODUCT_SUCCESS,
        product : data.product
    };
}

export default function(product) {
    return dispatch => {
        var url = pageConfig.apiPath + '/admin/product/update';
        var categories = [];
        for (var i = 0; i < product.categories.length; i++) {
            categories.push({
                id: parseInt(product.categories[i].split('-')[1])
            });
        }
        var reqData ={
            id            : product.id,
            name          : product.name,
            categories    : categories,
            status        : parseInt(product.status),
            originalPrice : product.originalPrice,
            price         : product.price,
            remark        : product.remark,
            detail        : product.detail
        };
        return fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqData)
            })
			.then(response => response.json())
            .then(json => dispatch(receive(json.data)));
    };
};

