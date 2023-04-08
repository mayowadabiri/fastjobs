import Image from 'next/image';
import Logo from '@/assets/logo.png';
const skills: string[] = ['UI/UX', 'Product Design', 'Motion Graphics'];

const Content = () => {
  return (
    <div className="basis-8/12 pl-28 pt-20">
      <Image src={Logo} alt="fast jobs logo" />
      <div className="pt-48 font-primary text-white">
        <p className="typo">Congratulations!</p>
        <h1 className="my-4 heading text-white">
          Company XYZ is inviting <br />
          you to take an interview
        </h1>
        <p className="typo">Skills being assessed:</p>
        <div className="flex space-x-2 mt-1 mb-5">
          {skills.map((item: string) => (
            <p
              className="w-fit border rounded-[50px] p-3 border-white text-white"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
        <p className="typo">Don’t be nervous.</p>
      </div>
    </div>
  );
};
export default Content;
