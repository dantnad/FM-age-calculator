import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  border-radius: 2% 2% 30% 2%;
  background-color: var(--color-white, white);
  width: clamp(10rem, 50rem, 50rem);

  > .input-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 1rem;
  }
`;
