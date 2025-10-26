import Button from "../buttons/Button";

export default function ContactSection() {
  return (
    <section
      id="contacs"
      className="section-bg bg-agro-green-600 text-agro-green-100"
    >
      <div className="flex flex-col section-content py-16 items-center gap-8">
        <div id="comprof-header" className="flex flex-col items-center gap-4">
          <h2 className="flex flex-1 heading-2">Punya Pertanyaan Lain?</h2>
          <p className="flex flex-1">
            Untuk informasi lebih lanjut, silahkan hubungi kami melalui email
            berikut:
          </p>
        </div>
        <div className="flex flex-row w-fit items-center content-center bg-agro-green-100 text-agro-green-600 rounded-full p-2 gap-4 pl-4">
          <p className="font-medium">inquiries@agroplusid.com</p>
          <Button
            variant="Dark"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=inquiries@agroplusid.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
