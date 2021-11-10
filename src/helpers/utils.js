export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => user%20name
    let encodedValue = encodeURIComponent(params[property]); // sujay 123 => sujay%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); //'username=sujay&password=1234'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
