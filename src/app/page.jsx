import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          ducimus minima possimus consequuntur? Facere porro voluptatum illum.
          Dolore vitae, neque nisi omnis totam ducimus error iusto blanditiis
          cupiditate voluptas. Quod?
        </h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa
          saepe architecto quam a, quia sit iusto debitis fugit eos tempora
          laudantium dignissimos odit quae quibusdam alias consequuntur quos
          numquam ab voluptate, aut cum soluta, excepturi fugiat. Ratione,
          libero aut, sequi facere illo dolorem ullam nesciunt consequuntur
          sapiente, impedit ex? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reprehenderit culpa, magni quam et voluptates,
          quibusdam harum vitae commodi nihil blanditiis sed consectetur ipsum
          beatae vero! Distinctio rerum quasi sit at omnis porro incidunt hic
          quos, cumque saepe fugiat doloribus soluta.
        </p>
      </Link>
    </div>
  );
}
