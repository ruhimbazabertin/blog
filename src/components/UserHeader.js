import React from "react";

class UserHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <strong>{this.props.user.name}</strong>
      </div>
    );
  }
}

export default UserHeader;
