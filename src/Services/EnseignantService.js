import axios from "axios";

const ENSEIGNANTS_REST_API_URL = 'http://localhost:8090/api/Enseignants'

class EnseignantService {
   getEnseignants() {
      return axios.get(ENSEIGNANTS_REST_API_URL);
   }

   createEnseignant(enseignant) {
      return axios.post(ENSEIGNANTS_REST_API_URL, enseignant);
   }

   getEnseignantById(enseignantId) {
      return axios.get(ENSEIGNANTS_REST_API_URL + '/' + enseignantId);
   }

   updateEnseignant(enseignant, enseignantId) {
      return axios.put(ENSEIGNANTS_REST_API_URL + '/' + enseignantId, enseignant);
   }

   deleteEnseignantById(enseignantId) {
      return axios.delete(ENSEIGNANTS_REST_API_URL + '/' + enseignantId);
   }
}
export default new EnseignantService();