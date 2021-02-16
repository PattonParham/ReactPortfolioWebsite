import styled from "styled-components";
import tw from "tailwind.macro";

const PortfolioTW = styled.div.attrs({
    className: ""
  })` & {

    .row{
        ${tw`flex mb-4`}
    }
    .w-1/2{
        ${tw`w-1/2`}
    }
    .flex{
        ${tw`flex`}
    }
    
    
}`;

export default PortfolioTW;