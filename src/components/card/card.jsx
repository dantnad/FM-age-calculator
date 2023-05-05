import breakpoints from "../../breakpoints";
import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  border-radius: 2% 2% 30% 2%;
  width: 80vw;
  margin: 0 auto;
  background-color: var(--color-white, white);

  > .input-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 1rem;
  }

  > hr {
    border: 1px solid var(--color-light-grey, black);
    margin: 1rem 0;
  }

  @media ${breakpoints.tablet} {
    width: clamp(30rem, 80vw, 50rem);
  }
`;
