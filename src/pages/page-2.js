import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import { useTracker } from 'hooks';
import { commafy } from '../lib/util';

const SecondPage = () => {

  const { data: stats = [] } = useTracker({
    api: 'all'
  });

  const dashboardStats = [
    {
      primary: {
        label: 'Total Cases',
        value: stats ? commafy(stats?.cases) : '-',
      },
      secondary: {
        label: 'Per 1 Million',
        value: stats ? commafy(stats?.casesPerOneMillion) : '-',
      },
    }
  ]

  return (
    <Layout pageName="two">
      <Helmet>
        <title>Global Stats</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Global Stats</h1>
        <div className="new-stats">
          <ul>
            {dashboardStats.map(({ primary = {}, secondary = {} }, i) => {
              return (
                <li key={`Stat-${i}`} className="tracker-stat">
                  {primary.value && (
                    <p className="tracker-stat-primary">
                      <strong>{primary.label}:</strong>
                      {primary.value}
                    </p>
                  )}
                  {secondary.value && (
                    <p className="tracker-stat-secondary">
                      <strong>{secondary.label}:</strong>
                      {secondary.value}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default SecondPage;
