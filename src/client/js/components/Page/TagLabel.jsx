import React from 'react';
import PropTypes from 'prop-types';

export default class TagLabel extends React.Component {

  render() {
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
      );
    }

    return (
      <div className="dropdown">
        <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
          タグ一覧
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu">
          {tags}
        </ul>
      </div>
    );
  }

}

TagLabel.propTypes = {
  currentPageTags: PropTypes.array.isRequired,
};
