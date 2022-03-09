import {jobsList} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const jobsListFilterASincrono = () =>{
    return async(dispatch)=>{
        const jobs=[];
        const querySnapshot =  await getDocs(collection(db,"JobsJ"))
        querySnapshot.forEach((doc) => {
            jobs.push({
                id :doc.id,
                uid:doc.data().uid,
                type:doc.data().type,
                money:doc.data().money,
                jobstype:doc.data().jobstype,
                namejob:doc.data().namejob,
                description:doc.data().description,
                url1:doc.data().url1,
                url2:doc.data().url2,
                url3:doc.data().url3,
            })
        }); 

    //let jobsSearchched = jobs.filter(pro => pro.category.toLowerCase().includes(category.toLowerCase()))
    dispatch(jobsListSincrono(jobs))

    }
}


export const jobsListSincrono = (jobs) =>{
    return{
        type: jobsList.watchjobs,
        payload: jobs
    }
}