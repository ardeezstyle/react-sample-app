import * as React from 'react';

import SampleCss from './Sample.module.css';


class Sample extends React.Component<any, any>  {
  public render() {
    return (
      <div className={SampleCss.heading}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum  </div>
    );
  }
}

export default Sample;
