import { createReducer } from "reduxsauce";
import { Types } from "../actions/dataAction";
const initialState = {
  loading: false,
  data: [],
  next_page: 1,
};
const dataRequest = (state) => ({ ...state, loading: true });
const dataSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    data: state.data.concat(action.payload.data.data),
    next_page: action.payload.data.next_page,
  };
};
const dataFailure = (state) => ({
  ...state,
  loading: false,
});
const dataReducer = createReducer(initialState, {
  [Types.DATA_REQUEST]: dataRequest,
  [Types.DATA_SUCCESS]: dataSuccess,
  [Types.DATA_FAILURE]: dataFailure,
});
export default dataReducer;
