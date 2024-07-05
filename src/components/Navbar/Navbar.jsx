import logo from '../../assets/goldendisk.png';

export const Navbar = () => {
    return (
        <>
        <div>
            <img src={logo}/>
            <form role='search'>
                <input type="search" placeholder='Search'/>
                <button type='submit'></button>
            </form>
            <div>
                <button></button>
                <button></button>
            </div>
        </div>
        <div>
            <ul>
                <li>HOME</li>
                <li>STORE</li>
                <li>CONTACT</li>
                <li>MORE</li>
            </ul>
        </div>
        </>
    )
}