export default function ButtonLink({ icon: Icon, href, title = '', isDisabled }) {
  const base =
    "relative text-[rgba(200,200,220,0.7)] text-lg sm:text-xl p-2 sm:p-2.5 rounded-lg border flex items-center justify-center transition-all duration-200";
  const enabledCls =
    "cursor-pointer border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] hover:border-[rgba(164,118,255,0.4)] hover:text-white hover:bg-[rgba(164,118,255,0.1)] hover:shadow-[0_0_12px_rgba(164,118,255,0.2)]";
  const disabledCls =
    "opacity-30 cursor-not-allowed border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]";

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
      title="No disponible"
      className={`${base} ${disabledCls}`}
    >
      <Icon />
    </div>
  );
}
