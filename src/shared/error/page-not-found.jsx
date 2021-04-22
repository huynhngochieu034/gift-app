import React from 'react';
import { Alert } from 'antd';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <Alert message="The page does not exist." danger />
      </div>
    );
  }
}

export default PageNotFound;
