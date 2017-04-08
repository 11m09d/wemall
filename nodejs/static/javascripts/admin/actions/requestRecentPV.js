import {
	REQUEST_RECENT_PV
} from '../constants';

function receiveRecentPV(json) {
    return {
        type: REQUEST_RECENT_PV,
        recentPV: json.list
    };
}

export default function() {
    return dispatch => {
        var url = pageConfig.apiURL + '/admin/visit/pv/latest/30';
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveRecentPV(json.data)))
    };
}