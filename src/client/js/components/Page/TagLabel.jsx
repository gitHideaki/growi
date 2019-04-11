import React from 'react';
import PropTypes from 'prop-types';

export default class TagLabel extends React.Component {

  render() {
    const tags = [];
    const tagStyle = {
      borderRadius: '5px',
      marginLeft: '5px',
      padding: '2px 5px',
      // fontSize: '1rem',
    };

    // if (this.props.currentPageTags.length === 0) {
    //   return (
    //     <div style={tagListstyle}>
    //     tag is not set
    //     </div>
    //   );
    // }

    if (this.props.currentPageTags.length === 0) {
      return (
        <div>
          <div style={tagStyle} className="btn btn-info">
            wiki
          </div>
          <div style={tagStyle} className="btn btn-info">
            test
          </div>
          <div style={tagStyle} className="btn btn-info">
            local
          </div>
          <div style={tagStyle} className="btn btn-info">
            今日の一言
          </div>
        </div>

      );
    }

    for (let i = 0; i < this.props.currentPageTags.length; i++) {
      tags.push(
        <div key={i.toString()} className="btn btn-info">{this.props.currentPageTags[i]}</div>,
      );
    }

    return (
      <div>
        {tags}
      </div>
    );
  }

}

TagLabel.propTypes = {
  currentPageTags: PropTypes.array.isRequired,
};
