import {partner} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs,query,where} from "@firebase/firestore";
export const listarPartnerAsincrono = (uid) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "Users"), where("uid", "==", uid));
        const PartnerList={
            id:"",
            uid:"",
            city:"",
            country:"",
            name:"",
            phone:"",
            url:"",
        };
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.size < 1){
            querySnapshot.forEach((doc) => {
                PartnerList.id = doc.id
                PartnerList.uid = doc.data().uid
                PartnerList.city = doc.data().city
                PartnerList.country = doc.data().country
                PartnerList.name = doc.data().name
                PartnerList.phone = doc.data().phone
                PartnerList.url = doc.data().url
            })
            dispatch(listarPartnerSincrono(PartnerList))
        }
    }
}

//sincrono
export const listarPartnerSincrono = (p) =>{
    return{
        type: partner.listpartner,
        payload: p
    }
}
