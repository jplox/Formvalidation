import notfound from '../Assests/NotFound.jpg' //importing the image file from the local location 

const NotFound = () => {
    return (
        <img src={notfound} style={{ width: '30%', margin: '80px 0 0 35%' }} alt="img" />
    )
}
export default NotFound  //exporting the NotFound Module 