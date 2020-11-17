import React from "react";

class ProfileStatus extends React.Component {
  state = {editMode: false}
  onEditMode = () => {
    this.setState({editMode: true})
  }
  offEditMode = () => {
    this.setState({editMode: false})
  }
  render () {
    return <>
      {!this.state.editMode &&
      <div>
        <span onDoubleClick={this.onEditMode}>{this.props.status}</span>
      </div>}
      {this.state.editMode &&
      <div>
        <input type="text" value={this.props.status} onBlur={this.offEditMode} autoFocus/>
      </div>}
    </>
  }
}

export default ProfileStatus;