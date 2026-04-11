export default function Tech({ tech }) {
  const Icon = tech.icon;
  return (
    <div className='tech-chip mx-5'>
      <span className="flex items-center justify-center w-5 h-5" aria-hidden="true">
        <Icon className="w-full h-full" />
      </span>
      <span>{tech.name}</span>
    </div>
  );
}