import axios from "axios";

const FORMATION_REST_API_URL='http://localhost:8090/api/Formations'

class FormationService {
    getFormations(){
       return axios.get(FORMATION_REST_API_URL);
    }

    createFormation(formation){
      return axios.post(FORMATION_REST_API_URL,formation);
  }

  getFormationsById(formationId){
   return axios.get(FORMATION_REST_API_URL + '/' + formationId);
}

updateFormation(formation,formationId){
   return axios.put(FORMATION_REST_API_URL + '/' + formationId, formation);
}

deleteFormationById(formationId){
   return axios.delete(FORMATION_REST_API_URL + '/' + formationId);
}
}
export default new FormationService();
  