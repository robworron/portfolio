import Image from "next/image";

const LIST_ITEM_LAYOUT =
  "grid grid-cols-10 md:grid-cols-16 gap-2"; /** grid cols are used to ensure icon size remains consistent */
const ITEM_SPACING = "col-span-9 md:col-span-15 flex items-center";
const ICON_SIZE_CLASS = "w-6 h-6 md:w-8 md:h-8";

export default function BioCard() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <figure className="flex flex-col w-4/5 lg:w-1/4 items-center">
        <Image
          src="/robworron.png"
          alt="Rob Worron"
          width={300}
          height={300}
          className="rounded-full"
        />
      </figure>
      <article className="flex flex-col gap-4 w-full lg:w-3/4">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Rob Worron
          </h1>
          <h2 className="text-lg lg:text-xl">Front-End Web Developer</h2>
        </header>
        <hr className="h-px border-0 bg-gray-700 opacity-50" />
        <p className="text-sm md:text-base">
          {
            "I'm a front-end web developer based in Niagara with a computer science background. I build clean, responsive, and accessible web applications using React, TypeScript, and Tailwind CSS. My work focuses on strong fundamentals, thoughtful UI, and building production-ready interfaces for real users. I also have experience working with APIs and backend services in Python."
          }
        </p>
        <hr className="h-px border-0 bg-gray-700 opacity-50" />
        <ul className="flex flex-col gap-2 text-sm md:text-base">
          <li className={LIST_ITEM_LAYOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={ICON_SIZE_CLASS}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <div className={ITEM_SPACING}>
              <p>BSc (Honours) Computer Science - Brock University 2024</p>
            </div>
          </li>
          <li className={LIST_ITEM_LAYOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={ICON_SIZE_CLASS}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className={ITEM_SPACING}>
              <p>Niagara, ON</p>
            </div>
          </li>
          <li className={LIST_ITEM_LAYOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={ICON_SIZE_CLASS}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className={ITEM_SPACING}>
              <a href="mailto:rworron94@gmail.com">rworron94@gmail.com</a>
            </div>
          </li>
          <li className={LIST_ITEM_LAYOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={ICON_SIZE_CLASS}
            >
              <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5v-1.69c-1.77.6-2.36-1.31-2.36-1.31a2.69 2.69 0 0 0-1.14-1.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2Z" />
            </svg>
            <div className={ITEM_SPACING}>
              <a
                href="https://github.com/robworron"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/robworron
              </a>
            </div>
          </li>
          <li className={LIST_ITEM_LAYOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className={ICON_SIZE_CLASS}
              aria-hidden="true"
            >
              <path d="M28.778 1.004H3.218c-.008 0-.017 0-.027 0-1.199 0-2.172.964-2.186 2.159v25.672c.014 1.196.987 2.161 2.186 2.161h25.584c1.2 0 2.175-.963 2.194-2.159V3.165c-.019-1.197-.994-2.161-2.195-2.161zM9.9 26.562H5.446V12.251H9.9zm-2.226-16.269c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v.004c0 1.423-1.154 2.577-2.577 2.577zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.251h4.266v1.951h.058c.828-1.395 2.326-2.315 4.039-2.315 4.5 0 5.332 2.962 5.332 6.817z" />
            </svg>
            <div className={ITEM_SPACING}>
              <a
                href="https://www.linkedin.com/in/rob-worron/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/rob-worron/
              </a>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}
