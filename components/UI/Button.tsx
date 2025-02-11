function Button({
  color,
  children,
}: {
  color: "primary" | "secondary" | "tertiary" | "destroy";
  children: React.ReactNode;
}) {
  const colorVariants = {
    primary: "bg-grey-900 text-white hover:bg-grey-500 p-4",
    secondary:
      "bg-beige-100 hover:bg-white hover:border-beige-500 hover:border p-4",
    tertiary: "flex items-center gap-3 text-grey-500 hover:text-grey-900",
    destroy: "bg-red text-white hover:bg-red/80 p-4",
  };

  return (
    <button
      className={`group ${colorVariants[color]} text_preset_4_bold rounded-lg  transition-colors cursor-pointer`}
    >
      {children}
      <svg
        fill="none"
        height="11"
        viewBox="0 0 6 11"
        width="6"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          color !== "tertiary" ? "hidden" : "inline-block"
        } text-grey-500 group-hover:text-grey-900`}
      >
        <path
          d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z"
          className="fill-current"
        />
      </svg>
    </button>
  );
}

export default Button;
