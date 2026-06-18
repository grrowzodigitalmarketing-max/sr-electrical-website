export default function TopBar() {
  return (
    <div className="bg-[#0B1F3A] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">

          <div className="flex flex-col md:flex-row md:gap-6">

            <a
              href="tel:+917999998478"
              className="hover:text-[#FF6B00]"
            >
              📞 +91 7999998478
            </a>

            <a
  href="mailto:office@srelectricalandcontractor.com"
  className="hidden md:block hover:text-[#FF6B00]"
>
  📧 office@srelectricalandcontractor.com
</a>

          </div>

          <div className="text-left md:text-right">
            Mon - Sat : 9:00 AM - 6:00 PM
          </div>

        </div>

      </div>
    </div>
  );
}