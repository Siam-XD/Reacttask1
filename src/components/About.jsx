const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center pb-10 px-3">
        <div className="md:w-[390px] text-center md:text-start">
            <h2 className="text-4xl md:text-6xl font-bold text-[#EEEEEE]">About <span className="text-[#00ADB5]">me</span></h2>
            <p className="text-base md:text-lg text-[rgba(238,238,238,0.75)] py-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus aliquam fugit quis ex! Temporibus aut reiciendis minima mollitia nulla totam molestias dolorem beatae odit, exercitationem suscipit ex, odio quam.</p>
        </div>
        <img src="src/assets/aboutImage.png" alt="" />
    </div>
  )
}

export default About