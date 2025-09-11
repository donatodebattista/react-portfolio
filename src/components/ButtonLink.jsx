// ButtonLink.jsx
export default function ButtonLink({ icon: Icon, href, title = '', isDisabled }) {
  const base =
    "text-[#f3f3f398] text-lg sm:text-xl bg-[#1d1d1d] p-2 sm:p-3 rounded-lg border border-[#303030] transition-colors flex items-center justify-center";
  const enabledCls = "cursor-pointer hover:bg-[#151515]";
  const disabledCls = "opacity-40 cursor-not-allowed";

  if (href && !isDisabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={`${base} ${enabledCls}`}
      >
        <Icon />
      </a>
    );
  }

  return (
    <div
      role="button"
      aria-disabled={isDisabled}
      tabIndex={-1}
      title={'No disponible'}
      className={`${base} ${disabledCls}`}
    >
      <Icon />
    </div>
  );
}
