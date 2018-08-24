import styled from 'styled-components';


export const CenteredContainer = styled.div`
    position: absolute;
    top: 30%;
    left: calc(50% - 150px);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) {
        background: palevioletred;
      }
`;

export const LoginStyle = {
    // margin: "0 auto",
    // width: "50%",
    // marginTop: "30%"
}