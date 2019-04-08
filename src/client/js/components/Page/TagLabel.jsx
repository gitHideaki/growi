import React from 'react';
import PropTypes from 'prop-types';

export default class TagLabel extends React.Component {

  render() {
    if (this.props.currentPageTags.length === 0) {
      return (
        <div>
        tag is not set
        </div>
      );
    }

    const tags = [];
    for (let i = 0; i < this.props.currentPageTags.length; i++) {
      tags.push(
        <li className="label label-info">{this.props.currentPageTags[i]}</li>,
      );
    }
    return (
      <div>
        <ul>
          {tags}
        </ul>

      </div>
    );
  }

}

TagLabel.propTypes = {
  currentPageTags: PropTypes.array.isRequired,
};
