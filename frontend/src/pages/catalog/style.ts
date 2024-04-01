import styled from 'styled-components'

export const CatalogContainer = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  .utils {
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 20px;
  }
  .card {
    display: flex;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;

  }
`
