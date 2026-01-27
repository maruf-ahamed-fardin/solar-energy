

const Marquee = () => {
    return (
        <div  className="text-white">
            <marquee className='-500  h-20 text-5xl' behavior="scroll" direction="left" scrollAmount="10" style={{background: '#EFF1ED', color: 'black', padding: '8px', fontWeight: '500'}}
            >
                 24/7 Solar Support — Call Us Anytime for Clean Energy Solutions  |
                 Emergency Service Available — 24 Hour Helpline
            </marquee>

        </div>
    );
};

export default Marquee;