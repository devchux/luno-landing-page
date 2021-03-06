import Title from "../title/Title";
import { steps } from "./constants";

const GetStarted = () => (
  <div className="text-center p-6 py-16">
    <Title title="Get started in just a few minutes" />
    <div className="flex flex-col sm:flex-row justify-between p-3 lg:p-24 py-8">
    {steps.map(({ image, title, body }) => (
      <div key={title} className="flex flex-col items-center sm:w-1/3 p-6">
        <div>
          <img src={image} alt="get-started" />
        </div>
        <div>
          <h5 className="font-greycliff text-primary font-black text-2xl">{title}</h5>
          <p>{body}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
);

export default GetStarted;
