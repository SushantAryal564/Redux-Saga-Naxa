import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  dataRequest: ["payload"],
  dataSuccess: ["payload"],
  dataFailure: ["payload"],
});
export default Creators;
