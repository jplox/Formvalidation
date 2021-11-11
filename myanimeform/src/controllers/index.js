class Controller {
  /**
   * @param  {string} url
   * @param  {string} requestType
   * @param  {json} requestBody
   * @param  {boolean} isAuthenticated
   * @param  {string} authToken
   * @param  {Function} success
   * @param  {Function} failure
   * @public
   */
  sendRequest(url, requestType, requestBody, isAuthenticated, authToken, success, failure) {
    let body = {};
    body.headers = { "content-type": "application/json" };
    if (isAuthenticated) {
      body.headers = {
        "X-Access-Token": authToken,
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      };
    }
    if (
      requestType.toLowerCase() === "post" ||
      requestType.toLowerCase() === "put" ||
      requestType.toLowerCase() === "patch" ||
      requestType.toLowerCase() === "delete"
    ) {
      body.body = JSON.stringify(requestBody);
    }
    body.method = requestType;
    fetch(url, body)
      .then(function (response) {
        console.log(response)

        if (response.status === 204) {
          success({});
        } else if (response.status === 200) {
          response.json().then(function (data) {
            success(data);
          });
        }
        else if (response.status === 404) {
          response.json().then(function (data) {
            failure(data);
          });
        }
        else {
          failure({});
        }

      })
      .catch(function (error) {
        failure(error);
      });
  }
}

export default new Controller();
