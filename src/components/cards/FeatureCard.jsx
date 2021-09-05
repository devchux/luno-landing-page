const FeatureCard = ({ title, body, onClick, className }) => (
  <div
    className={`rounded-lg hover:bg-gray-200 cursor-pointer ${className} feature-card`}
    style={{ padding: '45px' }}
    onClick={onClick}
  >
    <h4 className="text-primary font-black text-2xl font-greycliff pb-3.5">{title}</h4>
    <p>{body}</p>
  </div>
);

export default FeatureCard;
