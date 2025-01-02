import './Header.css'

const Header = ()=>
{
    return (

        <div className='Header'>
        <h1>mini Board</h1>
        <h4>{new Date().toDateString()}</h4>
        </div>
    );
}

export default Header;