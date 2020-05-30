import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  background-color: #f3f3f3;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .left,
  .right {
    display: flex;
    align-items: center;
    flex: 1 0 100%;

    & > *:not(:last-child) {
      margin-right: 0.75rem;
    }
  }

  .left {
    margin-bottom: 0.5rem;
    overflow: hidden;

    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .right {
    justify-content: center;
  }

  svg {
    fill: #666;
    width: 1.5rem;
    height: 1.5rem;
  }

  a {
    color: #666;
    &.icon-link {
      cursor: pointer;
      font-size: 0;
    }
  }

  a.icon-link:hover svg {
    fill: #0451a5;
  }

  @media only screen and (min-width: 768px) {
    height: 3rem;
    flex-wrap: nowrap;
    font-size: 1rem;

    .left,
    .right {
      flex-basis: auto;
      margin: 0;
    }

    .right {
      justify-content: flex-end;
    }
  }
`;

export default StyledFooter;
