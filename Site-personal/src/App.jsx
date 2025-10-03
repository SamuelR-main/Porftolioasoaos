
function App() {

  return (
    <div className="flex flex-col w-full xl:w-7xl">
      <div className="header flex flex-row w-full xl:w-7xl">
        <div className="flex flex-row">
          <h1>S</h1>
        </div>
        <div className="flex flex-row justify-evenly">
          <ul className="flex">
            <li>About</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="cover flex flex-col w-full xl:w-7xl">
        <div className="space flex flex-col"></div>
        <div className="flex flex-col justify-center items-center">
          <h2>Hi! My name is</h2>
          <h1>Samuel Araujo</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="about flex flex-row justify-between w-full xl:w-7xl">
        <div className="about-text flex flex-col">
          <h1>About</h1>
          <div className="flex flex-row w-1xl h-10 bg-orange-200"></div>
          <p>Lorem ipsum dolor sit amet consectetur. Nec eleifend nullam
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
        <div className="about-photo flex flex-col items-center justify-center">

        </div>
      </div>
      <div className="resume flex flex-col">
        <h1>Resume</h1>
        <div className="flex flex-row w-1xl h-10 bg-orange-200"></div>
        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            <h2>Education</h2>
            <ul>
              <li>Sasa</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2>Skills</h2>
            <ul>
              <li>asasas</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2>Tools</h2>
            <ul>
              <li>asasasas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects flex flex-col">
        <div className="flex flex-row w-1xl h-10 bg-orange-200"></div>
        <div className="flex flex-col justify-around">
          <div className="flex flex-row"></div>
          <div className="flex flex-col">
            <h1>KKakakakakAKAKKKakkakak</h1>
            <p>kakskaskaskoaksoaksoaksoaksoak</p>
          </div>
          <div className="flex flex-col">
            <h1>KKakakakakAKAKKKakkakak</h1>
            <p>kakskaskaskoaksoaksoaksoaksoak</p>
          </div>
          <div className="flex flex-col">
            <h1>KKakakakakAKAKKKakkakak</h1>
            <p>kakskaskaskoaksoaksoaksoaksoak</p>
          </div>
        </div>
      </div>
      <div className="contacts flex flex-col items-center justify-center">
        <h1>Contacts</h1>
        <a href="mailto:saaamuelrooodrigooo@gmail.com"></a>
      </div>
      <div className="footer flex flex-col">
        <div className="flex flex-row w-1xl h-10 bg-orange-200"></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-around items-center"></div>
          <div className="flex flex-row">
            <p>Criado por Samuel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
