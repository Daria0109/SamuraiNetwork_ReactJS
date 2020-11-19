import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  onEditMode = () => {
    this.setState({editMode: true});
    // console.log(this.props.status || "---")
  }
  offEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status)
  }
  changeStatus = (e) => {
    this.setState({status: e.currentTarget.value})
  }
  render () {
    return <>
      {!this.state.editMode &&
      <div>
        <span onDoubleClick={this.onEditMode}>{this.props.status || "No status..."}</span>
      </div>}
      {this.state.editMode &&
      <div>
        <input value={this.state.status}
               onBlur={this.offEditMode}
               autoFocus onChange={this.changeStatus}/>
      </div>}
    </>
  }
}

export default ProfileStatus;