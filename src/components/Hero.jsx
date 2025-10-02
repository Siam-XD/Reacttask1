const Hero = () => {
  return (
    <div className="flex justify-around items-center py-20 px-16">
        <div className="w-2xl">
            <h1 className="text-7xl font-bold text-[#EEEEEE]">CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span></h1>
            <p className="text-lg text-gray-300 my-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae modi temporibus, accusantium. </p>
            <button className="bg-[#00ADB5] rounded-full py-2.5 px-8 text-white text-lg font-bold hover:bg-[#038d94]">Get started</button>
        </div>
        <img src="src/assets/heroImage.png" alt="Creative Vector" />
    </div>
  )
}

export default Hero