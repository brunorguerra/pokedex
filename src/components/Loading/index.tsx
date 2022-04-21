import { Container } from "./style";
import { BiLoaderAlt } from "react-icons/bi";

export const Loading = () => {
    return (
        <Container>
            <div className="boxLoading">
                <BiLoaderAlt
                    size={40}
                    color="#ffde02"
                    className="iconLoading"
                />
            </div>
        </Container>
    );
};
