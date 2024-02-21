import { farmhouse, spoul } from "@/app/fonts/fonts";
import ScrapbookGrid from "./components/scrapbook/ScrapbookGrid";

function Home() {
  return (
    <main className="content-grid py-12">
      <h1 className={farmhouse.className}>FarmHouse font</h1>
      <h1 className={spoul.className}>Spoul Font</h1>
      <p className="fs-100">
        100 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis quas pariatur ipsa aspernatur quidem illum quam? Tenetur
        veniam exercitationem, omnis cum eius obcaecati consequuntur eligendi
        distinctio dignissimos praesentium eaque hic.
      </p>
      <p className="fs-200">
        200 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis quas pariatur ipsa aspernatur quidem illum quam? Tenetur
        veniam exercitationem, omnis cum eius obcaecati consequuntur eligendi
        distinctio dignissimos praesentium eaque hic.
      </p>
      <p className="fs-300">
        300 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis quas pariatur ipsa aspernatur quidem illum quam? Tenetur
        veniam exercitationem, omnis cum eius obcaecati consequuntur eligendi
        distinctio dignissimos praesentium eaque hic.
      </p>
      <p className="fs-400">
        400 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis quas pariatur ipsa aspernatur quidem illum quam? Tenetur
        veniam exercitationem, omnis cum eius obcaecati consequuntur eligendi
        distinctio dignissimos praesentium eaque hic.
      </p>
      <p className="fs-500">
        500 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis quas pariatur ipsa aspernatur quidem illum quam? Tenetur
        veniam exercitationem, omnis cum eius obcaecati consequuntur eligendi
        distinctio dignissimos praesentium eaque hic.
      </p>
      <p className="fs-600">
        600 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="fs-700">700 Lorem, ipsum dolor sit amet</p>
      <p className="fs-800">800 Lorem, ipsum dolor sit amet</p>
      <p className="fs-900">900 Lorem, ipsum dolor sit amet</p>
      <ScrapbookGrid />
    </main>
  );
}

export default Home;
