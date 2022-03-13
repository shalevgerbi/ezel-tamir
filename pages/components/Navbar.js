
function Navbar() {
    return (
        
        <div dir='rtl' className="bg-gray-700 h-16 sticky top-0 z-50 opacity-90">
        <ul className="flex pt-4 justify-center lg:justify-start" >
            <li className="mr-6">
                <a className="text-3xl text-green-500 hover:text-green-800" href="#">גלריה</a>
            </li>
            <li className="mr-6">
                <a className="text-3xl text-green-500 hover:text-green-800" href="#">עלינו</a>
            </li>
            <li className="mr-6">
                <a className="text-3xl text-green-500 hover:text-green-800" href="#">צור קשר</a>
            </li>
            </ul>
        </div>
        
    )
}

export default Navbar
