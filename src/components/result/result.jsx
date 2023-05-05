import styled from "styled-components";

const Result = ({ amount, unit, className }) => {
  return (
    <div className={className}>
      <h2>{amount}</h2>
      <h3>{unit}</h3>
    </div>
  );
};

export default styled(Result)`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  margin: 0;
  font-size: var(--fontsize-result, 6rem);
  font-weight: var(--font-black);
  font-style: italic;

  h2 {
    color: var(--color-primary, purple);
  }

  h3 {
    color: var(--color-off-black, black);
  }
`;
