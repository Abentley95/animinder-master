import styled from 'styled-components';


export const CenteredContainer = styled.div`
    padding: 10px;
    width: 500px;
    height: 600px;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    @media (max-width: 700px) {
        background: palevioletred;
      }
`;

export const LoginStyle = {
    // margin: "0 auto",
    // width: "50%",
    // marginTop: "30%"
}