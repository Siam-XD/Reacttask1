const Header = () => {
    const navItems = ['Home', 'About Me', 'contact']
  return (
    <div className="py-8 px-16 flex justify-between items-center bg-linear-to-r from-[#142431] via-[#1d2a3b] to-[#21334b]">
        <div className="logo"><h1 className="text-xl font-bold text-white">SaulDesign</h1></div>
        <nav>
            <ul className="flex gap-12">
                {navItems.map((item, i)=> {
                    return(<li key={i} className="text-white text-base hover:text-[#bdbdbd]">{item}</li>)
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Header