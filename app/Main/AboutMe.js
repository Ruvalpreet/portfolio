import Image from "next/image";
import Profile from "../assets/profile.jpg";
function AboutMe() {
  return (
    <div className="text-white mt-10 ">
      <h1 className="text-3xl font-bold mr-4 text-center text-blue-500">
        About Me
      </h1>
      <div className="flex items-center justify-center">
        <div className="m-10">
          <Image
            src={Profile}
            alt="Profile"
            className="h-80 w-64 rounded-full object-cover hover:animate-pulse "
          />
          <h2 className="text-2xl font-bold mt-4 justify-center flex text-blue-500">
            Ruval
          </h2>
        </div>
        <p className="m-10 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
          maecenas sed enim ut sem viverra aliquet eget. Ac tincidunt vitae
          semper quis lectus nulla at volutpat diam. Mattis nunc sed blandit
          libero volutpat sed cras ornare. Consequat mauris nunc congue nisi
          vitae suscipit tellus. A pellentesque sit amet porttitor. Tristique
          risus nec feugiat in fermentum posuere urna. Blandit libero volutpat
          sed cras. Sed vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit. Purus sit amet volutpat consequat mauris nunc congue
          nisi vitae. Gravida quis blandit turpis cursus in hac. Tristique
          sollicitudin nibh sit amet commodo nulla. Vestibulum morbi blandit
          cursus risus at ultrices mi tempus. Ut etiam sit amet nisl purus in
          mollis nunc. Nascetur ridiculus mus mauris vitae ultricies. Facilisis
          leo vel fringilla est ullamcorper. Consequat id porta nibh venenatis
          cras sed felis eget. Sollicitudin nibh sit amet commodo nulla facilisi
          nullam. Sem viverra aliquet eget sit amet tellus cras adipiscing enim.
          Vitae et leo duis ut. Enim eu turpis egestas pretium aenean pharetra
          magna. Habitasse platea dictumst quisque sagittis purus sit amet.
          Tortor at risus viverra adipiscing at in. Pellentesque pulvinar
          pellentesque habitant morbi tristique senectus. Odio aenean sed
          adipiscing diam donec adipiscing tristique. Placerat orci nulla
          pellentesque dignissim enim sit amet. Leo integer malesuada nunc vel
          risus commodo viverra. In hac habitasse platea dictumst
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
