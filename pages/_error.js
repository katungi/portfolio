import React from 'react'

class E extends React.Component {
  static getInitialProps({ res, err }) {
    const status = res ? res.statusCode : err ? err.statusCode : null;
    return { status };
  }

  render() {
    const { status } = this.props;
    return <Error status={status} />;
  }
}

export default E;
