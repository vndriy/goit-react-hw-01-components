import { Header, StatLI, StatUl, StatisticWrapper } from "./Statistics.styled"
import { StatComponent } from "components/StatisticComponent/StatisticComponent"
import uploadData from "../data.json"

export const Statistic = () => {
    return (
        <StatisticWrapper>
  <Header>Upload stats</Header>

  <StatUl>
          {uploadData.map(data => (
            <StatLI key={data.id} $variant={data.label}>
            <StatComponent
              type={data.label}
              percent={data.percentage}
              />
              </StatLI>
   ))}
  </StatUl>
</StatisticWrapper>
    
)

}
