import produce from 'immer';

const INITIAL_STATE = {
  clients: {
    save: { error: null, pending: false },
  },
};

export default function clients(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'clients/SEND_CREATE_REQUEST': {
        draft.clients.save.pending = true;
        draft.clients.save.error = null;
        break;
      }
      case 'clients/SEND_CREATE_REQUEST_SUCCESS': {
        draft.clients.save.pending = false;
        draft.clients.save.error = null;
        break;
      }
      case 'clients/SEND_CREATE_REQUEST_FAILURE': {
        draft.clients.save.pending = false;
        draft.clients.save.error = action.payload;
        break;
      }
      default:
    }
  });
}
