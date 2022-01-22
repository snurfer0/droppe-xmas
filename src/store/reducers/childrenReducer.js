import { STORE_CHILDREN_IN_STATE } from "../../utils/Constants";


const childrenReducer = (children = [], action) => {
    switch (action.type) {
        case STORE_CHILDREN_IN_STATE:
            return action.payload;
        default:
            return children
    }
}

export default childrenReducer