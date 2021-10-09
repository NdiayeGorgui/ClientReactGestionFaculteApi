import axios from "axios";

const GROUPE_REST_API_URL='http://localhost:8090/api/Groupes'

class GroupeService {
    getGroupes(){
       return axios.get(GROUPE_REST_API_URL);
    }

    createGroupe(groupe){
      return axios.post(GROUPE_REST_API_URL,groupe);
  }

  getGroupeById(groupeid){
   return axios.get(GROUPE_REST_API_URL + '/' + groupeid);
}

updateGroupe(groupe,groupeid){
   return axios.put(GROUPE_REST_API_URL + '/' + groupeid, groupe);
}

deleteGroupeById(groupeid){
   return axios.delete(GROUPE_REST_API_URL + '/' + groupeid);
}
}
export default new GroupeService();
  