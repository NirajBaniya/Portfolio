import Button from "./Button";


const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-3" >
      
       <img className="h-72 w-72 border-blue-700 rounded-full"  
       src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Image aayena" />
      
       <p className="font-extrabold text-3xl">Hey, I'm Niraj</p>
       <p className="font-extrabold text-lg">Fullstack Developer</p>
       <p className="font-serif font-semibold text-blue-800 text-sm w-2/3 text-center">A full stack developer is a versatile engineer skilled in both front-end and back-end technologies. They create complete web applications by working with languages and frameworks like HTML, CSS, JavaScript, React, Node.js, and databases such as MySQL or MongoDB. Their broad expertise allows them to handle everything from user interfaces to server-side logic, ensuring a seamless user experience across the entire application.</p>
      <div className=" flex gap-6 mt-5" >
      
      <a target="-" href="https://chatgpt.com/" >
      <Button title="Contact Me" type="orange" icon="contact" />
      </a>

    <a target="-" href="https://github.com/NirajBaniya">
     <Button title="My Projects" type="blue" icon="github"  />
    </a> 
    
    
      </div>
    </div>
  );
};

export default Hero;