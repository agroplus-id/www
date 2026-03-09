import Button from "../buttons/Button";

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="section-bg bg-agro-green-100 text-agro-green-500"
    >
      <div className="flex flex-col section-content py-16 items-center gap-8">
        <div id="comprof-header" className="flex flex-col items-center gap-4">
          <h2 className="flex flex-1 heading-2">Punya Pertanyaan Lain?</h2>
          <p className="flex flex-1 text-center">
            Untuk informasi lebih lanjut, silahkan hubungi kami melalui email
            berikut:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-fit items-center content-center lg:bg-agro-green-500/10 text-agro-green-500 gap-y-4 rounded-full py-2 lg:pr-2">
          <div className="bg-agro-green-500/10 lg:bg-transparent px-4 py-2 rounded-full">
            <p className="font-medium">inquiries@agroplusid.com</p>
          </div>
          <Button
            variant="Dark"
            className="!bg-agro-green-500 !text-agro-green-100"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=inquiries@agroplusid.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-nowrap">Hubungi Kami</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
