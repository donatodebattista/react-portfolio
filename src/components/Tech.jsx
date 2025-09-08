export default function Tech({ tech }) {
  const Icon = tech.icon;
  return (
    <div className='flex flex-row mx-12 items-center'>
      <span
        className="w-8 h-8 flex items-center justify-center"
        aria-hidden="true"
      >
        <Icon className="w-full h-full"/>
      </span>
      <p className='text-whiteText ml-2 pointer'>{tech.name}</p>
    </div>
  )
}