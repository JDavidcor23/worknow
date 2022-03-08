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
        const UserList={
            id:"",
            uid:"",
            city:"",
            country:"",
            name:"",
            phone:"",
            url:"",
        };
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
                UserList.id = doc.id
                UserList.uid = doc.uid
                UserList.city = doc.data().city
                UserList.country = doc.data().country
                UserList.name = doc.data().name
                UserList.phone = doc.data().phone
                UserList.url = doc.data().url
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