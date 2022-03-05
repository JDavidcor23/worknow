import {user} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where, doc, updateDoc} from "@firebase/firestore";

//  async
export const getUserForEdit = (id, newUser) =>{
    updateDoc(doc(db,"Users", id),newUser)
}
export const registroUsersAsincrono =(User)=>{
    return(dispatch)=>{
        addDoc(collection(db, "Users"), User)
        .then(resp =>{
            dispatch(registroUsersSincrono(User))
            // dispatch(listarUserAsincrono(uid))
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const listarUserAsincrono = (uid) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "Users"), where("uid", "==", uid));
        const UserList=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            UserList.push({
                uid:doc.uid,
                name: doc.name, 
                email: doc.email, 
                identificatión: doc.identificatión, 
                type: doc.type, 
                phone: doc.phone,
                city: doc.city
            }); 
        })
        dispatch(listarUsersSincrono(UserList))
    }
}

//sincrono
export const listarUsersSincrono = (User) =>{
    return{
        type: user.listuser,
        payload: User
    }
}

export const registroUsersSincrono = (User) =>{
    return{
        type: user.registeruserdb,
        payload: User
    }
}