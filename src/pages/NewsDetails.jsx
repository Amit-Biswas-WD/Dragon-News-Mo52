import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data.data[0]);
  const news = data.data[0];
  // console.log(news);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-2xl font-semibold mb-3">Dragon News</h2>
          <div className="p-6 border rounded-lg">
            <div>
              <img
                className="w-full object-cover bg-cover"
                src={news?.image_url}
                alt="image_url"
              />
            </div>
            <h2 className="text-2xl font-bold my-4">{news?.title}</h2>
            <p className="text-base font-normal">{news?.details}</p>
            <Link
              to={`/category/${news?.category_id}`}
              className="btn max-w-72 bg-[#D72050] text-white hover:text-black flex items-center gap-4 my-4"
            >
              <span>
                <FaArrowLeftLong />
              </span>
              All news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
