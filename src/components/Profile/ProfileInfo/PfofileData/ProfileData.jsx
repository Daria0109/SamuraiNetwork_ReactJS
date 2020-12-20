import React from "react";
import Contact from "./Contact";

const ProfileData = (props) => {
  return <>
    {props.isOwner &&
    <button onClick={props.setEditMode}>Edit Form</button>}
    <div><b>Name: </b>{props.data.fullName}</div>
    <div><b>Looking for a job: </b>{props.data.lookingForAJob ? 'Yes' : 'No'}</div>
    <div><b>My skills: </b>{props.data.lookingForAJobDescription}</div>
    <div><b>About Me: </b>{props.data.aboutMe}</div>
    <div><b>My contacts: </b>{Object.keys(props.data.contacts).map(key => {
      return <Contact key={key} name={key} address={props.data.contacts[key]}/>
    })}</div>
  </>
}
export default ProfileData;