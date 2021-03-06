import React from 'react';
import {buildURI} from '../core';
import {
   defaultProps as commonDefaultProps,
   propTypes as commonPropTypes} from '../metaProps';
const defaultProps = {
  target: '_blank'
};

/**
 *
 * @example ../../sample-site/csvdownload.example.md
 */
class CSVDownload extends React.Component {

  static defaultProps = Object.assign(
    commonDefaultProps,
    defaultProps
  );

  static propTypes = commonPropTypes;

  constructor(props) {
    super(props);
    this.state={};
  }

  buildURI() {
    return buildURI(...arguments);
  }

  componentDidMount(){
    const {data, headers, separator, uFEFF, target, specs, replace} = this.props;
    if (typeof window.navigator.msSaveOrOpenBlob !== 'undefined') {
       this.state.page = winNav.msSaveOrOpenBlob(this.buildURI(data, uFEFF, headers, separator));
    } else {
      this.state.page = window.open(
        this.buildURI(data, uFEFF, headers, separator), target, specs, replace
       );  
    }
  }

  getWindow() {
    return this.state.page;
  }

  render(){
    return (null)
  }
}

export default CSVDownload;
