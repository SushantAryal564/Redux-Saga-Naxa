import { api } from "./index";
const getData = (payload) =>
  api.get("/v2/project/?my_projects=True&page_no=2", payload);
export default getData;
