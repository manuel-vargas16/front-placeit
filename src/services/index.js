export const apiGet = (url) => fetch(url).then(v => v.json());

export const apiPost = (url, obj) => 
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json'})
  }).then(v => { return v.json() } )
  .then(r => {
    debugger;
    if (r.error) {
            return Promise.reject(r.errors);
    } 
    return r;
  });

