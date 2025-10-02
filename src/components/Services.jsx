const Services = () => {
    const services = [
        {
            icon: 'src/assets/code.png',
            name: 'Development',
            detail: 'Create a platform with the best and coolest quality from us.'
        },
        {
            icon: 'src/assets/layer.png',
            name: 'UI/UX Designer',
            detail: 'We provide UI/UX Design services, and of course with the best quality.'
        },
        {
            icon: 'src/assets/video-play.png',
            name: 'Videography',
            detail: 'We provide Videography services, and of course with the best quality.'
        }
    ]
  return (
    <div className="flex flex-col items-center py-30">
        <div className="my-12">
            <h2 className="text-6xl font-bold text-[#FFF] text-center w-xl">The Service We Provide For You</h2>
        </div>
        <div className="flex justify-between">
            {services.map((service, index) => {
                return (
                    <div key={index} className="text-center flex flex-col items-center gap-5 w-[380px] m-5">
                        <img src={service.icon} alt={service.name} />
                        <h3 className="font-medium text-2xl text-[#FFF]">{service.name}</h3>
                        <p className="text-lg font-normal text-[rgba(255,255,255,0.71)]">{service.detail}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services