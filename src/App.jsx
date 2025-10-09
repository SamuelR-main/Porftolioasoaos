import spacebackground from "./assets/space.jpg"

function App() {

  return (
    <div className="flex flex-col w-full 2xl:w-7xl">
      <div className="header flex flex-row w-full 2xl:w-7xl min-h-[50px] justify-between pl-8 pr-8">
        <div className="flex flex-row w-[30%] justify-start">
          <h1 className="text-7xl">S</h1>
        </div>
        <div className="flex flex-row justify-around items-center w-[30%]">
            <p>About</p>
            <p>Resume</p>
            <p>Projects</p>
            <p>Contacts</p>
        </div>
      </div>
      <div className="cover flex flex-col w-full 2xl:w-7xl min-h-[720px] items-center justify-center">
        <div className="space flex flex-col bg-[url(./assets/space.jpg)]"></div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl">Hi! My name is</h2>
          <h1 className="text-7xl font-bold">Samuel Araujo</h1>
          <h3 className="second-color text-4xl">Web Developer</h3>
        </div>
      </div>
      <div className="about flex flex-col justify-between w-full 2xl:w-7xl pb-20 pr-8 pl-8">
        <h1 className="text-3xl">About</h1>
        <div className="flex flex-row w-[600px] h-[10px] bg-orange-600"></div>
        <div className="flex flex-row justify-between">
        <div className="about-text flex flex-col w-[50%]">
          <p className="text-2xl text-justify indent-2">Lorem ipsum dolor sit amet consectetur. Nec eleifend nullam
neque faucibus pretium rhoncus. Integer turpis vulputate vitae
tortor. Id massa egestas lectus dolor sem eget proin duis. Sed
non morbi elit ullamcorper magna. Nulla non sed convallis et
placerat quisque risus. Non ut adipiscing pharetra quis lorem
quis. Bibendum et tortor nisl eget sociis id tristique sed facilisi.
Sit aenean arcu dignissim consectetur malesuada viverra
sagittis. Massa mauris augue sem commodo nibh faucibus.
Dolor mauris tortor purus molestie at. Faucibus pharetra ut
nulla amet luctus dictumst in. Habitant sit donec leo aliquam et
a iaculis iaculis. Ultrices tempor erat quis amet orci. Sollicitudin
sed imperdiet sagittis consequat egestas accumsan sed
egestas pellentesque. Volutpat morbi est adipiscing ut dui
aliquet habitant purus. Enim eros nisl eu purus etiam ac
nascetur. Euismod massa turpis vitae orci in. Leo ut integer
tempus id quis ipsum scelerisque. Eget auctor etiam massa
penatibus rhoncus purus.</p>
        </div>
        <div className="about-photo flex flex-col items-center justify-center w-[50%]">

        </div>
        </div>
         
      </div>
      <div className="resume flex flex-col w-full 2xl:w-7xl pr-8 pl-8">
        <h1 className="text-4xl">Resume</h1>
        <div className="flex flex-row w-[600px] h-[10px] bg-orange-600"></div>
        <div className="flex flex-row items-center justify-around pt-20 pb-20">
          <div className="flex flex-col items-center w-[300px] h-[550px] border-orange-600 border-[2px]">
            <h2>Education</h2>
            <ul>
              <li>Sasa</li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-[300px] h-[550px] border-orange-600 border-[2px]">
            <h2>Skills</h2>
            <ul>
              <li>asasas</li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-[300px] h-[550px] border-orange-600 border-[2px]">
            <h2>Tools</h2>
            <ul>
              <li>asasasas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects flex flex-col w-full 2xl:w-7xl pr-8 pl-8">
      <h1 className="text-4xl">Projects</h1>
        <div className="flex flex-row w-[600px] h-[10px] bg-orange-600"></div>
        <div className="flex flex-col justify-around pt-15">
          <div className="flex flex-row justify-between pb-10">
            <img src="" alt="" className="bg-orange-600 border-none w-[250px] h-[250px]"/>
              <div className="flex flex-col pl-5 justify-start items-start">
                <h1 className="text-3xl">KKakakakakAKAKKKakkakak</h1>
                <p className="text-2xl">kakskaskaskoaksoaksoaksoaksoak</p>
              </div>
          </div>
          <div className="flex flex-row justify-between pb-10">
              <div className="flex flex-col pl-5">
                <h1 className="text-3xl">KKakakakakAKAKKKakkakak</h1>
                <p className="text-2xl">kakskaskaskoaksoaksoaksoaksoak</p>
              </div>
              <img src="" alt="" className="bg-orange-600 border-none w-[250px] h-[250px]"/>
          </div>
          <div className="flex flex-row justify-between pb-10">
            <img src="" alt="" className="bg-orange-600 border-none w-[250px] h-[250px]"/>
              <div className="flex flex-col pl-5">
                <h1 className="text-3xl">KKakakakakAKAKKKakkakak</h1>
                <p className="text-2xl">kakskaskaskoaksoaksoaksoaksoak</p>
              </div>
          </div>
        </div>
      </div>
      <div className="contacts flex flex-col items-center justify-center w-full 2xl:w-7xl pr-8 pl-8">
        <h1 className="text-6xl">Contacts</h1>
        <a href="mailto:saaamuelrooodrigooo@gmail.com" className="text-7xl underline">saaamuelrooodrigooo@gmail.com</a>
      </div>
      <div className="footer flex flex-col w-full 2xl:w-7xl pt-20 pr-8 pl-8">
      <div className="flex flex-row w-full h-[10px] bg-orange-600"></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-evenly w-[25%] items-center pt-5">
            <img src="" alt="" className="w-[50px] h-[50px] rounded-4xl bg-orange-600"/>
            <img src="" alt="" className="w-[50px] h-[50px] rounded-4xl bg-orange-600"/>
            <img src="" alt="" className="w-[50px] h-[50px] rounded-4xl bg-orange-600"/>
            <img src="" alt="" className="w-[50px] h-[50px] rounded-4xl bg-orange-600"/>
            <img src="" alt="" className="w-[50px] h-[50px] rounded-4xl bg-orange-600"/>
          </div>
          <div className="flex flex-row w-[20%] justify-end pt-5">
            <p>Criado por Samuel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
