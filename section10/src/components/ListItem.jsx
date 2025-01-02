import './ListItem.css'

const ListItem = ({id, isDone, content, date, onUpdate, onDelete})=>
{
    const onChangeCheckBox = ()=>
    {
        onUpdate(id);
    };

    const onClickItem = ()=>
    {
        onDelete(id);
    };

    return (
        <div className='ListItem'>
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox"  />
            <p className='content'>{content}</p>
            <p className='date'>{new Date(date).toLocaleDateString()}</p>
            <button onClick={onClickItem}>delete</button>
        </div> 
    );
}

export default ListItem;