import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div >
            <div className={classes.content__img_box}>
                <img className={classes.content__img}
                     src="https://images.ctfassets.net/hrltx12pl8hq/hXPLBHmnfgxw58CeaaADd/34e2f72481af47c654279ba6d4e18044/shutterstock_1469674187.jpg?fit=fill&w=800&h=400"
                     alt="Profile logo"/>
            </div>
            <div className={classes.descriptionBlock}>
                Avatar + text
            </div>
        </div>
    )
}
export default ProfileInfo
