import {typesjobs} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where, deleteDoc, doc, updateDoc} from "@firebase/firestore";

//  async
export const getJobsForEdit = (id, newJobs) =>{
    return(dispatch)=>{
        updateDoc(doc(db,"JobsJ", id),newJobs)
        dispatch(listarJobsAsincrono(newJobs.uid))
    }
}
export const registroJobsAsincrono =(Jobs)=>{
    return(dispatch)=>{
        addDoc(collection(db, "JobsJ"), Jobs)
        .then(resp =>{
            dispatch(registroJobsSincrono(Jobs))
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const listarJobsAsincrono = (uid) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "JobsJ"), where("uid", "==", uid));
        const JobsList=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            JobsList.push({
                id :doc.id,
                uid:doc.data().uid,
                type:doc.data().type,
                money:doc.data().money,
                jobstype:doc.data().jobstype,
                namejob:doc.data().namejob,
                description:doc.data().description,
                url:doc.data().url,
            }); 
        })
        dispatch(listarJobsSincrono(JobsList))
    }
}

export const eliminarJobsAsincrono = (job) =>{
    return async(dispatch)=>{
        deleteDoc(doc(db, 'JobsJ', job.id))
        dispatch(eliminarJobsSincrono(job))
    }
}
//sincrono
export const eliminarJobsSincrono = (id) =>{
    return{
        type: typesjobs.deletejobs,
        payload: id
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