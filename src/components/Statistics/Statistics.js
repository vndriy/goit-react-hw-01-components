import { Header, StatLI, StatUl, StatisticWrapper } from './Statistics.styled';
import { StatComponent } from 'components/StatisticComponent/StatisticComponent';

export const Statistic = ({ stats, title }) => {
  return (
    <StatisticWrapper>
      {title && <Header>{title}</Header>}

      <StatUl>
        {stats.map(data => (
          <StatLI key={data.id} $variant={data.label}>
            <StatComponent type={data.label} percent={data.percentage} />
          </StatLI>
        ))}
      </StatUl>
    </StatisticWrapper>
  );
};
