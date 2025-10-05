const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-20">
        <div className="md:w-2xl text-center md:text-start mb-14 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold text-[#EEEEEE]">CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span></h1>
            <p className="text-base md:text-lg text-gray-300 my-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae modi temporibus, accusantium. </p>
            <button className="bg-[#00ADB5] rounded-full py-2.5 px-8 text-white text-lg font-bold hover:bg-[#038d94]">Get started</button>
        </div>
        <img src="src/assets/heroImage.png" alt="Creative Vector" />
    </section>
  )
}

export default Hero