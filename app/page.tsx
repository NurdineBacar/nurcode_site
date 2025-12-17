import Image from "next/image";
import SplineObject from "./components/3d-object";
import { differentials, whatWeDoItems } from "./consts/home";
import { products } from "./consts/products";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <article className="panel">
        <section
          id="hero"
          className="flex items-center justify-between h-screen w-full md:w-screen px-6 md:px-20 pt-44 md:pt-auto"
        >
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">
              Transformando código em produtos
            </h3>
            <h2 className="text-4xl md:text-7xl font-extrabold text-blue-700">
              Criamos produtos digitais que resolvem problemas reais.
            </h2>
            <p className="text-lg font-semibold md:font-normal md:text-2xl mt-4">
              Somos a{" "}
              <strong>
                Nur<span className="text-blue-700">Code</span>
              </strong>
              , uma equipe focada no desenvolvimento de produtos digitais
              próprios, com experiência em aplicações web, mobile, sistemas e
              software escalável.
            </p>
            <button className="mt-4 md:mt-auto bg-blue-700 text-white px-3 py-2 font-semibold rounded-lg w-72 hover:bg-blue-400 hover:cursor-pointer">
              Veja Nossos Produtos
            </button>
          </div>

          <div className="w-full md:w-screen h-screen absolute left-0 md:static -z-10 md:z-0">
            <SplineObject />
          </div>
        </section>

        <section
          id="what-we-do"
          className="px-5 md:px-20  md:w-screen md:h-screen pt-48"
        >
          <h2 className="text-center text-4xl md:text-6xl text-blue-700 font-bold mb-3">
            Nossos Servicos de Alto Impacto
          </h2>
          <p className="text-blue-400 text-xl font-semibold text-center">
            Desenvolvemos soluções digitais modernas, seguras e pensadas para
            crescer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <article className="flex flex-col gap-6">
              {whatWeDoItems
                .map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="bg-neutral-100 px-10 py-8 rounded-xl md:h-56"
                      key={index}
                    >
                      <div className="p-2 bg-blue-700 text-white w-fit rounded-xl mb-4">
                        <Icon size={30} />
                      </div>
                      <h2 className="text-blue-400 font-semibold text-xl mb-1">
                        {item.title}
                      </h2>
                      <p className="text-justify">{item.content}</p>
                    </div>
                  );
                })
                .slice(0, 2)}
            </article>
            <Image
              src={"/images/129016.jpg"}
              width={700}
              height={700}
              className="w-full md:h-[470px] rounded-2xl object-cover"
              alt="image"
            />
            <article className="flex flex-col gap-6">
              {whatWeDoItems
                .map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="bg-neutral-100 px-10 py-8 rounded-xl md:h-56">
                      <div className="p-2 bg-blue-700 text-white w-fit rounded-xl mb-4">
                        <Icon size={30} />
                      </div>
                      <h2 className="text-blue-400 font-semibold text-xl mb-1">
                        {item.title}
                      </h2>
                      <p className="text-justify">{item.content}</p>
                    </div>
                  );
                })
                .slice(2, 4)}
            </article>
          </div>
        </section>

        <section
          id="diferential"
          className="flex flex-col-reverse md:flex-row gap-14 md:justify-between md:items-center px-5 md:px-20 md:w-screen md:h-screen pt-24 pb-20 md:pb-auto"
        >
          <article className="grid grid-cols-1 gap-6 md:w-1/2">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <div className="flex items-center gap-3 p-6 bg-neutral-100">
                  <div className="w-fit p-3 rounded-full bg-blue-700 text-white">
                    <Icon size={25} />
                  </div>

                  <p className="text-gray-500">{item.content}</p>
                </div>
              );
            })}
          </article>

          <article className="flex justify-center flex-col gap-5 items-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center">
              Porque Nos? O que Nos temos de diferente?
            </h2>
            <p className="text-center">
              {" "}
              A maioria das agências entrega software. Nós entregamos valor.
              Entendemos de churn, retenção e escalabilidade tanto quanto
              entendemos de React, Nuxt e Node.js.
            </p>

            <Image
              src={"/images/diferential.jpg"}
              width={700}
              height={700}
              className="rounded-xl object-cover w-full  md:w-[650px] md:h-[480px] -rotate-2 mt-5 transform hover:scale-105 transition-all ease-in hover:shadow-2xl duration-100 hover:cursor-pointer hover:rotate-0"
              alt="image"
            />
          </article>
        </section>

        <section
          id="projects"
          className=" md:w-screen md:h-screen pt-28 pb-28 md:pb-auto md:pt-48 px-5 md:px-20 bg-neutral-100"
        >
          <h2 className="text-4xl md:text-6xl text-blue-700 font-bold text-center">
            Produtos em Destaque
          </h2>
          <p className="text-lg md:text-xl text-blue-400 font-semibold text-center">
            Caaaaaaonheça alguns dos produtos e MVPs que estamos a desenvolver.
          </p>

          <article className="min-w-max flex items-center gap-8 mt-12 overflow-x-auto scrollbar-hide p-3">
            {products.map((item, index) => (
              <div
                className="relative shadow-md md:shadow-lg border border-neutral-200 rounded-3xl px-8 pt-10 h-[480px] w-[344px] overflow-hidden   hover:cursor-pointer  hover:shadow-blue-600 hover:translate-x-2 hover:-translate-y-5 transition-all ease-in duration-150 "
                key={index}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-blue-700">
                    {item.title}
                  </h2>
                  <span className="p-3 rounded-full ring-2 ring-neutral-500 text-neutral-500">
                    <MoveUpRight size={23} />
                  </span>
                </div>

                <p className="w-2/3 text-gray-600">{item.descrition}</p>

                <Image
                  src={"/images/diferential.jpg"}
                  width={600}
                  height={600}
                  className="rounded-tl-2xl  rounded-tr-2xl w-3/4 h-1/2 absolute bottom-0 left-11"
                  alt="image"
                />
              </div>
            ))}
          </article>
          <div className="flex justify-center mt-8">
            <button className="underline underline-offset-2 hover:text-blue-700 font-semibold hover:cursor-pointer">
              Ver Todos
            </button>
          </div>
        </section>

        <section
          id="final-call"
          className="md:w-screen md:h-screen px-5 md:px-20 flex flex-col items-center justify-center gap-16 py-36 md:py-auto"
        >
          <h2 className="text-4xl md:text-8xl text-center font-extrabold bg-gradient-to-r from-blue-700  via-purple-900 to-blue-400 bg-clip-text text-transparent">
            Tem uma ideia ou procura uma equipe para construir um produto?
          </h2>
          <p className="text-lg md:text-2xl rounded-full px-5 py-2 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-400 text-white font-semibold round">
            Vamos conversar
          </p>
        </section>
      </article>
    </main>
  );
}
