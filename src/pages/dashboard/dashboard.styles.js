import styled from 'styled-components';

export const DashboardContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

export const PageTitle = styled.h1`
  color: #3b3b3b;
  font-size: 24px;
  margin-bottom: 0;
`;

export const Subheadline = styled.p`
  color: grey;
`;

export const SectionName = styled.h2`
  color: #3b3b3b;
  font-size: 20px;
  text-align: center;
`;

export const TicketsDetailContainer = styled.section`

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const TicketsInfoContainer = styled.div`
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export const TicketInfo = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 10px 10px 0px;
  padding: 5px;
`;

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const NewTicketsContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 0px 10px 10px;
  width: 100%;
`;
