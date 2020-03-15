const notesInitialValue=[]

const notesReducer=(state= notesInitialValue, action)=>{
    switch(action.type){
       case "GET_NOTES":{
        return state.concat(action.payload)
       }
       case "ADD_NOTES":{
           return state.concat(action.payload)
       }
       case "DELETE_NOTE":{
           return state.filter(note=>note._id!==action.payload._id)
       }
       case "EDIT_NOTES":{
           return [...state].map(note=>{
               if(note._id==action.payload._id){
                   return action.payload
               }else{
                   return {...note}
               }
           })
       }
        default:{
            return state
        }
    }
}
export default notesReducer