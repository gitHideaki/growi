import React from 'react';
import PropTypes from 'prop-types';

export default class TagLabel extends React.Component {

  render() {
<<<<<<< HEAD
    if (this.props.currentPageTags.length === 0) {
      return (
        <li>
        tag is not set
        </li>
      );
    }

    const tags = [];
    for (let i = 0; i < this.props.currentPageTags.length; i++) {
      tags.push(
        <li key={i.toString()} className="label label-info">{this.props.currentPageTags[i]}</li>,
=======
    const tags = [];
    const tagListstyle = {
      borderRadius: '5px',
      marginLeft: '5px',
      fontSize: '13px',
      height: '20px',
      padding: '0px 10px',
    };

    for (let i = 0; i < this.props.currentPageTags.length; i++) {
      tags.push(
        <li style={tagListstyle} key={i.toString()} className="btn btn-info">{this.props.currentPageTags[i]}</li>,
      );
    }

    if (this.props.currentPageTags.length === 0) {
      tags.push(
        <li style={tagListstyle}>
        tag is not set
        </li>,
>>>>>>> 7179b248a088678d0a5875c9ccff198c1a92f1f7
      );
    }

    return (
<<<<<<< HEAD
      <div>
        <ul>
          {tags}
        </ul>

=======
      <div className="dropdown">
        <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
          タグ一覧
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu">
          {tags}
        </ul>
>>>>>>> 7179b248a088678d0a5875c9ccff198c1a92f1f7
      </div>
    );
  }

}

TagLabel.propTypes = {
  currentPageTags: PropTypes.array.isRequired,
};
