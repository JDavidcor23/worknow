import {jobsList} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const jobsListFilterASincrono = () =>{
    return async(dispatch)=>{
        const jobs=[];
        const querySnapshot =  await getDocs(collection(db,"Jobs"))
        querySnapshot.forEach((doc) => {
            jobs.push({
                id :doc.id,
                url1:doc.data().url1,
                url2:doc.data().url2,
                url3:doc.data().url3,
                namejob:doc.data().namejob,
                description:doc.data().description,
                city:doc.data().city,
                country:doc.data().country,
                identification_number:doc.data().identification_number,
                profesion:doc.data().profesion,
                valoration:doc.data().valoration,
                identification_type:doc.data().identification_type
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