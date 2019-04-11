import React from 'react';
import PropTypes from 'prop-types';

import CopyButton from '../CopyButton';
import TagLabel from './TagLabel';

export default class RevisionUrl extends React.Component {

  constructor(props) {
    super(props);

    // retrieve xss library from window
    this.xss = window.xss;
  }

  render() {
    const revisionStyle = {
      fontSize: '1em',
      float: 'left',
    };

    const pagePath = this.xss.process(this.props.pagePath);
    const sendTagData = this.xss.process(this.props.setTagData);

    const url = (this.props.pageId == null)
      ? decodeURIComponent(window.location.href)
      : `${window.location.origin}/${this.props.pageId}`;
    const copiedText = `${pagePath}\n${url}`;

    return (
      <div>
        <span style={revisionStyle}>
          {url}
          <CopyButton
            buttonId="btnCopyRevisionUrl"
            text={copiedText}
            buttonClassName="btn btn-default btn-copy-link"
            iconClassName="ti-clipboard"
          />
        </span>
        <TagLabel currentPageTags={sendTagData} />
      </div>
    );
  }

}

RevisionUrl.propTypes = {
  pageId: PropTypes.string,
  pagePath: PropTypes.string.isRequired,
  setTagData: PropTypes.array.isRequired,
};
