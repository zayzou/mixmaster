import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .meal {
    margin-bottom: 2rem;
  }
  .meal-info {
    padding-top: 2rem;
  }
  .meal p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .meal-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .meal {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .meal-info {
      padding-top: 0;
    }
  }
  .container {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .ingredients {
    margin-top: 2rem;
    font-size: 17px;
    font-weight: normal;
    text-align: center;
    font-family: roboto;
    line-height: 1.6rem;
  }
  /* Apply some basic styling to the table */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  /* Style the table headers */
  th,
  td {
    padding: 2px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  /* Apply alternating row colors for better readability */
  tr:nth-child(even) {
    background-color: #842029;
  }
`;

export default Wrapper;
