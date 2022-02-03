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
    },
    {
      primary: {
        label: 'Total Deaths',
        value: stats ? commafy(stats?.deaths) : '-',
      },
      secondary: {
        label: 'Per 1 Million',
        value: stats ? commafy(stats?.deathsPerOneMillion) : '-',
      },
    },
    {
      primary: {
        label: 'Total Tests',
        value: stats ? commafy(stats?.tests) : '-',
      },
      secondary: {
        label: 'Per 1 Million',
        value: stats ? (stats?.testsPerOneMillion) : '-',
      },
    },
    {
      primary: {
        label: 'Active Cases',
        value: stats ? commafy( stats?.active ) : '-',
      },
    },
    {
      primary: {
        label: 'Critical Cases',
        value: stats ? commafy( stats?.critical ) : '-',
      },
    },
    {
      primary: {
        label: 'Recovered Cases',
        value: stats ? commafy( stats?.recovered ) : '-',
      },
    },
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
                      <strong>{primary.label}: </strong>
                      {primary.value}
                    </p>
                  )}
                  {secondary.value && (
                    <p className="tracker-stat-secondary">
                      <strong>{secondary.label}: </strong>
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
