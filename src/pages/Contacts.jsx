import TextField from "../components/fields/TextField";
import discord from "../assets/img/svg/discord.svg";
import envelope from "../assets/img/svg/envelope.svg";
import twitter from "../assets/img/svg/twitter.svg";

const Contacts = () => {
  return (
    <>
      <section className="mt-20 mb-12">
        <h1 className="text-white text-3xl font-semibold mb-3"><span className="text-primary">/</span>contacts</h1>
        <h2 className="text-white">I like discussions</h2>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p className="text-gray font-medium leading-7">
              I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>

            <TextField label="Name" name="name" />
          </div>

          <div className="flex flex-wrap justify-end gap-4">
            <div className="p-4 border border-white h-min">
              <p className="text-white font-medium">Support me here</p>
              <p className="text-gray">4149500120690030</p>
            </div>

            <div className="p-4 border border-white">
              <p className="font-semibold text-white mb-4">Message me here</p>

              <div className="flex flex-nowrap gap-x-1 mb-2 items-center">
                <img src={discord} />
                <p className="text-gray">!Elias#3519</p>
              </div>

              <div className="flex flex-nowrap gap-x-1 items-center">
                <img src={envelope} />
                <p className="text-gray">elias@elias.me</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-white text-3xl font-medium mb-5"><span className="text-primary">#</span>all-media</h3>

        <div className="flex gap-4">
          <div className="flex flex-nowrap gap-x-1 mb-2 items-center">
            <img src={twitter} />
            <p className="text-gray">@elias</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts;