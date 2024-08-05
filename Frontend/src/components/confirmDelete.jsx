import '../styles/confirmDelete.scss';
import '../styles/general-font-sizes.scss'

export function ConfirmDelete({student, onDelete}){
    return(
        <>
         <h4>{`The following student will be removed:`}</h4>
         <h6>{`> ${student.student?.name}  ${student.student?.lastName}`}</h6>

         <div>
            <button className="btn btn-delete" onClick={()=>onDelete()}>
                <span className="material-symbols-outlined">
                    delete
                </span>
                &nbsp;Eliminar
            </button>
         </div>
        </>
    )
}