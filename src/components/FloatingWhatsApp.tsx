import { company, waLink } from "@/lib/company";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="relative h-7 w-7"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.479-1.762-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.867 9.867 0 0 1-5.032-1.378l-.361-.214-3.745.982 1.001-3.648-.235-.374a9.867 9.867 0 0 1-1.51-5.26c.001-5.441 4.428-9.868 9.869-9.868 2.638 0 5.118 1.027 6.982 2.89a9.825 9.825 0 0 1 2.889 6.983c-.002 5.44-4.429 9.868-9.87 9.868m8.397-18.256A11.815 11.815 0 0 0 12.479 0C5.903 0 .552 5.352.55 11.93a11.82 11.82 0 0 0 1.6 5.992L.45 24.13l6.355-1.666a11.847 11.847 0 0 0 5.671 1.445h.005c6.575 0 11.927-5.352 11.929-11.93a11.816 11.816 0 0 0-3.962-8.853" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const message = `Assalamu alaikum ${company.name}, I'd like to know more about your chiffon shawls.`;

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${company.name} on WhatsApp`}
      className="group fixed right-5 bottom-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]"
      />
      <WhatsAppIcon />
      <span className="pointer-events-none absolute top-1/2 right-16 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap bg-foreground px-3 py-2 text-[0.6rem] tracking-[0.18em] uppercase text-white opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Order on WhatsApp
      </span>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
