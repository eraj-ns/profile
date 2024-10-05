import Image from "next/image";
import pic from "/inShot_pkg.jpg"
export default function Home() {
  return (
    <div className="parent">
      <div className="child1">
        hey ,
        <br/> 
        My Name is <span className="pinkColor">Eraj Naz</span>
        <br/> I am Next JS Developer
      </div>
      <div className="child2">
        <Image 
        src={"/inShot_pkg.jpg"}
        alt="inShot_pkg"
        width={400} 
        height={200} />
      </div>
    </div>
  );
}
