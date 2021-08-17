import { Helmet } from "react-helmet-async";

export default function titleFilter(title){
    return(
        <Helmet>
            <title>
                {title}
            </title>
        </Helmet>
    )
}