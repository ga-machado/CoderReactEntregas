const Item = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <img src={props.pictureUrl} />
        </> 
    )
      
}

export default Item;



