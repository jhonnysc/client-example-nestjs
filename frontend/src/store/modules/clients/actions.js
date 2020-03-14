export function sendCreateClientRequest(params) {
  return {
    type: 'clients/SEND_CREATE_REQUEST',
    payload: params,
  };
}

export function sendCreateClientRequestSuccess() {
  return {
    type: 'clients/SEND_CREATE_REQUEST_SUCCESS',
  };
}

export function sendCreateClientRequestFailure(errors) {
  return {
    type: 'clients/SEND_CREATE_REQUEST',
    payload: errors,
  };
}
