import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 40px 40px 0px 40px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .top {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        height: 40px;
    }
    h1 {
        display: flex;
        justify-content: center;
        cursor: pointer;
        font-size: 40px;
    }
    .bottom {
        gap: 20px;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
    }
    .icon {
        font-size: 20px;
    }
`