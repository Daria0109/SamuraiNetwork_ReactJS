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
  componentDidUpdate = (prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) => {
    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return <>
      {!this.state.editMode &&
      <span onDoubleClick={this.onEditMode}>{this.props.status || "No status..."}</span>
      }

      {this.state.editMode &&
      <input value={this.state.status}
             onBlur={this.offEditMode}
             autoFocus onChange={this.changeStatus}/>
      }
    </>
  }
}

export default ProfileStatus;