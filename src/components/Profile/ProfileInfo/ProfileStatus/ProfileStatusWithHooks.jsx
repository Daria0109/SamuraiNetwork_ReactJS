import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
  debugger
const[editMode, setEditMode] = useState(false);
const[status, setStatus] = useState(props.status);

useEffect(() => {
  debugger
  setStatus(props.status)
}, [props.status])

const updateStatus = () => {
    props.updateStatus(status);
    setEditMode(false)
}
  return <>
    {!editMode &&
    <div>
      <span onDoubleClick={() => setEditMode(true)}>{props.status || "No status..."}</span>
    </div>}
    {editMode &&
    <div>
      <input autoFocus
             value={status}
             onChange={(e) => setStatus(e.currentTarget.value)}
             onBlur={updateStatus}/>
    </div>}
  </>
}

export default ProfileStatusWithHooks;