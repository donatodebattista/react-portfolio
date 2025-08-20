export default function ButtonLink({ icon: Icon }) {
  return (
    <div className="text-[#f3f3f398] text-lg sm:text-xl bg-[#1d1d1d] p-2 sm:p-3 rounded-lg cursor-pointer border border-[#303030] hover:bg-[#151515] transition-colors">
      <Icon />
    </div>
  )
}