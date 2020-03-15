export const findCategory=(categories, id)=>{
    return categories.find(category=>category._id==id)
}
export const findNotes=(notes, id)=>{
    return notes.filter(note=>note.category._id==id)
}