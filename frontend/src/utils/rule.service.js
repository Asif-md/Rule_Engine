import http from "../utils/http-common";

class ruleDataService {
  getAll() {
    return http.get("/rules");
  }

  create(data) {
    return http.post("/rules", data);
  }

  update(id, data) {
    return http.put(`/rules/${id}`, data);
  }
}

export default new ruleDataService();
