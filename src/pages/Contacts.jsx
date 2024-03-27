import discord from "../assets/img/svg/discord.svg";
import envelope from "../assets/img/svg/envelope.svg";
import linkedin from "../assets/img/svg/linkedin.svg";
import telegram from "../assets/img/svg/telegram.svg";
import TextField from "../components/fields/TextField";
import EmailField from "../components/fields/EmailField";
import TextareaField from "../components/fields/TextareaField";
import PrimaryButton from "../components/PrimaryButton";

const Contacts = () => {

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.children[0].children[0].children[0].value;
    const email = form.children[0].children[1].children[0].value;
    const title =  form.children[1].children[0].value;
    const message = form.children[2].children[0].value;
    console.log(name, email, title, message)
  }

  return (
    <>
      <section className="mt-20 mb-12">
        <h1 className="text-white text-3xl font-semibold mb-3"><span className="text-primary">/</span>contacts</h1>
        <h2 className="text-white">I like discussions</h2>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p className="text-gray font-medium leading-7 mb-8">
              I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>

            <form action="send" method="POST" onSubmit={handleSendMessage} className="flex flex-col gap-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <TextField label="Name" name="name" />

                <EmailField label="Email" name="email" />
              </div>

              <TextField label="Title" name="title" />

              <TextareaField label="Message" name="message" />

              <div>
                <PrimaryButton title="Send" />
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-end gap-4">
            <div className="p-4 border border-white h-min">
              <p className="text-white font-medium">Support me here</p>
              <p className="text-gray">4149500120690030</p>
            </div>

            <div className="p-4 border border-white h-min">
              <p className="font-semibold text-white mb-4">Message me here</p>

              <div className="flex flex-nowrap gap-x-1 mb-2 items-center">
                <img src={discord} />
                <p className="text-gray">intrvrtcode</p>
              </div>

              <div className="flex flex-nowrap gap-x-1 items-center">
                <img src={envelope} />
                <p className="text-gray break-all">aldirmd.freelance@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-white text-3xl font-medium mb-5"><span className="text-primary">#</span>all-media</h3>

        <div className="flex gap-4">
          <div className="flex flex-nowrap gap-x-2 mb-2 items-center">
            <img src={linkedin} />
            <p className="text-gray">@aldirahmaddani</p>
          </div>

          <div className="flex flex-nowrap gap-x-2 mb-2 items-center">
            <img src={telegram} />
            <p className="text-gray">@intrvrtcode</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts;