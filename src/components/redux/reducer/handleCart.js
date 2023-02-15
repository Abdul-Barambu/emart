const cart = [];

export const handlCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            //existed
            const exist = state.find(x => x.id === product.id);

            //increase qty
            if(exist){
                return state.map(x => x.id === product.id ? {...x, gty: x.qty+1} : x)
            }
            else{
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
            
            break;

            case "DELETEITEM":
            //existed
            const exist1 = state.find(x => x.id === product.id);

            //increase qty
            if(exist1===1){
                return state.filter(x => x.id !== exist1.id)
            }
            else{
                
                return state.map(x => x.id === product.id ? {...x, gty: x.qty-1} : x);
            }
            break;
    
        default:
            return state
            break;
    }
}