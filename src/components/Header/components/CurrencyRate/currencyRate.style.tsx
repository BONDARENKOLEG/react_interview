import styled from "styled-components";

export const CurrencyWrapper = styled.div`
  background: #8dd1e7;
  padding: 15px;
  border-radius: 10px;
  min-width: fit-content;
  width: 9%;

  .currency-list {
    .currency-item{
      display: flex;
      justify-content: space-between;
    }

    .currency {
      margin-right: 5px;
    }
  }
`