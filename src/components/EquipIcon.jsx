// Small line icons for the equipment list, drawn on a 24 grid in the brand's bronze (page.css, .equip-icon).
// They sit beside words that already name the kit, so they are aria-hidden.
const paths = {
  excavator: (
    <>
      <rect x="1.5" y="17" width="13" height="4" rx="2" />
      <path d="M3.5 17v-5.5h5.5l2 2.5v3" />
      <path d="M11 13.5l5-7.5 4.5 3.5" />
      <path d="M20.5 9.5l1.5 4-3.5.5" />
    </>
  ),
  breaker: (
    <>
      <path d="M6.5 3.5h11" />
      <path d="M12 3.5v2.5" />
      <rect x="9" y="6" width="6" height="8" rx="1.2" />
      <path d="M12 14v4.5" />
      <path d="M10.6 18.5h2.8L12 21.5z" />
      <path d="M7 21l-2 .5M17 21l2 .5" />
    </>
  ),
  crane: (
    <>
      <path d="M6 21V3.5" />
      <path d="M3 21h6" />
      <path d="M3.5 5.5h17" />
      <path d="M6 9.5l4-4" />
      <path d="M17 5.5v6" />
      <path d="M17 11.5v1.5a1.6 1.6 0 1 1-1.6 1.6" />
    </>
  ),
  chainBlock: (
    <>
      <path d="M12 2v2" />
      <path d="M12 4a1.4 1.4 0 1 1-1.4 1.4" />
      <rect x="8" y="7" width="8" height="6.5" rx="2" />
      <path d="M10 13.5v7" strokeDasharray="1.4 1.6" />
      <path d="M14 13.5v4" />
      <path d="M14 17.5v1.2a1.8 1.8 0 1 1-1.8 1.8" />
    </>
  ),
  torch: (
    <>
      <path d="M3 18.5l2.5 2.5 8-8-2.5-2.5z" />
      <path d="M12.5 11.5l4-4" />
      <path d="M8 14.5l1.5 1.5" />
      <path d="M19.5 2.5c.8 1.3 2 2.2 2 3.8a2.2 2.2 0 0 1-4.4 0c0-.9.4-1.6.9-2.2" />
    </>
  ),
  magnet: (
    <>
      <path d="M12 2v3.5" />
      <rect x="7" y="5.5" width="10" height="4" rx="1.2" />
      <path d="M8.5 12l.5 1.5M12 12v1.5M15.5 12l-.5 1.5" />
      <path d="M3.5 21l4-5 2.5 2 3.5-4 7 7z" />
    </>
  ),
  trolley: (
    <>
      <path d="M3.5 4h2l3 12.5h11" />
      <rect x="10" y="8" width="7" height="6" rx="1" />
      <circle cx="9.5" cy="19.5" r="1.7" />
      <circle cx="17.5" cy="19.5" r="1.7" />
    </>
  ),
};

export default function EquipIcon({ name }) {
  return (
    <svg className="equip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
