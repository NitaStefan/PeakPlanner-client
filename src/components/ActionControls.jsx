import Edit from "./icons/Edit"
import Delete from "./icons/Delete"

const ActionControls = ({ openEditForm, deleteItem, iconSizeInRem = 1.25 }) => {
  return (
    <div className={`w-12 h-[4.5rem]`}>
      <div className="hidden group-hover:block pl-2">
        <button className="pt-2 block" onClick={deleteItem}>
          <Delete iconSizeInRem={iconSizeInRem} />
        </button>
        <button className="pt-2 block" onClick={openEditForm}>
          <Edit iconSizeInRem={iconSizeInRem} />
        </button>
      </div>
    </div>
  )
}

export default ActionControls
