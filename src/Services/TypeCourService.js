import axios from "axios";

const TypeCOURS_REST_API_URL = 'http://localhost:8090/api/TypeCours'

class TypeCourService {
   getTypeCours() {
      return axios.get(TypeCOURS_REST_API_URL);
   }

   createTypeCours(typeCours) {
      return axios.post(TypeCOURS_REST_API_URL, typeCours);
   }

   getTypeCoursById(typeCoursId) {
      return axios.get(TypeCOURS_REST_API_URL + '/' + typeCoursId);
   }

   updateTypeCours(typeCours, typeCoursId) {
      return axios.put(TypeCOURS_REST_API_URL + '/' + typeCoursId, typeCours);
   }

   deleteTypeCoursById(typeCoursId) {
      return axios.delete(TypeCOURS_REST_API_URL + '/' + typeCoursId);
   }
}
export default new TypeCourService();
