import styled from "styled-components";

export const TransactionsWrapper = styled.div`

.transactions-list {
  height: 70vh;
  overflow-y: scroll;
}

.transaction-item {
  padding: 10px;
  border: 1px solid;
  height: fit-content;

  display: flex;
  align-items:center;
}

.delete-button {
  margin-left: 15px;
  height: 25px;
  cursor: pointer;
}


.total {
  font-weight: bold;
  color: red;
  border-top: 1px solid black;
  padding: 10px;


}

`