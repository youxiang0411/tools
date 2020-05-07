function addURLParams(url, paramsStr) {
    url += (url.indexOf('?') === -1) ? '?' : '&';
    url += paramsStr + '&' + new Date().getTime();
    return url;
}
function buildParamsStr(paramsObj) {
    var str = '';
    for (key in paramsObj) {
        if (paramsObj.hasOwnProperty(key)) {
            str += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(paramsObj[key]);
        }
    }
    return str.slice(1);
}
function ajax_method(url, data, method, success) {
    url = '/djintelligent' + url;
    var ajax = new XMLHttpRequest();
    if (method === 'get') {
        if (data) {
            var paramsStr = buildParamsStr(data);
            url = addURLParams(url, paramsStr);
        }
        ajax.open(method, url);
        ajax.send();
    } else {
        ajax.open(method, url);
        ajax.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        if (data) {
            ajax.send(JSON.stringify(data));
        } else {
            ajax.send();
        }
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            success(JSON.parse(ajax.response).data);
        }
    }
}