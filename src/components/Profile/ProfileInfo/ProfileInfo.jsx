import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./PfofileData/ProfileData";
import ProfileDataForm from "./PfofileData/ProfileDataForm";


const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }

  const onLoadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/*<div className={classes.content__img_box}>*/}
      {/*    <img className={classes.content__img}*/}
      {/*         src="https://images.ctfassets.net/hrltx12pl8hq/hXPLBHmnfgxw58CeaaADd/34e2f72481af47c654279ba6d4e18044/shutterstock_1469674187.jpg?fit=fill&w=800&h=400"*/}
      {/*         alt="Profile logo"/>*/}
      {/*</div>*/}

      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="Avatar"/>
        {props.isOwner && <div>
          <input type='file' onChange={onLoadPhoto}/>
        </div>}
        <div><b>Status: </b>
          <ProfileStatus status={props.status}
                         updateStatus={props.updateStatus}/>
        </div>
        {editMode
          ? <ProfileDataForm initialValues={props.profile} data={props.profile} onSubmit={onSubmit}/>
          : <ProfileData data={props.profile}
                         isOwner={props.isOwner}
                         setEditMode={() => setEditMode(true)}/>}

      </div>
    </div>
  )
}


export default ProfileInfo
