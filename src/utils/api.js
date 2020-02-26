const objToURLParam = obj =>
    Object.keys(obj)
        .map(item => `${item}=${obj[item]}`)
        .join('&')

export const get = (url, params) => {
    const urlParams = {
        'api-key': '0d160d0f-71cd-48b0-801f-2fc9cabd2157',
        ...params
    }
    return fetch(
        `https://content.guardianapis.com${url}?${objToURLParam(urlParams)}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        }
    )
        .then(response => {
            if (!response.ok) {
                return response.text().then(function(text) {
                    throw Error(text)
                });
            } else {
                return response.json()
            }
        })
}
