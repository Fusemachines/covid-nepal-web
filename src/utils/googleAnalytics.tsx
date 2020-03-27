import React from 'react';
import GoogleAnalytics from 'react-ga';
import Config from 'src/config';

GoogleAnalytics.initialize(Config.ApiEnv.googleAnalytics);

interface TrackProps {
  location: any;
}

const withTracker = (WrappedComponent: any, options = {}) => {
  const trackPage = (page: any) => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends React.Component<TrackProps> {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
