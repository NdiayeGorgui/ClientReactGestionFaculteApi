import axios from "axios";

const COURS_REST_API_URL='http://localhost:8090/api/Cours'

class CourService {
    getCours(){
       return axios.get(COURS_REST_API_URL);
    }

    createCours(cours){
      return axios.post(COURS_REST_API_URL,cours);
  }

  getCoursById(coursId){
   return axios.get(COURS_REST_API_URL + '/' + coursId);
}

updateCours(cours,coursId){
   return axios.put(COURS_REST_API_URL + '/' + coursId, cours);
}

deleteCoursById(coursId){
   return axios.delete(COURS_REST_API_URL + '/' + coursId);
}
}
export default new CourService();
  