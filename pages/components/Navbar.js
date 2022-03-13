
function Navbar() {
    return (
        <div className="bg-gray-700 h-16 sticky top-0 z-50 opacity-90">
        <ul class="flex pt-4 float-right" >
            <li class="mr-6">
                <a class="text-3xl text-green-500 hover:text-green-800" href="#">צור קשר</a>
            </li>
            <li class="mr-6">
                <a class="text-3xl text-green-500 hover:text-green-800" href="#">גלריה</a>
            </li>
            <li class="mr-6">
                <a class="text-3xl text-green-500 hover:text-green-800" href="#">עלינו</a>
            </li>
            </ul>
        </div>
    )
}

export default Navbar
