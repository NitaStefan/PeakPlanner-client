import Edit from "../icons/Edit"
import Delete from "../icons/Delete"

const ActionControls = ({ openEditForm }) => {
  return (
    <div className="w-12">
      <div className="hidden group-hover:block pl-2">
        <button className="mt-2 block">
          <Delete />
        </button>
        <button className="mt-2 block" onClick={openEditForm}>
          <Edit />
        </button>
      </div>
    </div>
  )
}

export default ActionControls
