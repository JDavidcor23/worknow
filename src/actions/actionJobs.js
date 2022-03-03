import {typesjobs} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where, deleteDoc, doc, updateDoc} from "@firebase/firestore";

//  async
export const getJobsForEdit = (id, newJobs) =>{
    updateDoc(doc(db,"Jobs", id),newJobs)
}
export const registroJobsAsincrono =(Jobs)=>{
    return(dispatch)=>{
        addDoc(collection(db, "Jobs"), Jobs)
        .then(resp =>{
            dispatch(registroJobsSincrono(Jobs))
            dispatch(listarJobsAsincrono())
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const listarJobsAsincrono = (uid) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "Jobs"), where("uid", "==", uid));
        const JobsList=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            JobsList.push({
                id :doc.id,
                uid :uid,
                description :doc.data().description,
                category :doc.data().category,
                price :doc.data().price,
                url :doc.data().url,
                country :doc.data().country,
                city :doc.data().city,
                name :doc.data().name,
            }); 
        })
        dispatch(listarJobsSincrono(JobsList))
    }
}

export const eliminarJobsAsincrono = (name, id) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "Jobs"), where("uid", "==", id), where("name", "==", name));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) =>{
            deleteDoc(doc(db, 'Jobs', docu.id))
        })
        dispatch(eliminarJobsSincrono(name))
    }
}
//sincrono
export const eliminarJobsSincrono = (name) =>{
    return{
        type: typesjobs.deletejobs,
        payload: name
    }
}
export const listarJobsSincrono = (Jobs) =>{
    return{
        type: typesjobs.listjobs,
        payload: Jobs
    }
}

export const registroJobsSincrono = (Jobs) =>{
    return{
        type: typesjobs.registerjobs,
        payload: Jobs
    }
}